import json
import os
import datetime

def convert_json_to_md():
    json_path = 'src/data/blog-posts.json'
    md_dir = 'content/articles'
    
    os.makedirs(md_dir, exist_ok=True)
    
    with open(json_path, 'r', encoding='utf-8') as f:
        posts = json.load(f)
        
    # Find the newly added PAD posts (they have type: "PAD")
    pad_posts = [p for p in posts if p.get('type') == 'PAD']
    
    # We will remove them from the JSON since they are now MDX
    remaining_posts = [p for p in posts if p.get('type') != 'PAD']
    
    for post in pad_posts:
        slug = post['slug']
        title = post['title']
        code = post.get('code', 'PAD')
        desc = post.get('desc', '')
        content = post.get('content', '')
        # Using today's date
        date = datetime.datetime.now().strftime('%Y-%m-%d')
        
        md_content = f"""---
title: "{title}"
description: "{desc}"
date: "{date}"
category: "PAD"
code: "{code}"
---
{content}
"""
        filepath = os.path.join(md_dir, f"{slug}.md")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(md_content)
            
    # Save JSON back without the pad posts
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(remaining_posts, f, ensure_ascii=False, indent=2)

    print(f"Successfully converted {len(pad_posts)} posts to MDX.")

if __name__ == '__main__':
    convert_json_to_md()
