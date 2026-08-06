import json
import re

def calculate_print_area(plate_size):
    # Find all numbers in plate size
    nums = [int(n) for n in re.findall(r'\d+', plate_size)]
    if not nums:
        return "Tùy chọn"
        
    if len(nums) == 2:
        # e.g. 100x100 -> 70x70
        # The logic: subtract 30mm for the margin of the closed cup or open tray.
        w = max(10, nums[0] - 30)
        h = max(10, nums[1] - 30)
        if nums[0] == 100 and nums[1] == 250:
            return "Ф80mm"
        return f"{w}x{h}mm"
    elif len(nums) >= 3:
        # e.g. 100x75/100x100
        w = max(10, nums[0] - 30)
        h = max(10, nums[1] - 30)
        return f"{w}x{h}mm"
    
    return "Tùy chọn"

for filename in ['src/data/hj-printers.json', 'src/data/sj-printers.json']:
    with open(filename, 'r', encoding='utf-8') as f:
        printers = json.load(f)
        
    for p in printers:
        if 'plateSize' in p:
            # Only update if it doesn't already look like the user wants or if it's generic
            # The user explicitly asked to recalculate based on plate size.
            p['printArea'] = calculate_print_area(p['plateSize'])
            
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(printers, f, ensure_ascii=False, indent=2)

print("Updated print areas")
