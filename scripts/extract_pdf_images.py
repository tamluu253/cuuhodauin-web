import pdfplumber
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

pdf_path = r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\HJ\Pad printer Catalogs..pdf"
out_dir = r"C:\Users\TL\Documents\vnpis-web\public\images\pad-printers\hj"

with pdfplumber.open(pdf_path) as pdf:
    for i, page in enumerate(pdf.pages):
        for j, img in enumerate(page.images):
            try:
                # Extract image bbox
                x0, top, x1, bottom = img["x0"], img["top"], img["x1"], img["bottom"]
                cropped = page.crop((x0, top, x1, bottom))
                img_obj = cropped.to_image()
                img_path = os.path.join(out_dir, f"catalog_p{i+1}_{j+1}.png")
                img_obj.save(img_path)
                print(f"Saved {img_path}")
            except Exception as e:
                pass
