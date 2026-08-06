import os
import re

def replace_text(directory, old_text, new_text):
    count = 0
    pattern = re.compile(old_text, re.IGNORECASE)
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.json') or file.endswith('.ts'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                    if pattern.search(content):
                        new_content = pattern.sub(new_text, content)
                        with open(filepath, 'w', encoding='utf-8', newline='') as f:
                            f.write(new_content)
                        count += 1
                        print(f"Replaced in {filepath}")
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
                    
    print(f"Total files updated: {count}")

if __name__ == '__main__':
    replace_text('src', r'Liên hệ Hotline', 'Liên hệ 0987453866')
