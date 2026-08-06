import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

base_data_dir = r"C:\Users\TL\Documents\vnpis-web\src\data"
pad_json = os.path.join(base_data_dir, "hj-printers.json")
screen_json = os.path.join(base_data_dir, "hj-screen-printers.json")

with open(pad_json, 'r', encoding='utf-8') as f:
    pad_list = json.load(f)

# Catalog extracted images
cat_imgs = [f"/images/pad-printers/hj/catalog_p{i}_1.png" for i in range(1, 16)]

for idx, item in enumerate(pad_list):
    # Ensure every pad model has a unique non-empty image
    if not item.get('image') or 'placeholder' in item.get('image', ''):
        # Pick from catalog images
        item['image'] = cat_imgs[idx % len(cat_imgs)]

# Full HS screen printer list
screen_list = [
    {
        "model": "HS-260P",
        "colors": 1,
        "desc": "Máy in lụa phẳng hút chân không",
        "plateSize": "400x600mm",
        "printArea": "200x260mm",
        "speed": "1600 nhịp/giờ",
        "image": "/images/pad-printers/hj/catalog_p1_1.png"
    },
    {
        "model": "HS-350P",
        "colors": 1,
        "desc": "Máy in lụa phẳng độ chính xác cao",
        "plateSize": "500x700mm",
        "printArea": "250x350mm",
        "speed": "1400 nhịp/giờ",
        "image": "/images/pad-printers/hj/catalog_p2_1.png"
    },
    {
        "model": "HS-500P",
        "colors": 1,
        "desc": "Máy in lụa phẳng tiêu chuẩn 500mm",
        "plateSize": "550x800mm",
        "printArea": "300x500mm",
        "speed": "900 nhịp/giờ",
        "image": "/images/pad-printers/hj/catalog_p3_1.png"
    },
    {
        "model": "HS-600P",
        "colors": 1,
        "desc": "Máy in lụa phẳng tiêu chuẩn 600mm",
        "plateSize": "700x1000mm",
        "printArea": "400x600mm",
        "speed": "1000 nhịp/giờ",
        "image": "/images/pad-printers/hj/catalog_p4_1.png"
    },
    {
        "model": "HS-1300PE",
        "colors": 1,
        "desc": "Máy in lụa phẳng chạy bàn hút chân không khổ lớn",
        "plateSize": "1300x1600mm",
        "printArea": "1000x1300mm",
        "speed": "600 nhịp/giờ",
        "image": "/images/pad-printers/hj/catalog_p5_1.png"
    },
    {
        "model": "HS-260R",
        "colors": 1,
        "desc": "Máy in lụa trụ tròn (Cylindrical)",
        "plateSize": "350x500mm",
        "printArea": "Đường kính Ф80mm",
        "speed": "1400 nhịp/giờ",
        "image": "/images/pad-printers/hj/catalog_p6_1.png"
    },
    {
        "model": "HS-500R",
        "colors": 1,
        "desc": "Máy in lụa trụ tròn cỡ lớn 150mm",
        "plateSize": "450x750mm",
        "printArea": "Đường kính Ф150mm",
        "speed": "1000 nhịp/giờ",
        "image": "/images/pad-printers/hj/catalog_p7_1.png"
    }
]

with open(pad_json, 'w', encoding='utf-8') as f:
    json.dump(pad_list, f, ensure_ascii=False, indent=2)

with open(screen_json, 'w', encoding='utf-8') as f:
    json.dump(screen_list, f, ensure_ascii=False, indent=2)

print(f"Finalized HJ Pad: {len(pad_list)} models")
print(f"Finalized HJ Screen: {len(screen_list)} models")
