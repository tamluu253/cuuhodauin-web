import json

with open("src/data/hj-printers.json", "r", encoding="utf-8") as f:
    data = json.load(f)

pad_printers = []
screen_printers = []

for m in data:
    if "máy in lụa" in m["desc"].lower() or m["model"].startswith("HS-") and m["model"] != "HS-125":
        screen_printers.append(m)
    else:
        pad_printers.append(m)

with open("src/data/hj-printers.json", "w", encoding="utf-8") as f:
    json.dump(pad_printers, f, indent=2, ensure_ascii=False)

with open("src/data/hj-screen-printers.json", "w", encoding="utf-8") as f:
    json.dump(screen_printers, f, indent=2, ensure_ascii=False)

print(f"Split completed! {len(pad_printers)} pad printers and {len(screen_printers)} screen printers.")
