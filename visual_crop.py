import fitz
import json
import os
from PIL import Image
import io

pdf_path = r"C:\Users\TL\.gemini\antigravity\brain\4b0a83fa-a57e-47fb-a0c4-1e0353602c63\media__1783504955847.pdf"
doc = fitz.open(pdf_path)

with open('src/data/sj-printers.json', 'r', encoding='utf-8') as f:
    printers = json.load(f)

model_list = [p['model'] for p in printers]
os.makedirs('public/images/pad-printers/sj', exist_ok=True)

# Process pages 2 and 3
for page_idx in [2, 3]:
    page = doc[page_idx]
    
    # Render the whole page to image at 150 DPI for good quality
    pix = page.get_pixmap(dpi=150)
    img_data = pix.tobytes("png")
    page_img = Image.open(io.BytesIO(img_data))
    
    # Scale factor from PDF points to Pixmap pixels
    scale_x = pix.width / page.rect.width
    scale_y = pix.height / page.rect.height
    
    # Get all text blocks
    blocks = page.get_text("dict")["blocks"]
    
    for b in blocks:
        if b['type'] != 0: continue
        
        text_content = ""
        for l in b['lines']:
            for s in l['spans']:
                text_content += s['text']
        
        # Check if any model is in this block's text
        for m in model_list:
            # We want an exact match of the label, e.g., "3.SYDK2-125-100"
            if m in text_content or m.replace('-','') in text_content.replace('-',''):
                # We found the label block!
                bbox = b['bbox']
                # The image is below this label.
                # The grid cell is approx 141.73 wide, and 212.5 high (on PDF points)
                # Let's define the crop box based on the label's bbox.
                # Left: bbox[0] - 20 (approx)
                # Right: bbox[2] + 40 (approx) -> actually, just column boundaries!
                
                # Column width is 141.73 points.
                col_idx = int(bbox[0] / 141.73)
                col_left = col_idx * 141.73
                col_right = (col_idx + 1) * 141.73
                
                # Row height is approx 200 points.
                # Top is just below the text block: bbox[3]
                # Bottom is approx bbox[3] + 160
                crop_top = bbox[3]
                crop_bottom = crop_top + 160
                
                # Convert to Pixmap coordinates
                left_px = int(col_left * scale_x)
                right_px = int(col_right * scale_x)
                top_px = int(crop_top * scale_y)
                bottom_px = int(crop_bottom * scale_y)
                
                # Crop the image!
                cropped = page_img.crop((left_px, top_px, right_px, bottom_px))
                
                # Trim white borders if possible, but it's okay to leave them.
                # Save it.
                img_filename = f"{m.lower().replace('-', '_')}.png"
                img_path = f"public/images/pad-printers/sj/{img_filename}"
                cropped.save(img_path)
                
                # Update JSON
                for p in printers:
                    if p['model'] == m:
                        p['image'] = f"/images/pad-printers/sj/{img_filename}"
                        break
                break

with open('src/data/sj-printers.json', 'w', encoding='utf-8') as f:
    json.dump(printers, f, ensure_ascii=False, indent=2)

print("Visual crop completed!")
