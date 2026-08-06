import re
import json

def parse_text(text):
    models = []
    current_model = None
    
    lines = text.split('\n')
    for i, line in enumerate(lines):
        line = line.strip()
        
        # Match model names like HP-160A, HS-350P, HP250AYM
        m = re.match(r'^(H[PS][-\w]+)\s*(.*)', line)
        if m and '系列' not in line and '参数' not in line and '特点' not in line:
            # We found a model header
            model_id = m.group(1).upper()
            
            # Avoid matching random text that looks like a model
            if len(model_id) > 12: continue
            
            current_model = {
                "id": model_id.lower(),
                "name": model_id,
                "model": model_id,
                "desc": m.group(2).strip(),
                "specs": {
                    "plateSize": "",
                    "printArea": "",
                    "speed": ""
                },
                "image": ""
            }
            models.append(current_model)
            
        elif current_model:
            # Try to extract specs
            if '钢板尺寸' in line or 'p late s ize' in line or 'plate size' in line or '网框' in line or 'frame' in line:
                for j in range(1, 4):
                    if i + j < len(lines):
                        nxt = lines[i+j]
                        if 'mm' in nxt:
                            if not current_model["specs"]["plateSize"]:
                                current_model["specs"]["plateSize"] = nxt.strip()
                            break
            elif '印刷面积' in line or 'Printing Size' in line or 'Printing Area' in line:
                for j in range(1, 4):
                    if i + j < len(lines):
                        nxt = lines[i+j]
                        if 'mm' in nxt:
                            if not current_model["specs"]["printArea"]:
                                current_model["specs"]["printArea"] = nxt.strip()
                            break
            elif '印刷速度' in line or 'Printing Speed' in line or 'Printing speed' in line or '产能' in line:
                for j in range(1, 4):
                    if i + j < len(lines):
                        nxt = lines[i+j]
                        if '次/小时' in nxt or 'pcs/hour' in nxt or 'pcs/H' in nxt or 'PCS/H' in nxt or 'P/H' in nxt:
                            if not current_model["specs"]["speed"]:
                                current_model["specs"]["speed"] = nxt.strip()
                            break

    return models

with open("cosota_catalog_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

models = parse_text(text)

# Deduplicate by ID
unique_models = {}
for m in models:
    if m["id"] not in unique_models:
        unique_models[m["id"]] = m

with open("hj_parsed.json", "w", encoding="utf-8") as f:
    json.dump(list(unique_models.values()), f, indent=2, ensure_ascii=False)

print("Saved to hj_parsed.json")
