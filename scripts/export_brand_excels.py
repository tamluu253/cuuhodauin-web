import json
import pandas as pd
import os
import pdfplumber

def extract_sj_prices():
    prices = {}
    pdf1 = r"C:\Users\TL\Documents\Disk D\VNPIS\###Suppliers\Sanjin\Price list for Agent （20260717）.pdf"
    if not os.path.exists(pdf1):
        return prices
    try:
        with pdfplumber.open(pdf1) as pdf:
            for page in pdf.pages:
                tables = page.extract_tables()
                for table in tables:
                    for row in table:
                        if len(row) >= 7:
                            model = str(row[2]).strip().upper()
                            price = str(row[6]).strip()
                            if price and price.isdigit() and model:
                                prices[model] = int(price)
    except Exception as e:
        print("Error parsing SJ prices:", e)
    return prices

sj_prices_dict = extract_sj_prices()

def create_excel(brand_name, json_files, output_path, prices_dict=None):
    if prices_dict is None:
        prices_dict = {}
        
    all_data = []
    
    for j_file in json_files:
        if not os.path.exists(j_file):
            continue
            
        with open(j_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        category = "Máy In Lụa" if "screen" in j_file else "Máy In Tampon"
            
        for item in data:
            model = item.get('model', '')
            model_key = model.upper()
            price = prices_dict.get(model_key, "")
            
            img_path = item.get('image', '')
            full_img_link = f"https://vnpis.com{img_path}" if img_path else ""
            
            all_data.append({
                "Phân loại": category,
                "Model": model,
                "Cấu hình": f"Số màu: {item.get('colors', '')} | Bản in: {item.get('plateSize', '')}",
                "Giá nhập": price,
                "Giá bán": "",
                "Link hình ảnh": full_img_link
            })
            
    if not all_data:
        # Create empty template
        all_data.append({
            "Phân loại": "",
            "Model": "",
            "Cấu hình": "",
            "Giá nhập": "",
            "Giá bán": "",
            "Link hình ảnh": ""
        })
        
    df = pd.DataFrame(all_data)
    
    with pd.ExcelWriter(output_path, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name=f'Báo Giá {brand_name}')
        worksheet = writer.sheets[f'Báo Giá {brand_name}']
        for idx, col in enumerate(df.columns):
            series = df[col]
            max_len = max((
                series.astype(str).map(len).max(),
                len(str(series.name))
            )) + 5
            worksheet.column_dimensions[chr(65 + idx)].width = max_len
            
    print(f"Created {output_path} with {len(all_data)} rows.")

out_dir = r"C:\Users\TL\Documents\Disk D\VNPIS\###Suppliers"

# 1. SJ
sj_jsons = [
    r"C:\Users\TL\Documents\vnpis-web\src\data\sj-printers.json"
]
create_excel("SJ", sj_jsons, os.path.join(out_dir, "Sanjin", "BaoGia_SJ.xlsx"), sj_prices_dict)

# 2. HJ
hj_jsons = [
    r"C:\Users\TL\Documents\vnpis-web\src\data\hj-printers.json",
    r"C:\Users\TL\Documents\vnpis-web\src\data\hj-screen-printers.json"
]
# Assuming we don't know the exact folder for HJ in Suppliers, just save in Suppliers root for now
create_excel("HJ", hj_jsons, os.path.join(out_dir, "BaoGia_HJ.xlsx"))

# 3. DL
dl_jsons = [
    r"C:\Users\TL\Documents\vnpis-web\src\data\dl-printers.json"
]
create_excel("DL", dl_jsons, os.path.join(out_dir, "BaoGia_DL.xlsx"))

print("Done generating Excels.")
