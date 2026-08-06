import os
import sys
import json
import zipfile
import shutil
import re

# Set stdout encoding
sys.stdout.reconfigure(encoding='utf-8')

hj_supplier_dir = r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\HJ"
base_data_dir = r"C:\Users\TL\Documents\vnpis-web\src\data"
public_pad_img_dir = r"C:\Users\TL\Documents\vnpis-web\public\images\pad-printers\hj"
public_screen_img_dir = r"C:\Users\TL\Documents\vnpis-web\public\images\screen-printers\hj"

os.makedirs(public_pad_img_dir, exist_ok=True)
os.makedirs(public_screen_img_dir, exist_ok=True)

# 1. Helper to extract images from DOCX files
def extract_images_from_docx(docx_path, output_prefix):
    saved_files = []
    try:
        with zipfile.ZipFile(docx_path, 'r') as z:
            media_files = [f for f in z.namelist() if f.startswith('word/media/')]
            for idx, mf in enumerate(media_files):
                ext = os.path.splitext(mf)[1].lower()
                if ext in ['.png', '.jpg', '.jpeg']:
                    out_filename = f"{output_prefix}_{idx+1}{ext}"
                    out_path = os.path.join(public_pad_img_dir if 'HS' not in output_prefix.upper() else public_screen_img_dir, out_filename)
                    with open(out_path, 'wb') as out_f:
                        out_f.write(z.read(mf))
                    saved_files.append(out_path)
    except Exception as e:
        print(f"Error extracting DOCX {docx_path}: {e}")
    return saved_files

# 2. Find all DOCX files and direct images in HJ folder
extracted_models = {}

for root, dirs, files in os.walk(hj_supplier_dir):
    for f in files:
        path = os.path.join(root, f)
        f_upper = f.upper()
        
        # Check if file relates to a model name
        match = re.search(r'(HP[-_]?\d+[A-Z]*|HS[-_]?\d+[A-Z]*)', f_upper)
        model_name = match.group(1).replace('_', '-').upper() if match else None
        
        if not model_name:
            folder_name = os.path.basename(root).upper()
            match_folder = re.search(r'(HP[-_]?\d+[A-Z]*|HS[-_]?\d+[A-Z]*)', folder_name)
            if match_folder:
                model_name = match_folder.group(1).replace('_', '-').upper()
                
        if f.lower().endswith('.docx') and model_name:
            imgs = extract_images_from_docx(path, model_name.lower())
            if imgs:
                extracted_models[model_name] = imgs[0] # Pick the first image
        elif f.lower().endswith(('.jpg', '.jpeg', '.png')) and model_name:
            ext = os.path.splitext(f)[1].lower()
            out_dir = public_screen_img_dir if 'HS' in model_name else public_pad_img_dir
            out_path = os.path.join(out_dir, f"{model_name.lower()}{ext}")
            shutil.copy2(path, out_path)
            extracted_models[model_name] = out_path

print(f"Extracted assets for models: {list(extracted_models.keys())}")

# Load existing HJ json files
pad_json_path = os.path.join(base_data_dir, "hj-printers.json")
screen_json_path = os.path.join(base_data_dir, "hj-screen-printers.json")

with open(pad_json_path, 'r', encoding='utf-8') as f:
    pad_data = json.load(f)

# Re-build screen data if empty
screen_data = []

# List of known HS (screen printer) models from Hengjin
known_hs_models = [
    {"model": "HS-260P", "desc": "Máy in lụa phẳng hút chân không", "plateSize": "400x600mm", "printArea": "200x260mm", "speed": "1600 nhịp/giờ"},
    {"model": "HS-350P", "desc": "Máy in lụa phẳng độ chính xác cao", "plateSize": "500x700mm", "printArea": "250x350mm", "speed": "1400 nhịp/giờ"},
    {"model": "HS-500P", "desc": "Máy in lụa phẳng tiêu chuẩn 500mm", "plateSize": "550x800mm", "printArea": "300x500mm", "speed": "900 nhịp/giờ"},
    {"model": "HS-600P", "desc": "Máy in lụa phẳng tiêu chuẩn 600mm", "plateSize": "700x1000mm", "printArea": "400x600mm", "speed": "1000 nhịp/giờ"},
    {"model": "HS-1300PE", "desc": "Máy in lụa phẳng chạy bàn hút chân không khổ lớn", "plateSize": "1300x1600mm", "printArea": "1000x1300mm", "speed": "600 nhịp/giờ"},
    {"model": "HS-260R", "desc": "Máy in lụa trụ tròn (Cylindrical)", "plateSize": "350x500mm", "printArea": "Đường kính Ф80mm", "speed": "1400 nhịp/giờ"},
    {"model": "HS-500R", "desc": "Máy in lụa trụ tròn cỡ lớn 150mm", "plateSize": "450x750mm", "printArea": "Đường kính Ф150mm", "speed": "1000 nhịp/giờ"}
]

# Update images for Pad printers
for item in pad_data:
    m = item['model'].upper().replace('_', '-')
    for k, v in extracted_models.items():
        if k in m or m in k:
            rel_path = v.replace(r"C:\Users\TL\Documents\vnpis-web\public", "").replace("\\", "/")
            item['image'] = rel_path
            break

# Build screen data with images
for item in known_hs_models:
    m = item['model'].upper().replace('_', '-')
    img_path = ""
    for k, v in extracted_models.items():
        if k in m or m in k:
            img_path = v.replace(r"C:\Users\TL\Documents\vnpis-web\public", "").replace("\\", "/")
            break
    if img_path:
        item['image'] = img_path
        screen_data.append(item)
    else:
        # Fallback image if we copied a generic one
        pass

# Write updated JSONs
with open(pad_json_path, 'w', encoding='utf-8') as f:
    json.dump(pad_data, f, ensure_ascii=False, indent=2)

with open(screen_json_path, 'w', encoding='utf-8') as f:
    json.dump(screen_data, f, ensure_ascii=False, indent=2)

print(f"Updated HJ Pad: {len(pad_data)} models")
print(f"Updated HJ Screen: {len(screen_data)} models")
