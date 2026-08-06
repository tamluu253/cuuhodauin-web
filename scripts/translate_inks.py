import json
import time
import sys
from deep_translator import GoogleTranslator

# Set stdout to utf-8 if possible, or ignore print errors
sys.stdout.reconfigure(encoding='utf-8')

input_path = r"C:\Users\TL\Documents\vnpis-web\src\data\special-inks.json"

with open(input_path, 'r', encoding='utf-8') as f:
    inks = json.load(f)

translator = GoogleTranslator(source='zh-CN', target='vi')

print(f"Translating {len(inks)} items...", flush=True)

for i, ink in enumerate(inks):
    try:
        # Check if already translated (if name doesn't contain Chinese characters, we could skip it, but let's just force translate)
        translated_name = translator.translate(ink['name'])
        translated_desc = translator.translate(ink['desc'])
        
        ink['name'] = translated_name
        ink['desc'] = translated_desc
        print(f"[{i+1}/{len(inks)}] Translated {ink['code']}", flush=True)
        time.sleep(0.1) # Add delay to prevent rate limit
    except Exception as e:
        print(f"Error translating {ink['code']}: {e}", flush=True)

with open(input_path, 'w', encoding='utf-8') as f:
    json.dump(inks, f, ensure_ascii=False, indent=2)

print("Translation completed and saved.", flush=True)
