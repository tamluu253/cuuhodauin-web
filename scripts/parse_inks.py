import re
import json

file_path = r"C:\Users\TL\.gemini\antigravity\brain\4b0a83fa-a57e-47fb-a0c4-1e0353602c63\.system_generated\steps\1605\content.md"
output_path = r"C:\Users\TL\Documents\vnpis-web\src\data\special-inks.json"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# The HTML structure is:
# <tr ...>
#   <td ...><font ...>CODE</font><br>NAME</td>
#   <td ...>DESCRIPTION</td>
#   ...

pattern = r'<td style="width:35%;[^>]*><font[^>]*>(.*?)</font><br>(.*?)</td>\s*<td style="width:60%;[^>]*>(.*?)</td>'
matches = re.findall(pattern, content, re.DOTALL)

inks = []
for match in matches:
    code = match[0].strip()
    name = match[1].strip()
    desc = match[2].strip()
    
    # Simple categorization based on keywords
    category = "Khác"
    if "高温" in name or "高温" in desc or "烘烤" in desc:
        category = "Chịu nhiệt độ cao"
    elif "红" in name or "红" in desc or "鸡蛋" in desc:
        category = "Mực in trứng / Thực phẩm"
    elif "玻璃" in name or "玻璃" in desc:
        category = "In trên kính / Gốm"
    elif "酒精" in name or "酒精" in desc:
        category = "Kháng cồn / Hóa chất"
    elif "附着" in name or "附着" in desc:
        category = "Bám dính cao (Nhựa/Kim loại)"
    elif "渗透" in name or "渗透" in desc:
        category = "Thẩm thấu"
    elif "隐形" in name or "隐形" in desc:
        category = "Tàng hình (UV)"
    elif "水洗" in name or "水洗" in desc:
        category = "Mực giặt được / Tạm thời"
    
    inks.append({
        "code": code,
        "name": name,
        "desc": desc,
        "category": category
    })

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(inks, f, ensure_ascii=False, indent=2)

print(f"Parsed {len(inks)} inks and saved to {output_path}")
