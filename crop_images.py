import os
from PIL import Image, ImageChops

def crop_white_borders(filepath):
    try:
        with Image.open(filepath) as im:
            im_rgba = im.convert('RGBA')
            
            # Create a white background
            bg = Image.new('RGBA', im_rgba.size, (255, 255, 255, 255))
            # Paste the image on the white bg, using the alpha channel as mask
            bg.paste(im_rgba, (0, 0), im_rgba)
            
            # Now convert to RGB so we just deal with colors
            im_rgb = bg.convert('RGB')
            
            # Create a pure white image of the same size
            pure_white = Image.new('RGB', im_rgb.size, (255, 255, 255))
            
            # Calculate difference
            diff = ImageChops.difference(im_rgb, pure_white)
            
            # Get bounding box of difference (which means non-white pixels)
            bbox = diff.getbbox()
            if bbox:
                # Add a small padding (e.g. 5 pixels) just to be safe
                w, h = im.size
                bbox_pad = (
                    max(0, bbox[0] - 5),
                    max(0, bbox[1] - 5),
                    min(w, bbox[2] + 5),
                    min(h, bbox[3] + 5)
                )
                cropped = im.crop(bbox_pad)
                cropped.save(filepath)
                print(f"Cropped {os.path.basename(filepath)}")
            else:
                print(f"Skipped (all white/transparent): {os.path.basename(filepath)}")
    except Exception as e:
        print(f"Error on {filepath}: {e}")

def crop_directory(directory):
    for f in os.listdir(directory):
        if f.lower().endswith(('.png', '.jpg', '.jpeg')):
            crop_white_borders(os.path.join(directory, f))

if __name__ == '__main__':
    crop_directory('public/images/pad-printers/sj')
