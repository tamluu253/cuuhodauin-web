import json
import os

base_dir = r"C:\Users\TL\Documents\vnpis-web\src\data"

def clean_and_separate():
    # Load files
    files_to_load = [
        "sj-printers.json",
        "sj-screen-printers.json",
        "hj-printers.json",
        "hj-screen-printers.json"
    ]
    
    data_map = {}
    for fname in files_to_load:
        path = os.path.join(base_dir, fname)
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                data_map[fname] = json.load(f)
        else:
            data_map[fname] = []
            
    # Combine SJ data to re-evaluate
    all_sj = data_map["sj-printers.json"] + data_map["sj-screen-printers.json"]
    
    sj_pad = []
    sj_screen = []
    sj_hotstamping = []
    
    screen_models_explicit = [
        "SLD-200", "SS-400-3", "S-200L", "S-400T", "SS-AG-200", 
        "MN300-A", "MN400-A", "SLS-400-2H", "SLS-400-2S", "SS-250-3"
    ]
    
    for item in all_sj:
        model = item.get('model', '').upper()
        img = item.get('image', '').strip()
        
        # 1. Remove if no image or placeholder
        if not img or 'placeholder' in img:
            continue
            
        # 2. Check for Hot Stamping (starts with H, HT, HD, etc.)
        # Note: HT-50, H200, H168, HD250... all start with H.
        # But wait, are there pad printers starting with H? HP is HJ. SJ hot stamping start with H.
        if model.startswith('H') and not model.startswith('HJ') and not model.startswith('HS'):
            # It's SJ hot stamping
            item['desc'] = "Máy ép nhũ (Hot Stamping) SJ"
            sj_hotstamping.append(item)
            continue
            
        # 3. Check for specific screen models
        is_screen = False
        if model in screen_models_explicit:
            is_screen = True
        elif model.startswith('SS-') or model.startswith('S-') or model.startswith('SLD-') or model.startswith('SLS-'):
            is_screen = True
        elif model.startswith('MN-800') or model.startswith('MN-1000') or model.startswith('MN-1200'):
            is_screen = True
            
        if is_screen:
            if 'tampon' in item.get('desc', '').lower():
                item['desc'] = item['desc'].replace('tampon', 'lụa').replace('Tampon', 'Lụa')
            sj_screen.append(item)
        else:
            sj_pad.append(item)
            
    # Clean HJ data
    for fname in ["hj-printers.json", "hj-screen-printers.json"]:
        cleaned = []
        for item in data_map[fname]:
            img = item.get('image', '').strip()
            if not img or 'placeholder' in img:
                continue
            cleaned.append(item)
        data_map[fname] = cleaned
        
    # Write back
    with open(os.path.join(base_dir, "sj-printers.json"), 'w', encoding='utf-8') as f:
        json.dump(sj_pad, f, ensure_ascii=False, indent=2)
    with open(os.path.join(base_dir, "sj-screen-printers.json"), 'w', encoding='utf-8') as f:
        json.dump(sj_screen, f, ensure_ascii=False, indent=2)
    with open(os.path.join(base_dir, "sj-hotstamping.json"), 'w', encoding='utf-8') as f:
        json.dump(sj_hotstamping, f, ensure_ascii=False, indent=2)
        
    with open(os.path.join(base_dir, "hj-printers.json"), 'w', encoding='utf-8') as f:
        json.dump(data_map["hj-printers.json"], f, ensure_ascii=False, indent=2)
    with open(os.path.join(base_dir, "hj-screen-printers.json"), 'w', encoding='utf-8') as f:
        json.dump(data_map["hj-screen-printers.json"], f, ensure_ascii=False, indent=2)
        
    print(f"SJ Pad: {len(sj_pad)}")
    print(f"SJ Screen: {len(sj_screen)}")
    print(f"SJ Hot Stamping: {len(sj_hotstamping)}")
    print(f"HJ Pad: {len(data_map['hj-printers.json'])}")
    print(f"HJ Screen: {len(data_map['hj-screen-printers.json'])}")

clean_and_separate()
