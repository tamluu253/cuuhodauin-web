import fitz  # PyMuPDF
import os
import shutil

INPUT_DIR = r"C:\Users\TL\Documents\Disk D\VNPIS\###Suppliers\2. Bolijie (Hong Kong)"
OUTPUT_DIR = r"C:\Users\TL\Documents\vnpis-web\public\media\documents"

# Create output dir if not exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

# List of files to process (based on previous ls)
FILES_TO_PROCESS = [
    "2025 Black Ink ROHS Report (English Version)-T113.pdf",
    "Black Ink Halogen Report 2025 (English Version) - T113.pdf",
    "2025 - Solvents + Cleaning Agents Halogen Report (English Version) - SV-1 & CL-1.pdf",
    "2025 Solvents + Cleaning Agents RoHS Report (English Version) _ SV-1 & CL-1.pdf"
]

KEYWORDS_TO_REDACT = ["Bolijie", "Zhuhai Bolijie", "Zhuhai Bolijie Technology Co., Ltd"]

for filename in FILES_TO_PROCESS:
    input_path = os.path.join(INPUT_DIR, filename)
    
    # We will rename output file for VNPIS
    if "ROHS" in filename.upper() and "BLACK" in filename.upper():
        out_name = "VNPIS-T113-Black-Ink-RoHS-Report.pdf"
    elif "HALOGEN" in filename.upper() and "BLACK" in filename.upper():
        out_name = "VNPIS-T113-Black-Ink-Halogen-Report.pdf"
    elif "ROHS" in filename.upper() and "SOLVENT" in filename.upper():
        out_name = "VNPIS-SV1-Solvent-RoHS-Report.pdf"
    elif "HALOGEN" in filename.upper() and "SOLVENT" in filename.upper():
        out_name = "VNPIS-SV1-Solvent-Halogen-Report.pdf"
    else:
        out_name = "VNPIS-" + filename

    output_path = os.path.join(OUTPUT_DIR, out_name)

    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        continue

    try:
        doc = fitz.open(input_path)
        for page in doc:
            for keyword in KEYWORDS_TO_REDACT:
                # Search for the keyword
                text_instances = page.search_for(keyword)
                for inst in text_instances:
                    # Add redaction annotation
                    page.add_redact_annot(inst, fill=(1, 1, 1)) # White fill
            # Apply redactions
            page.apply_redactions()
        
        doc.save(output_path)
        print(f"Processed and saved: {out_name}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print("Done processing PDFs.")
