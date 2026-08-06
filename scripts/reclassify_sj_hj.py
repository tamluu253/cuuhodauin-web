import json
import os

base_dir = r"C:\Users\TL\Documents\vnpis-web\src\data"

def reclassify_sj():
    path = os.path.join(base_dir, "sj-printers.json")
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    pad_printers = []
    screen_printers = []
    
    for item in data:
        model = item.get('model', '').upper()
        desc = item.get('desc', '')
        
        # Determine if it is a screen printer or hot stamping (which we might group with screen or separate)
        # B-series in PDF were Screen Printers: SS-, S-, SLD-, SLS-
        # C-series in PDF were Hot Stamping: H, HT, HD
        is_screen = False
        
        if model.startswith('SS-') or model.startswith('S-') or model.startswith('SLD-') or model.startswith('SLS-'):
            is_screen = True
            if "tampon" in desc.lower():
                item['desc'] = desc.replace("tampon", "lụa")
                
        # Some items in B series were MN-800, MN-1000, MN-1200 (Screen stretching machines?)
        if model.startswith('MN-800') or model.startswith('MN-1000') or model.startswith('MN-1200'):
            is_screen = True
            if "tampon" in desc.lower():
                item['desc'] = desc.replace("tampon", "lụa")
                
        # What about HJ? The user said "HJ và SJ đều đang có tình trạng máy tampon lại thành máy lụa và ngược lại."
        # So we should also check HJ.
        
        if is_screen:
            screen_printers.append(item)
        else:
            pad_printers.append(item)
            
    print(f"SJ: Found {len(pad_printers)} pad printers and {len(screen_printers)} screen printers.")
    
    # Save back to sj-printers.json (pad) and sj-screen-printers.json (screen)
    with open(os.path.join(base_dir, "sj-printers.json"), 'w', encoding='utf-8') as f:
        json.dump(pad_printers, f, ensure_ascii=False, indent=2)
        
    with open(os.path.join(base_dir, "sj-screen-printers.json"), 'w', encoding='utf-8') as f:
        json.dump(screen_printers, f, ensure_ascii=False, indent=2)

def reclassify_hj():
    pad_path = os.path.join(base_dir, "hj-printers.json")
    screen_path = os.path.join(base_dir, "hj-screen-printers.json")
    
    pad_data = []
    screen_data = []
    
    if os.path.exists(pad_path):
        with open(pad_path, 'r', encoding='utf-8') as f:
            pad_data = json.load(f)
            
    if os.path.exists(screen_path):
        with open(screen_path, 'r', encoding='utf-8') as f:
            screen_data = json.load(f)
            
    all_hj = pad_data + screen_data
    
    new_pad = []
    new_screen = []
    
    for item in all_hj:
        model = item.get('model', '').upper()
        desc = item.get('desc', '').lower()
        
        is_screen = False
        
        # HJ rules: 
        # HP- means pad printer. HS- means screen printer.
        if 'HS' in model or 'LỤA' in desc.upper() or 'SCREEN' in desc.upper():
            is_screen = True
        elif 'HP' in model or 'TAMPON' in desc.upper() or 'PAD' in desc.upper():
            is_screen = False
            
        if is_screen:
            new_screen.append(item)
        else:
            new_pad.append(item)
            
    print(f"HJ: Found {len(new_pad)} pad printers and {len(new_screen)} screen printers.")
    
    with open(pad_path, 'w', encoding='utf-8') as f:
        json.dump(new_pad, f, ensure_ascii=False, indent=2)
        
    with open(screen_path, 'w', encoding='utf-8') as f:
        json.dump(new_screen, f, ensure_ascii=False, indent=2)

reclassify_sj()
reclassify_hj()
