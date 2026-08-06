import os
import re
import json
import shutil
import pandas as pd

pdf_dir = r"C:\Users\TL\Documents\Disk D\VNPIS\###Suppliers\Sanjin\Extracted_PDF\PDF_Library"
photo_dir = r"C:\Users\TL\Documents\Disk D\VNPIS\###Suppliers\Sanjin\Extracted_Photos\Photo_Library"
json_path = r"C:\Users\TL\Documents\vnpis-web\src\data\sj-printers.json"
img_dest_dir = r"C:\Users\TL\Documents\vnpis-web\public\images\pad-printers\sj"
excel_path = r"C:\Users\TL\Documents\Disk D\VNPIS\###Suppliers\Sanjin\BaoGia_MayInSJ_NoiBo.xlsx"

os.makedirs(img_dest_dir, exist_ok=True)

# 1. Parse PDFs to get Prefix -> Model mapping
models_map = {} # prefix -> model
unprefixed_models = []

for f in os.listdir(pdf_dir):
    if not f.lower().endswith(".pdf"):
        continue
    # regex to match: Prefix(Model) or Prefix Model
    # Example: A5(SYDK-125-100).pdf, C21 HYD-200-150.pdf, A40(MYD-125-90）.pdf
    basename = f[:-4]
    
    # Match A1, B10, etc followed by space or (
    match = re.match(r'^([A-Z]\d+)[ \(\uff08]+([A-Z0-9\-]+)[ \)\uff09]*', basename)
    if match:
        prefix = match.group(1)
        model = match.group(2)
        models_map[prefix] = model
    else:
        # No prefix found
        model = basename.strip()
        unprefixed_models.append(model)

# 2. Parse Photos
photos_map = {} # prefix -> photo path

for f in os.listdir(photo_dir):
    if f.startswith('.') or f == 'Thumbs.db':
        continue
    
    match = re.match(r'^([A-Z]\d+)\s', f)
    if match:
        prefix = match.group(1)
        photos_map[prefix] = os.path.join(photo_dir, f)

# 3. Read existing JSON
with open(json_path, 'r', encoding='utf-8') as jf:
    existing_data = json.load(jf)

existing_models = {item['model'].strip().upper(): item for item in existing_data}
new_data = []

# Merge parsed models
for prefix, model in models_map.items():
    model_key = model.strip().upper()
    item = existing_models.get(model_key, {
        "model": model,
        "colors": 1,
        "desc": "Máy in tampon SJ",
        "plateSize": "Đang cập nhật",
        "printArea": "Đang cập nhật",
        "speed": "Liên hệ",
        "image": ""
    })
    
    # Match photo
    if prefix in photos_map:
        photo_path = photos_map[prefix]
        ext = os.path.splitext(photo_path)[1].lower()
        new_img_name = f"{model.lower().replace('-', '_')}{ext}"
        dest_path = os.path.join(img_dest_dir, new_img_name)
        
        shutil.copy2(photo_path, dest_path)
        item['image'] = f"/images/pad-printers/sj/{new_img_name}"
        
    new_data.append(item)
    if model_key in existing_models:
        del existing_models[model_key]

# Unprefixed models
for model in unprefixed_models:
    model_key = model.strip().upper()
    item = existing_models.get(model_key, {
        "model": model,
        "colors": 1,
        "desc": "Máy in tampon SJ",
        "plateSize": "Đang cập nhật",
        "printArea": "Đang cập nhật",
        "speed": "Liên hệ",
        "image": ""
    })
    new_data.append(item)
    if model_key in existing_models:
        del existing_models[model_key]

# Remaining existing models
for item in existing_models.values():
    new_data.append(item)

# Ensure no duplicate models
seen = set()
unique_new_data = []
for item in new_data:
    if item['model'] not in seen:
        seen.add(item['model'])
        unique_new_data.append(item)

with open(json_path, 'w', encoding='utf-8') as jf:
    json.dump(unique_new_data, jf, ensure_ascii=False, indent=2)

print(f"Updated {json_path} with {len(unique_new_data)} models.")

# 4. Generate Excel
excel_data = []
for idx, item in enumerate(unique_new_data, 1):
    excel_data.append({
        "STT": idx,
        "Model": item.get('model', ''),
        "Cấu hình": f"Số màu: {item.get('colors', 1)} | Bản in: {item.get('plateSize', '')}",
        "Giá mua (Tệ/VNĐ)": "",
        "Giá bán (VNĐ)": "",
        "File Tham Khảo (PDF)": f"{item.get('model', '')}.pdf"
    })

df = pd.DataFrame(excel_data)

with pd.ExcelWriter(excel_path, engine='openpyxl') as writer:
    df.to_excel(writer, index=False, sheet_name='Báo Giá Máy SJ')
    
    worksheet = writer.sheets['Báo Giá Máy SJ']
    for idx, col in enumerate(df.columns):
        series = df[col]
        max_len = max((
            series.astype(str).map(len).max(),
            len(str(series.name))
        )) + 5
        worksheet.column_dimensions[chr(65 + idx)].width = max_len

print(f"Generated Excel file at {excel_path}")
