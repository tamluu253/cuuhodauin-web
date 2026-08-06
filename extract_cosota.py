import os
import fitz

pdf_file = "C:/Users/TL/Documents/Disk D/cosota/## Ali - Cons supplier/HJ/Cosota Vietnam_Machine & Consumable Catalog.pdf"
out_dir = "cosota_extracted_images"

os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_file)
for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    images = page.get_images(full=True)
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        # skip tiny images (icons etc)
        if len(image_bytes) < 10000: continue
            
        with open(f"{out_dir}/page_{page_num+1}_img_{img_idx}.{image_ext}", "wb") as f:
            f.write(image_bytes)

print(f"Extracted images to {out_dir}")
