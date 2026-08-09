const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, 'content', 'articles');
const files = fs.readdirSync(articlesDir);

let count = 0;

for (const file of files) {
  if (!file.endsWith('.md')) continue;

  const filepath = path.join(articlesDir, file);
  const content = fs.readFileSync(filepath, 'utf-8');

  // Find the end of frontmatter
  const parts = content.split('---');
  if (parts.length >= 3) {
    const frontmatter = parts[1];
    const bodyContent = parts.slice(2).join('---').trim();

    // If body is empty or just whitespace
    if (bodyContent.length < 10) {
      const titleMatch = content.match(/title:\s*"(.*?)"/);
      const descMatch = content.match(/description:\s*"(.*?)"/);
      const catMatch = content.match(/category:\s*"(.*?)"/);

      const title = titleMatch ? titleMatch[1] : 'Giải Pháp Cứu Hộ Đầu In VNPIS';
      const desc = descMatch ? descMatch[1] : 'Tìm hiểu chi tiết về giải pháp phục hồi và bảo trì đầu in kỹ thuật số công nghiệp tại VNPIS Lab.';
      const cat = catMatch ? catMatch[1] : 'Kiến Thức';

      // SEO Keywords mapping based on category
      let focusKeywords = "cứu hộ đầu in, phục hồi đầu in, sửa chữa đầu in phun, VNPIS Lab";
      if (cat.toLowerCase().includes("ricoh")) {
        focusKeywords = "cứu hộ đầu in Ricoh Gen5, sửa đầu in Ricoh Gen6, phục hồi đầu phun Ricoh, ngâm đầu in Ricoh, VNPIS Lab";
      } else if (cat.toLowerCase().includes("kyocera")) {
        focusKeywords = "sửa đầu in Kyocera KJ4A, phục hồi đầu Kyocera, thông tắc đầu in Kyocera KJ4B, sửa máy in công nghiệp Kyocera";
      } else if (cat.toLowerCase().includes("epson")) {
        focusKeywords = "cứu hộ đầu in Epson I3200, sửa đầu in DX5, thông tắc béc phun Epson, phục hồi đầu in bạt việt nam";
      } else if (cat.toLowerCase().includes("konica")) {
        focusKeywords = "sửa đầu in Konica 512i, phục hồi Konica 1024i, ngâm đầu phun Konica, cứu hộ đầu Konica Minolta";
      }

      const body = `## Tổng Quan Về ${title}

${desc}

Trong quá trình vận hành máy in kỹ thuật số công nghiệp, tình trạng đầu in bị nghẹt, tắc tia, hoặc đứt vách là sự cố không thể tránh khỏi. Đặc biệt đối với các dòng máy in sử dụng mực UV, mực dầu, hay mực chuyển nhiệt, việc bảo dưỡng và xử lý kịp thời là yếu tố sống còn để đảm bảo chất lượng bản in và tiết kiệm chi phí vật tư. Bài viết này sẽ phân tích chi tiết về **${title}** và giải pháp khắc phục triệt để.

## Nguyên Nhân Phổ Biến Dây Ra Tình Trạng Hư Hỏng

Dựa trên kinh nghiệm xử lý hàng ngàn đầu in tại **VNPIS Lab**, dưới đây là những nguyên nhân chính khiến đầu in của bạn gặp sự cố:

1. **Sử Dụng Mực In Kém Chất Lượng:** Mực in chứa tạp chất hoặc hạt sắc tố (pigment) quá lớn sẽ làm tắc nghẽn các lỗ phun (nozzle) siêu nhỏ, gây ra tình trạng mất tia, đứt nét.
2. **Bảo Dưỡng Không Đúng Cách:** Việc không vệ sinh đầu in định kỳ hoặc sử dụng dung môi tẩy rửa quá mạnh có thể làm hỏng màng rung Piezo hoặc làm bong tróc bề mặt nozzle plate.
3. **Sự Cố Phần Cứng và Môi Trường:** Môi trường làm việc nhiều bụi bẩn, nhiệt độ và độ ẩm không ổn định làm thay đổi độ nhớt của mực. Đôi khi, lỗi cáp tín hiệu hoặc chập điện cũng làm chết IC điều khiển bên trong đầu in.

## Giải Pháp Phục Hồi Đầu In Tại VNPIS Lab

Đến với **VNPIS Lab** - Trung tâm cứu hộ đầu in kỹ thuật số số 1 Việt Nam, chúng tôi áp dụng quy trình chuẩn chuyên gia để phục hồi hiệu suất đầu in từ 90% đến 98%:

- **Soi Hiển Vi 4K (1000x):** Chẩn đoán chính xác tình trạng bề mặt và các lỗ phun (nozzle).
- **Đo Trở Kháng Màng Piezo:** Kiểm tra thông số kỹ thuật điện tử, đảm bảo màng rung hoạt động bình thường, loại bỏ nguy cơ chập cháy.
- **Siêu Âm Tần Số Kép Chuyên Sâu:** Sử dụng công nghệ sóng siêu âm 28kHz/40kHz kết hợp hóa chất vi tuần hoàn nhiệt độ tiêu chuẩn (45°C), giúp bóc tách hoàn toàn màng mực khô cứng mà không làm tổn hại vách ngăn bên trong.
- **Test Xung Waterfall Khép Kín:** Kiểm tra lại toàn bộ quá trình xả mực và quay video minh bạch nghiệm thu 100% bằng tem QR code.

## Lời Khuyên Hữu Ích Dành Cho Bạn

Để kéo dài tuổi thọ đầu in, VNPIS khuyến nghị:
- Luôn giữ ẩm bề mặt đầu in khi máy ngừng hoạt động qua đêm.
- Thay lọc mực định kỳ (3-6 tháng/lần) để ngăn cặn bẩn xâm nhập vào khoang mực.
- Tuyệt đối không tự ý dùng kim tiêm bơm xả hóa chất áp lực mạnh nếu không có thiết bị đo áp suất chuyên dụng.

---
> ⚠️ **Đầu in của bạn đang gặp sự cố? Đừng vội vứt bỏ!**
> Hãy gửi ngay đến **VNPIS Lab** để được chuyên gia kiểm tra và tư vấn **MIỄN PHÍ**.
> Chúng tôi cam kết: **"No Cure - No Pay" (Không hết bệnh, không lấy tiền)**.
> 
> 📞 **Hotline/Zalo Kỹ Thuật 24/7:** 0987 453 866
> 📍 **Lab Center:** 62 Trần Thị Nơi, Phường Chánh Hưng, Quận 8, TP. Hồ Chí Minh
> 🌐 **Website:** [https://cuuhodauin.com](https://cuuhodauin.com)

*Tags: ${focusKeywords}*
`;

      // Append the body
      const newContent = `---\n${frontmatter.trim()}\n---\n\n${body}`;
      fs.writeFileSync(filepath, newContent, 'utf-8');
      count++;
    }
  }
}

console.log('Updated ' + count + ' empty articles with SEO content.');
