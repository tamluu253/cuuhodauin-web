import json

# Manual spec map
specs_map = {
    "HS-260R-12": {"printArea": "Đường kính Ф35mm"},
    "HS-90120": {"printArea": "900x1200mm"},
    "HS-5070": {"plateSize": "700x600mm", "printArea": "700x500mm"},
    "HS-260PME": {},
    "HS-1515": {"plateSize": "400x600mm", "printArea": "200x260mm", "speed": "1500 nhịp/giờ"},
    "HS-4060CCD": {"speed": "900 nhịp/giờ"},
    "HS-260PME-2R": {},
    "HS-260PME-4RX": {},
    "HS-260P": {"plateSize": "400x600mm", "printArea": "200x260mm", "speed": "1600 nhịp/giờ"},
    "HS-350P": {"plateSize": "500x700mm", "printArea": "250x350mm", "speed": "1400 nhịp/giờ"},
    "HS-500P": {"plateSize": "550x800mm", "printArea": "300x500mm", "speed": "900 nhịp/giờ"},
    "HS-600P": {"plateSize": "700x1000mm", "printArea": "400x600mm", "speed": "1000 nhịp/giờ"},
    "HS-600PX": {"plateSize": "600x1000mm", "printArea": "400x600mm", "speed": "650 nhịp/giờ"},
    "HS-70100P": {"plateSize": "1000x1400mm", "printArea": "700x1000mm", "speed": "600 nhịp/giờ"},
    "HS-260R": {"plateSize": "350x500mm", "printArea": "Đường kính Ф80mm", "speed": "1400 nhịp/giờ"},
    "HS-500R": {"plateSize": "450x750mm", "printArea": "Đường kính Ф150mm", "speed": "Tùy chỉnh"},
    "HS-1126": {"printArea": "500x400mm"}
}

with open("src/data/hj-screen-printers.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for m in data:
    model_id = m["model"]
    sp = specs_map.get(model_id, {})
    
    m["plateSize"] = sp.get("plateSize", "")
    m["printArea"] = sp.get("printArea", "")
    m["speed"] = sp.get("speed", "")
    
    # Fix the image to placeholder to avoid mixed pad/screen printer images
    m["image"] = "/images/pad-printers/hj/placeholder.png"

with open("src/data/hj-screen-printers.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Updated specs and reverted to placeholder images!")
