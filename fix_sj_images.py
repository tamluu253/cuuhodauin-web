import fitz
import json
import os

pdf_path = r"C:\Users\TL\.gemini\antigravity\brain\4b0a83fa-a57e-47fb-a0c4-1e0353602c63\media__1783504955847.pdf"
doc = fitz.open(pdf_path)

with open('src/data/sj-printers.json', 'r', encoding='utf-8') as f:
    printers = json.load(f)

model_list = [p['model'] for p in printers]
os.makedirs('public/images/pad-printers/sj', exist_ok=True)

# We will collect all image usages on pages 2 and 3
for page_idx in [2, 3]:
    page = doc[page_idx]
    image_list = page.get_images()
    blocks = page.get_text("dict")["blocks"]
    
    for img in image_list:
        xref = img[0]
        base_image = doc.extract_image(xref)
        img_bytes = base_image['image']
        
        # An image can appear multiple times on a page
        rects = page.get_image_rects(xref)
        for rect in rects:
            closest_model = None
            min_dist = 9999
            
            for b in blocks:
                if b['type'] == 0:
                    bbox = b['bbox']
                    
                    text_content = ""
                    for l in b['lines']:
                        for s in l['spans']:
                            text_content += s['text']
                    
                    for m in model_list:
                        if m in text_content or m.replace('-','') in text_content.replace('-',''):
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
                        break

with open('src/data/sj-printers.json', 'w', encoding='utf-8') as f:
    json.dump(printers, f, ensure_ascii=False, indent=2)

print("Finished matching missing images")
