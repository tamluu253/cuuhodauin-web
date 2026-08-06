import os
import re
import fitz  # PyMuPDF is much better at image extraction if available. Let's try it or fallback to pypdf

def extract_pdf_info(pdf_path, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    try:
        import fitz
        doc = fitz.open(pdf_path)
        print(f"Opened {pdf_path} with {len(doc)} pages.")
        
        for i, page in enumerate(doc):
            text = page.get_text("text")
            print(f"--- Page {i+1} ---")
            print(text.strip()[:200] + "...")
            
            image_list = page.get_images(full=True)
            for j, img in enumerate(image_list):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                image_filename = os.path.join(output_dir, f"page_{i+1}_img_{j}.{image_ext}")
                with open(image_filename, "wb") as f:
                    f.write(image_bytes)
        print("Done.")
    except ImportError:
        print("PyMuPDF (fitz) not found. Trying pypdf...")
        from pypdf import PdfReader
        reader = PdfReader(pdf_path)
        print(f"Opened {pdf_path} with {len(reader.pages)} pages.")
        for i, page in enumerate(reader.pages):
            print(f"--- Page {i+1} ---")
            try:
                print(page.extract_text()[:200] + "...")
            except:
                pass
            for j, image_file_object in enumerate(page.images):
                image_filename = os.path.join(output_dir, f"page_{i+1}_img_{j}{os.path.splitext(image_file_object.name)[1]}")
                with open(image_filename, "wb") as f:
                    f.write(image_file_object.data)
        print("Done.")

if __name__ == "__main__":
    import sys
    if len(sys.argv) < 3:
        print("Usage: python extract_catalog.py <pdf_path> <output_dir>")
        sys.exit(1)
    extract_pdf_info(sys.argv[1], sys.argv[2])
