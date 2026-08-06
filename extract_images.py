import fitz
import json
import os
import shutil

json_path = 'src/data/hj-printers.json'
with open(json_path, 'r', encoding='utf-8') as f:
    printers = json.load(f)

pdfs = ['C:\\Users\\TL\\.gemini\\antigravity\\brain\\4b0a83fa-a57e-47fb-a0c4-1e0353602c63\\media__1783391346054.pdf', 'C:\\Users\\TL\\.gemini\\antigravity\\brain\\4b0a83fa-a57e-47fb-a0c4-1e0353602c63\\media__1783398331984.pdf']

os.makedirs('public/images/pad-printers/hj', exist_ok=True)

matches = 0
for pdf in pdfs:
    try:
        doc = fitz.open(pdf)
    except Exception as e:
        print(f"Could not open {pdf}: {e}")
        continue
        
    for page_idx in range(len(doc)):
        page = doc[page_idx]
        text = page.get_text()
        
        for p in printers:
            model = p['model']
            if model in text or model.replace('-', '') in text.replace('-', '') or model.replace('-', ' ') in text.replace('-', ' '):
                images = page.get_images()
                if images:
                    valid_images = []
                    for img in images:
                        w, h = img[2], img[3]
                        # Filter out very large background images (e.g. >1000px) 
                        # and extremely wide banners (w/h > 2.5) which might be logos
                        if w < 800 and h < 800 and (w / h) < 2.5 and (h / w) < 3 and w > 100 and h > 100:
                            valid_images.append(img)
                    
                    if not valid_images:
                        continue
                        
                    largest_img = max(valid_images, key=lambda x: x[2] * x[3])
                    xref = largest_img[0]
                    base_image = doc.extract_image(xref)
                    img_bytes = base_image['image']
                    
                    img_filename = f"{model.lower().replace('-', '_')}.png"
                    img_path = f"public/images/pad-printers/hj/{img_filename}"
                    with open(img_path, 'wb') as img_f:
                        img_f.write(img_bytes)
                    
                    p['image'] = f"/images/pad-printers/hj/{img_filename}"
                    matches += 1

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(printers, f, ensure_ascii=False, indent=2)

print(f'Matched {matches} models.')
