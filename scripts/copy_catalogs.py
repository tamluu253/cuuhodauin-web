import os
import shutil
import json

catalogs_info = [
    {
        "src": r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\Machine catalogue ENGY.pdf",
        "dest": "engy-machine-catalog.pdf",
        "title": "Máy In ENGY Catalog",
        "supplier": "ENGY",
        "type": "Máy in",
        "desc": "Danh mục các dòng máy in chuyên dụng từ nhà cung cấp ENGY."
    },
    {
        "src": r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\Pad printing accessories catalogue ENGY.pdf",
        "dest": "engy-accessories-catalog.pdf",
        "title": "Phụ kiện In Tampon ENGY",
        "supplier": "ENGY",
        "type": "Vật tư",
        "desc": "Danh mục các phụ kiện in tampon từ nhà cung cấp ENGY."
    },
    {
        "src": r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\Pads and Moulds catalogue_Engy.pdf",
        "dest": "engy-pads-moulds-catalog.pdf",
        "title": "Tampon & Khuôn In ENGY",
        "supplier": "ENGY",
        "type": "Vật tư",
        "desc": "Danh mục cục cao su (Tampon) và khuôn in từ ENGY."
    },
    {
        "src": r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\Amy - cons\catalgo.pdf",
        "dest": "amy-consumables-catalog.pdf",
        "title": "Vật Tư Ngành In Amy",
        "supplier": "Amy",
        "type": "Vật tư",
        "desc": "Cốc mực, vòng gạt mực, dao gạt và vật tư tiêu hao."
    },
    {
        "src": r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\Amy - cons\tampon.pdf",
        "dest": "amy-tampon-catalog.pdf",
        "title": "Bản Đồ Tampon Amy",
        "supplier": "Amy",
        "type": "Vật tư",
        "desc": "Kích thước, mã số và sơ đồ các cục silicone in tampon."
    },
    {
        "src": r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\Niuniu - Zoe\Catalog Niuniu 25-10-11.pdf",
        "dest": "niuniu-catalog.pdf",
        "title": "Vật Tư Niuniu",
        "supplier": "Niuniu",
        "type": "Vật tư",
        "desc": "Các trang thiết bị và vật tư ngành in cơ bản."
    },
    {
        "src": r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\Tiffany - new pad printer\Product catalogue.pdf",
        "dest": "tiffany-product-catalog.pdf",
        "title": "Máy In Tiffany (DL Series)",
        "supplier": "Tiffany",
        "type": "Máy in",
        "desc": "Danh mục toàn diện các dòng máy in tampon chuyên dụng."
    },
    {
        "src": r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\Tiffany - new pad printer\Product catalogue - silkscreen.pdf",
        "dest": "tiffany-silkscreen-catalog.pdf",
        "title": "Máy In Lụa Tiffany",
        "supplier": "Tiffany",
        "type": "Máy in lụa",
        "desc": "Các hệ thống máy in lụa và băng tải."
    }
]

out_dir = r"C:\Users\TL\Documents\vnpis-web\public\documents\catalogs"
os.makedirs(out_dir, exist_ok=True)

final_data = []

for cat in catalogs_info:
    src_path = cat["src"]
    if os.path.exists(src_path):
        dest_path = os.path.join(out_dir, cat["dest"])
        try:
            shutil.copy2(src_path, dest_path)
            size_mb = os.path.getsize(dest_path) / (1024 * 1024)
            cat["size"] = f"{size_mb:.1f} MB"
            cat["url"] = f"/documents/catalogs/{cat['dest']}"
            del cat["src"]
            del cat["dest"]
            final_data.append(cat)
            print(f"Copied {cat['title']} ({cat['size']})")
        except Exception as e:
            print(f"Error copying {src_path}: {e}")
    else:
        print(f"Missing file: {src_path}")

json_path = r"C:\Users\TL\Documents\vnpis-web\src\data\catalogs.json"
with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(final_data, f, indent=2, ensure_ascii=False)

print(f"Created json with {len(final_data)} entries.")
