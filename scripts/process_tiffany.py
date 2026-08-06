import os
import io
import sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
import json
import uuid
import re

def process_tiffany_pdf(pdf_path, output_json):
    try:
        from pypdf import PdfReader
        reader = PdfReader(pdf_path)
        
        full_text = ""
        for page in reader.pages:
            try:
                full_text += page.extract_text() + "\n"
            except:
                pass
                
        # Simple heuristic: Look for blocks starting with DL-
        models = []
        chunks = re.split(r'\b(DL-\d+[A-Z0-9-]*)\b', full_text)
        
        printers = []
        if len(chunks) > 1:
            for i in range(1, len(chunks), 2):
                model_name = chunks[i]
                model_desc = chunks[i+1][:500] # Take next 500 chars as spec
                
                # Clean up desc
                specs = [line.strip() for line in model_desc.split('\n') if line.strip()]
                
                printers.append({
                    "id": f"dl-{uuid.uuid4().hex[:6]}",
                    "name": model_name,
                    "desc": "Máy in hãng DL",
                    "features": specs[:5],
                    "specs": specs,
                    "image": ""
                })
                
        with open(output_json, 'w', encoding='utf-8') as f:
            json.dump(printers, f, indent=2, ensure_ascii=False)
        print(f"Saved {len(printers)} printers to {output_json}")
    except Exception as e:
        print(f"Failed to process {pdf_path}: {e}")

if __name__ == "__main__":
    src_pdf = r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\Tiffany - new pad printer\Product catalogue.pdf"
    out_json = r"C:\Users\TL\Documents\vnpis-web\src\data\dl-printers.json"
    process_tiffany_pdf(src_pdf, out_json)
