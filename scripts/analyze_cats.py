import json

def load_json(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except:
        return []

def analyze(data, default_type):
    issues = []
    for item in data:
        model = item.get('model', '').upper()
        desc = item.get('desc', '').lower()
        
        is_screen = False
        is_pad = False
        
        # Check descriptions
        if 'lụa' in desc or 'screen' in desc or '丝印' in desc:
            is_screen = True
        if 'tampon' in desc or 'pad' in desc or '移印' in desc or 'cốc mực' in desc or 'khay mực' in desc:
            is_pad = True
            
        # Check model prefixes
        if model.startswith('HS-') or model.startswith('HS '):
            is_screen = True
        if model.startswith('HP-') or model.startswith('HP '):
            is_pad = True
            
        # Determine actual type
        actual = default_type
        if is_screen and not is_pad:
            actual = 'screen'
        elif is_pad and not is_screen:
            actual = 'pad'
            
        if actual != default_type:
            issues.append(f"Model: {model}, Desc: {desc} -> Should be {actual}")
            
    return issues

sj_data = load_json(r"C:\Users\TL\Documents\vnpis-web\src\data\sj-printers.json")
hj_pad_data = load_json(r"C:\Users\TL\Documents\vnpis-web\src\data\hj-printers.json")
hj_screen_data = load_json(r"C:\Users\TL\Documents\vnpis-web\src\data\hj-screen-printers.json")

print("--- SJ (Pad list) ---")
sj_issues = analyze(sj_data, 'pad')
for i in sj_issues: print(i)

print("\n--- HJ Pad list ---")
hjp_issues = analyze(hj_pad_data, 'pad')
for i in hjp_issues: print(i)

print("\n--- HJ Screen list ---")
hjs_issues = analyze(hj_screen_data, 'screen')
for i in hjs_issues: print(i)
