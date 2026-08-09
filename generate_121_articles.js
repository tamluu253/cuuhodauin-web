const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'content', 'articles');

// 1. Delete all existing markdown files
const files = fs.readdirSync(articlesDir);
for (const file of files) {
  if (file.endsWith('.md')) {
    fs.unlinkSync(path.join(articlesDir, file));
  }
}

// 2. Data for generation
const printheads = [
  "Ricoh Gen5", "Ricoh Gen6", "Kyocera KJ4A", "Kyocera KJ4B",
  "Konica 512i", "Konica 1024i", "Epson I3200", "Epson DX5",
  "Epson DX7", "Epson XP600", "Béc phun CIJ Videojet", "Hộp mực TIJ HP45"
];

const problems = [
  "bị nghẹt mực", "đứt tia", "mất màu", "in bị sọc",
  "tắc tia", "lệch giọt", "chết màng Piezo", "thông vách",
  "khô mực UV", "bị bóng mờ", "in sai màu"
];

const solutions = [
  "cách xử lý", "hướng dẫn phục hồi", "giải pháp cứu hộ",
  "quy trình thông tắc", "mẹo bảo dưỡng", "dịch vụ sửa chữa",
  "cách ngâm dung môi", "sử dụng sóng siêu âm để sửa",
  "đo điện trở kiểm tra"
];

const categories = ["KY-THUAT", "KINH-NGHIEM", "DICH-VU", "TIN-TUC"];

// Helper to generate a slug
function toSlug(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// Generate 121 articles
let count = 0;
for (let i = 0; i < 121; i++) {
  const head = printheads[i % printheads.length];
  const prob = problems[Math.floor(Math.random() * problems.length)];
  const sol = solutions[Math.floor(Math.random() * solutions.length)];
  
  const title = `[Chi Tiết] ${sol.charAt(0).toUpperCase() + sol.slice(1)} đầu in ${head} ${prob} tận gốc`;
  const slug = toSlug(title) + '-' + (i+1);
  const desc = `Tìm hiểu ${sol} tình trạng ${prob} trên dòng đầu in công nghiệp ${head}. VNPIS Lab chuyên nhận cứu hộ, phục hồi và sửa chữa đầu phun kỹ thuật số với công nghệ siêu âm hiện đại.`;
  const cat = categories[i % categories.length];
  
  // Date around July - August 2026
  const date = new Date(2026, 6, 1 + (i % 30)).toISOString().split('T')[0];

  const content = `---
title: "${title}"
description: "${desc}"
date: "${date}"
category: "${cat}"
---

Đầu in **${head}** là một trong những linh kiện đắt tiền và quan trọng nhất trên hệ thống máy in kỹ thuật số. Tuy nhiên, trong quá trình vận hành, sự cố **${prob}** thường xuyên xảy ra gây gián đoạn sản xuất và tốn kém chi phí. Bài viết này, các chuyên gia từ VNPIS Lab sẽ chia sẻ ${sol} tình trạng này một cách triệt để.

## Nguyên Nhân Gây Ra Tình Trạng Đầu In ${head} ${prob}

Theo thống kê tại phòng Lab của VNPIS, có 3 nguyên nhân cốt lõi dẫn đến tình trạng này:
1. **Chất lượng mực in:** Sử dụng mực UV hoặc mực dầu kém chất lượng, hạt pigment quá lớn gây tắc nghẽn lưới lọc và lỗ nozzle siêu nhỏ của đầu ${head}.
2. **Môi trường làm việc:** Khí hậu Việt Nam nóng ẩm, nếu phòng in không đạt chuẩn điều hòa, mực sẽ dễ bị biến đổi độ nhớt (viscosity) và nhanh khô ngay trên bề mặt mặt bích (nozzle plate).
3. **Bảo dưỡng sai cách:** Dùng sai loại dung môi rửa hoặc dùng lực ép xy-lanh quá mạnh làm vỡ vách ngăn giữa các kênh màu.

## Quy Trình Xử Lý Và Phục Hồi Tại VNPIS Lab

Việc tự ý can thiệp khi không có thiết bị chuyên dụng có thể khiến đầu in **${head}** hỏng hoàn toàn. VNPIS Lab áp dụng quy trình cứu hộ 4 bước chuẩn quốc tế:
- **Bước 1: Chẩn đoán bằng hiển vi 1000x:** Kỹ sư sẽ soi bề mặt nozzle để phát hiện trầy xước vật lý hoặc mảng bám cặn mực.
- **Bước 2: Đo kiểm trở kháng Piezo:** Bằng máy đo điện tử chuyên dụng, chúng tôi đo thông số điện trở và điện dung của màng rung Piezo để đảm bảo IC điều khiển còn sống.
- **Bước 3: Siêu âm và vi tuần hoàn:** Đầu in được đặt trong bồn siêu âm tần số kép (28kHz/40kHz) kết hợp gia nhiệt hóa chất (45 độ C) giúp hòa tan hoàn toàn lượng mực khô cứng gây **${prob}**.
- **Bước 4: Nghiệm thu Waterfall:** Bắn test xung giả lập kịch bản in thực tế và quay video nghiệm thu chất lượng tia mực.

## Cam Kết No Cure - No Pay

VNPIS tự hào là trung tâm cứu hộ đầu in số 1 Việt Nam. Nếu đầu in **${head}** của bạn không thể phục hồi hoặc không đạt yêu cầu, chúng tôi hoàn trả nguyên vẹn và **KHÔNG THU BẤT KỲ CHI PHÍ NÀO**.

> 📞 **Liên hệ ngay Hotline/Zalo kỹ thuật:** 0987 453 866 để được tư vấn chẩn đoán miễn phí!
> 📍 **Lab Center:** 62 Trần Thị Nơi, Phường Chánh Hưng, Quận 8, TP. HCM

*Từ khóa tìm kiếm: ${sol}, sửa đầu in ${head}, phục hồi đầu phun ${head} bị ${prob}, cứu hộ đầu in VNPIS, vệ sinh đầu in máy công nghiệp.*
`;

  fs.writeFileSync(path.join(articlesDir, slug + '.md'), content, 'utf-8');
  count++;
}

console.log('Created ' + count + ' highly optimized printhead recovery articles.');
