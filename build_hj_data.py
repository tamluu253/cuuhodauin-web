import re
import json
import os
import shutil

def parse_text(text_file, pdf_prefix):
    models = []
    
    with open(text_file, "r", encoding="utf-8") as f:
        text = f.read()

    current_model = None
    current_page = 1

    lines = text.split('\n')
    for i, line in enumerate(lines):
        line = line.strip()
        
        m_page = re.match(r'^--- Page (\d+) ---', line)
        if m_page:
            current_page = int(m_page.group(1))
            continue
            
        # Match model names
        m = re.match(r'^(H[PS][-\w]+)\s*(.*)', line)
        if m and '系列' not in line and '参数' not in line and '特点' not in line and '指南' not in line:
            model_id = m.group(1).upper()
            if len(model_id) > 12: continue
            
            # Check if model already exists on this page to avoid duplicates
            if not any(x['id'] == model_id.lower() for x in models):
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
                    "page": current_page,
                    "pdf_prefix": pdf_prefix,
                    "image": ""
                }
                models.append(current_model)
            else:
                current_model = next(x for x in models if x['id'] == model_id.lower())
            
        elif current_model:
            if '钢板尺寸' in line or 'plate size' in line.lower() or 'frame size' in line.lower() or '网框' in line:
                for j in range(1, 4):
                    if i + j < len(lines):
                        nxt = lines[i+j]
                        if 'mm' in nxt:
                            if not current_model["specs"]["plateSize"]:
                                current_model["specs"]["plateSize"] = nxt.strip()
                            break
            elif '印刷面积' in line or 'printing size' in line.lower() or 'printing area' in line.lower():
                for j in range(1, 4):
                    if i + j < len(lines):
                        nxt = lines[i+j]
                        if 'mm' in nxt:
                            if not current_model["specs"]["printArea"]:
                                current_model["specs"]["printArea"] = nxt.strip()
                            break
            elif '印刷速度' in line or 'printing speed' in line.lower() or '产能' in line:
                for j in range(1, 4):
                    if i + j < len(lines):
                        nxt = lines[i+j]
                        if '次/小时' in nxt or 'pcs/hour' in nxt.lower() or 'pcs/h' in nxt.lower():
                            if not current_model["specs"]["speed"]:
                                current_model["specs"]["speed"] = nxt.strip()
                            break

    return models

# 1. Parse both texts
models_hj = parse_text("hj_catalog_text.txt", "hj_extracted_images")
models_cosota = parse_text("cosota_catalog_text.txt", "cosota_extracted_images") # Wait, I didn't extract images from cosota yet!
# I will only map images for HJ first.

# Let's just use the models_hj for image mapping, because we only extracted images from HJ PDF.
# For Cosota, we'll just add the models without images for now, or use placeholder.

# Combine models
all_models_dict = {}
for m in models_hj + models_cosota:
    if m["id"] not in all_models_dict:
        all_models_dict[m["id"]] = m

all_models = list(all_models_dict.values())

# 2. Map images from hj_extracted_images
hj_img_dir = "hj_extracted_images"
pages_dict = {}
for m in all_models:
    if m["pdf_prefix"] == "hj_extracted_images":
        p = m["page"]
        if p not in pages_dict:
            pages_dict[p] = []
        pages_dict[p].append(m)

# Find all extracted images
all_imgs = [f for f in os.listdir(hj_img_dir) if os.path.isfile(os.path.join(hj_img_dir, f))]

for p, models_on_page in pages_dict.items():
    # Get images for this page
    page_imgs = [f for f in all_imgs if f.startswith(f"page_{p}_img_")]
    # Sort by size descending
    page_imgs.sort(key=lambda x: os.path.getsize(os.path.join(hj_img_dir, x)), reverse=True)
    
    # Assign top N images to the N models
    for i, m in enumerate(models_on_page):
        if i < len(page_imgs):
            src_img = os.path.join(hj_img_dir, page_imgs[i])
            ext = os.path.splitext(src_img)[1]
            dest_img_name = f"{m['id']}{ext}"
            dest_img_path = os.path.join("public", "images", "pad-printers", "hj", dest_img_name)
            
            # Copy image
            shutil.copy(src_img, dest_img_path)
            
            # Update model
            m['image'] = f"/images/pad-printers/hj/{dest_img_name}"

# 3. Save to src/data/hj-printers.json
# Load existing to keep colors if available
existing_data = []
if os.path.exists("src/data/hj-printers.json"):
    with open("src/data/hj-printers.json", "r", encoding="utf-8") as f:
        existing_data = json.load(f)

existing_dict = {m["model"].lower(): m for m in existing_data}

final_output = []
for m in all_models:
    out = {
        "model": m["model"],
        "colors": 1,
        "desc": m["desc"],
        "plateSize": m["specs"]["plateSize"],
        "printArea": m["specs"]["printArea"],
        "speed": m["specs"]["speed"],
        "image": m["image"] if m["image"] else "/images/pad-printers/hj/placeholder.png"
    }
    
    # Merge with existing
    old = existing_dict.get(m["id"])
    if old:
        out["colors"] = old.get("colors", 1)
        if not out["desc"] and old.get("desc"): out["desc"] = old["desc"]
        if not out["plateSize"] and old.get("plateSize"): out["plateSize"] = old["plateSize"]
        if not out["printArea"] and old.get("printArea"): out["printArea"] = old["printArea"]
        if not out["speed"] and old.get("speed"): out["speed"] = old["speed"]
        if not out["image"] or "placeholder" in out["image"]:
            if old.get("image"): out["image"] = old["image"]
            
    final_output.append(out)

with open("src/data/hj-printers.json", "w", encoding="utf-8") as f:
    json.dump(final_output, f, indent=2, ensure_ascii=False)

print(f"Updated hj-printers.json with {len(final_output)} models!")
