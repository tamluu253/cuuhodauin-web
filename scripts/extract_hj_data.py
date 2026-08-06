import os
import json
import shutil
import glob

hj_supplier_dir = r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier\HJ"
web_hj_pad_img_dir = r"C:\Users\TL\Documents\vnpis-web\public\images\pad-printers\hj"
web_hj_screen_img_dir = r"C:\Users\TL\Documents\vnpis-web\public\images\screen-printers\hj"

os.makedirs(web_hj_pad_img_dir, exist_ok=True)
os.makedirs(web_hj_screen_img_dir, exist_ok=True)

# 1. Scan subfolders in HJ supplier dir to see what image files exist for specific models
model_images = {}

for root, dirs, files in os.walk(hj_supplier_dir):
    for f in files:
        ext = os.path.splitext(f)[1].lower()
        if ext in ['.jpg', '.jpeg', '.png']:
            path = os.path.join(root, f)
            rel_dir = os.path.basename(os.path.dirname(path))
            model_images.setdefault(rel_dir, []).append(path)

print("Found image subfolders:", list(model_images.keys()))
