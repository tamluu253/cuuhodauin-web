import json
import os
import shutil

# 17 Clean Models
clean_models = [
    {"model": "HS-260R-12", "desc": "Máy in lụa dạng tròn 12 trạm", "page": 2},
    {"model": "HS-90120", "desc": "Máy in lụa khổ lớn chạy bàn 900x1200mm", "page": 3},
    {"model": "HS-5070", "desc": "Máy in lụa chạy bàn 700x500mm", "page": 3},
    {"model": "HS-260PME", "desc": "Máy in lụa phẳng Servo độ chính xác cao", "page": 3},
    {"model": "HS-1515", "desc": "Máy in lụa chuyên dụng in bóng bay", "page": 3},
    {"model": "HS-4060CCD", "desc": "Máy in lụa phẳng định vị camera CCD", "page": 3},
    {"model": "HS-260PME-2R", "desc": "Máy in lụa Servo 2 trạm kép", "page": 4},
    {"model": "HS-260PME-4RX", "desc": "Máy in lụa Servo 4 trạm tích hợp dỡ phôi", "page": 4},
    {"model": "HS-260P", "desc": "Máy in lụa phẳng hút chân không", "page": 4},
    {"model": "HS-350P", "desc": "Máy in lụa phẳng độ chính xác cao", "page": 5},
    {"model": "HS-500P", "desc": "Máy in lụa phẳng tiêu chuẩn 500mm", "page": 5},
    {"model": "HS-600P", "desc": "Máy in lụa phẳng tiêu chuẩn 600mm", "page": 6},
    {"model": "HS-600PX", "desc": "Máy in lụa phẳng chạy bàn chính xác cao 600mm", "page": 6},
    {"model": "HS-70100P", "desc": "Máy in lụa phẳng hút chân không 700x1000mm", "page": 7},
    {"model": "HS-260R", "desc": "Máy in lụa trụ tròn (Cylindrical)", "page": 4},
    {"model": "HS-500R", "desc": "Máy in lụa trụ tròn cỡ lớn 150mm", "page": 5},
    {"model": "HS-1126", "desc": "Máy in lụa thủ công chuyên in áo thun", "page": 8}
]

img_dir = "cosota_extracted_images"
all_imgs = [f for f in os.listdir(img_dir) if f.endswith(".jpeg")]

# Map models by page
page_map = {}
for m in clean_models:
    p = m["page"]
    if p not in page_map:
        page_map[p] = []
    page_map[p].append(m)

for p, models in page_map.items():
    # get images for page p
    p_imgs = [f for f in all_imgs if f.startswith(f"page_{p}_")]
    p_imgs.sort(key=lambda x: os.path.getsize(os.path.join(img_dir, x)), reverse=True)
    
    # assign images
    for i, m in enumerate(models):
        img_url = "/images/pad-printers/hj/placeholder.png" # default
        if i < len(p_imgs):
            src_file = os.path.join(img_dir, p_imgs[i])
            dest_file = f"{m['model'].lower()}.jpg"
            dest_path = os.path.join("public", "images", "pad-printers", "hj", dest_file)
            shutil.copy(src_file, dest_path)
            img_url = f"/images/pad-printers/hj/{dest_file}"
        m["image"] = img_url

# Load existing data
with open("src/data/hj-printers.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# Append new models
for m in clean_models:
    new_entry = {
        "model": m["model"],
        "colors": 1,
        "desc": m["desc"],
        "plateSize": "",
        "printArea": "",
        "speed": "",
        "image": m["image"]
    }
    data.append(new_entry)

with open("src/data/hj-printers.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Added HS models successfully!")
