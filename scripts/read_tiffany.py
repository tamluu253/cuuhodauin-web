import os
import io
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def extract_pdf(pdf_path):
    print(f"Reading {pdf_path} with fitz...")
    try:
        import fitz
        doc = fitz.open(pdf_path)
        for i, page in enumerate(doc):
            text = page.get_text("text")
            if text.strip():
                print(f"--- Page {i+1} ---")
                print(text[:200].replace('\n', ' '))
                if i > 5:
                    break
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_pdf(r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\Tiffany - new pad printer\Product catalogue - silkscreen.pdf")
