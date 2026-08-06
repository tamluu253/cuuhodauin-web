import pdfplumber

pdf1 = r"C:\Users\TL\Documents\Disk D\VNPIS\###Suppliers\Sanjin\Price list for Agent （20260717）.pdf"
pdf2 = r"C:\Users\TL\Documents\Disk D\VNPIS\###Suppliers\Sanjin\Price list for Agent （20260717） - sreen printer and hot stamping.pdf"

def print_pdf_tables(pdf_path, out_file):
    out_file.write(f"--- Tables in {pdf_path} ---\n")
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            tables = page.extract_tables()
            for j, table in enumerate(tables):
                out_file.write(f"Page {i+1} Table {j+1}\n")
                for row in table[:10]: # Print first 10 rows
                    out_file.write(f"{row}\n")
                out_file.write("...\n")

with open(r"C:\Users\TL\Documents\vnpis-web\scripts\tables.log", "w", encoding="utf-8") as out:
    print_pdf_tables(pdf1, out)
    print_pdf_tables(pdf2, out)
