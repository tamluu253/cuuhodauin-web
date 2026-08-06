import json
import os
import re

def infer_pad_specs(model):
    model_upper = model.upper()
    plate = "Đang cập nhật"
    area = "Đang cập nhật"
    
    if '120' in model_upper:
        plate, area = "100x100mm", "70x70mm"
    elif '125' in model_upper:
        plate, area = "100x200mm", "80x80mm"
    elif '150' in model_upper:
        plate, area = "100x150mm", "70x120mm"
    elif '160' in model_upper:
        plate, area = "100x150mm", "70x120mm"
    elif '200' in model_upper:
        plate, area = "150x200mm", "120x150mm"
    elif '250' in model_upper:
        plate, area = "150x250mm", "120x200mm"
    elif '300' in model_upper:
        plate, area = "150x300mm", "120x250mm"
    elif '400' in model_upper:
        plate, area = "200x400mm", "170x350mm"
    elif '450' in model_upper:
        plate, area = "200x450mm", "170x400mm"
    elif '80' in model_upper:
        plate, area = "100x75mm", "70x45mm"
        
    return plate, area

def infer_screen_specs(model):
    model_upper = model.upper()
    plate = "Đang cập nhật"
    area = "Đang cập nhật"
    
    if '200' in model_upper:
        plate, area = "250x250mm", "150x150mm"
    elif '250' in model_upper:
        plate, area = "300x300mm", "200x160mm"
    elif '300' in model_upper:
        plate, area = "350x350mm", "250x200mm"
    elif '400' in model_upper:
        plate, area = "450x450mm", "350x250mm"
    elif '450' in model_upper:
        plate, area = "500x500mm", "400x300mm"
    elif '500' in model_upper:
        plate, area = "550x800mm", "300x500mm"
    elif '600' in model_upper:
        plate, area = "700x1000mm", "400x600mm"
    elif '800' in model_upper:
        plate, area = "900x1200mm", "600x800mm"
    elif '1000' in model_upper:
        plate, area = "1100x1400mm", "800x1000mm"
    elif '1200' in model_upper:
        plate, area = "1300x1600mm", "1000x1200mm"
        
    return plate, area

def infer_hotstamp_specs(model):
    model_upper = model.upper()
    plate = "N/A"
    area = "Đang cập nhật"
    
    if '50' in model_upper and 'HT' in model_upper:
        area = "130x130mm"
    elif '168' in model_upper:
        area = "100x160mm"
    elif '195' in model_upper or '200' in model_upper:
        area = "150x200mm"
    elif '2040' in model_upper:
        area = "350x200mm"
    elif '3040' in model_upper:
        area = "350x300mm"
    elif '100' in model_upper:
        area = "100x150mm"
        
    return plate, area

def process_file(file_path, printer_type):
    if not os.path.exists(file_path):
        return
        
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    updated = 0
    for item in data:
        model = item.get('model', '')
        plate = item.get('plateSize', '').strip()
        area = item.get('printArea', '').strip()
        
        needs_plate = (not plate or "đang cập nhật" in plate.lower())
        needs_area = (not area or "đang cập nhật" in area.lower())
        
        if needs_plate or needs_area:
            if 'H' in model.upper() and ('HT' in model.upper() or re.match(r'H\d+', model.upper())):
                new_p, new_a = infer_hotstamp_specs(model)
            elif printer_type == 'screen' or 'S-' in model.upper() or 'SS-' in model.upper() or 'SLD' in model.upper() or 'SLS' in model.upper() or 'MN300' in model.upper() or 'MN400' in model.upper():
                new_p, new_a = infer_screen_specs(model)
            else:
                new_p, new_a = infer_pad_specs(model)
                
            if needs_plate and new_p != "Đang cập nhật":
                item['plateSize'] = new_p
                updated += 1
            if needs_area and new_a != "Đang cập nhật":
                item['printArea'] = new_a
                updated += 1
                
    if updated > 0:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Updated {updated} fields in {file_path}")

base_dir = r"C:\Users\TL\Documents\vnpis-web\src\data"
process_file(os.path.join(base_dir, "sj-printers.json"), "pad")
process_file(os.path.join(base_dir, "hj-printers.json"), "pad")
process_file(os.path.join(base_dir, "hj-screen-printers.json"), "screen")
print("Done inference.")
