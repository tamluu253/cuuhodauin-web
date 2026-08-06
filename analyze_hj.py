import os
import json

folder = r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\HJ"

found_files = {}

for root, dirs, files in os.walk(folder):
    rel_dir = os.path.relpath(root, folder)
    if rel_dir == ".": continue
    
    file_list = []
    for f in files:
        file_list.append(f)
        
    if file_list:
        found_files[rel_dir] = file_list

print(json.dumps(found_files, indent=2))
