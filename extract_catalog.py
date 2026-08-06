import os
import pdfplumber

pdf_path = r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\HJ\Cosota Vietnam_Machine & Consumable Catalog.pdf"

try:
    with pdfplumber.open(pdf_path) as pdf:
        with open("cosota_catalog_text.txt", "w", encoding="utf-8") as f:
            for i, page in enumerate(pdf.pages):
                text = page.extract_text()
                f.write(f"\n--- Page {i+1} ---\n")
                if text:
                    f.write(text)
    print("Successfully saved text to cosota_catalog_text.txt")
except Exception as e:
    print("Error:", e)
