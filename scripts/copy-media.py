import os
import shutil

source_dir = r"C:\Users\TL\Documents\Disk D\cosota\## Ali - Cons supplier"
dest_dir = r"C:\Users\TL\Documents\vnpis-web\public\media\machines"

os.makedirs(dest_dir, exist_ok=True)

files_to_copy = [
    (r"San Jin\150x400mm - pen.mp4", "sanjin-150x400-pen.mp4"),
    (r"San Jin\150x500mm - gun.mp4", "sanjin-150x500-gun.mp4"),
    (r"Meichao\150x150 - 2 color pad printer.mp4", "mc-150x150-2color.mp4"),
    (r"Meichao\WeChat_20231124153510.mp4", "mc-screen-printer.mp4"),
    (r"HJ\Auto 4 color components prinitnng.mp4", "hj-4color.mp4"),
    (r"HJ\Cosota Vietnam - 1 color screen printer - big fixture..mp4", "hj-screen-printer.mp4")
]

for src_rel, dest_name in files_to_copy:
    src_path = os.path.join(source_dir, src_rel)
    dest_path = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied: {dest_name}")
    else:
        print(f"Not found: {src_path}")
