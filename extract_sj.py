import fitz
import json
import os
import re

pdf_path = r"C:\Users\TL\.gemini\antigravity\brain\4b0a83fa-a57e-47fb-a0c4-1e0353602c63\media__1783504955847.pdf"

doc = fitz.open(pdf_path)

printers = []

# Parse text from pages 0 and 1
for page_idx in [0, 1]:
    text = doc[page_idx].get_text()
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    
    # We iterate and find lines starting with number.
    i = 0
    while i < len(lines):
        if re.match(r'^\d+\.', lines[i]):
            name = lines[i].split('.', 1)[1] if '.' in lines[i] else lines[i]
            
            # The next line is usually the model
            model = lines[i+1] if i+1 < len(lines) else ""
            
            # The line after is plate size
            plate = lines[i+2] if i+2 < len(lines) else ""
            
            colors = 1
            if '双色' in name or '两色' in name: colors = 2
            elif '三色' in name: colors = 3
            elif '四色' in name: colors = 4
            elif '五色' in name: colors = 5
            elif '六色' in name: colors = 6
            elif '八色' in name: colors = 8
            
            printers.append({
                "model": model,
                "colors": colors,
                "desc": name,
                "plateSize": plate,
                "printArea": "Tùy chọn",
                "speed": "Liên hệ",
                "image": ""
            })
            i += 3 # skip the next 2 lines since we processed them
        else:
            i += 1

# Process Images from all pages
os.makedirs('public/images/pad-printers/sj', exist_ok=True)
matches = 0

model_list = [p['model'] for p in printers]

for page_idx in range(len(doc)):
    page = doc[page_idx]
    images = page.get_images()
    blocks = page.get_text("dict")["blocks"]
    
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        img_bytes = base_image['image']
        
        rects = page.get_image_rects(xref)
        if not rects: continue
        rect = rects[0]
        
        closest_model = None
        min_dist = 9999
        
        for b in blocks:
            if b['type'] == 0:
                bbox = b['bbox']
                
                # We expect the model label to be above or below the image. 
                # The labels in the PDF are "1.MN-80-75", so they contain the model name.
                text_content = ""
                for l in b['lines']:
                    for s in l['spans']:
                        text_content += s['text']
                
                for m in model_list:
                    if m in text_content or m.replace('-','') in text_content.replace('-',''):
                        # Calculate vertical distance between text and image
                        # Text could be above (bbox[3] <= rect[1]) or below (bbox[1] >= rect[3])
                        dist = min(abs(rect[1] - bbox[3]), abs(bbox[1] - rect[3]))
                        if dist < min_dist:
                            min_dist = dist
                            closest_model = m
                            
        if closest_model:
            img_filename = f"{closest_model.lower().replace('-', '_')}.png"
            img_path = f"public/images/pad-printers/sj/{img_filename}"
            with open(img_path, 'wb') as img_f:
                img_f.write(img_bytes)
            
            for p in printers:
                if p['model'] == closest_model:
                    p['image'] = f"/images/pad-printers/sj/{img_filename}"
                    matches += 1
                    break

os.makedirs('src/data', exist_ok=True)
with open('src/data/sj-printers.json', 'w', encoding='utf-8') as f:
    json.dump(printers, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(printers)} printers and matched {matches} images.")
