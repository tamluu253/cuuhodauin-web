const fs = require('fs');
const path = require('path');

// 20 original articles
const oldArticles = [
  {
      slug: "giai-phap-in-truc-tiep-len-vo-trung-ga-muc-he01",
      title: "Bí Quyết In Sắc Nét Trên Vỏ Trứng Gà Với Mực Thực Phẩm HE01",
      code: "HE01",
      type: "TIJ",
      mediaExt: "mp4",
      desc: "Mực in trứng HE01 là dòng mực thực phẩm an toàn, khô siêu tốc, giúp in ngày tháng, logo lên vỏ trứng rõ nét mà không làm tổn hại cấu trúc vỏ."
  },
  {
      slug: "muc-in-lop-xe-dzwav-chiu-nhiet-luu-hoa",
      title: "Mực In Lốp Xe DZWAV: Chống Chịu Lưu Hóa Cực Đoan",
      code: "DZWAV",
      type: "DOD",
      mediaExt: "mp4",
      desc: "DZWAV là mã mực DOD trắng siêu bám dính, chuyên dụng cho ngành sản xuất lốp xe cao su, chịu được nhiệt độ và áp suất lưu hóa khắc nghiệt nhất."
  },
  {
      slug: "muc-cij-k12-chiu-nhiet-121-do-luoc-soi",
      title: "Mực CIJ K12 Chịu Nhiệt 121°C: Giải Pháp Cho Ngành Đồ Hộp",
      code: "K12",
      type: "CIJ",
      mediaExt: "mp4",
      desc: "Mực K12 được thiết kế đặc biệt để in trên bao bì đồ hộp, túi màng nhôm. Chịu được quá trình hấp thanh trùng, luộc sôi ở 121 độ C lên tới 2 tiếng mà không bong tróc."
  },
  {
      slug: "muc-in-tang-hinh-t03-chong-hang-gia",
      title: "Test Thực Tế Mực In Tàng Hình T03 - Công Nghệ Chống Giả Đỉnh Cao",
      code: "T03",
      type: "CIJ",
      mediaExt: "mp4",
      desc: "Mực T03 hoàn toàn tàng hình dưới ánh sáng thường và chỉ phát quang màu xanh dương dưới đèn UV. Giải pháp hoàn hảo để đánh dấu nội bộ và chống hàng giả."
  },
  {
      slug: "muc-tij-hf200-kho-nhanh-sieu-net",
      title: "Đánh Giá Mực Đen TIJ HF200: Khô Siêu Nhanh, Độ Nét Cao",
      code: "HF200",
      type: "TIJ",
      mediaExt: "jpg",
      desc: "Mực HF200 gốc dung môi mang lại bản in đen sâu, khô cực nhanh trên các bề mặt khó nhằn như nilon, màng PE, và kim loại."
  },
  {
      slug: "muc-bam-dinh-sieu-cuong-k15-khong-halogen",
      title: "Mực Bám Dính Siêu Cường K15: Tuân Thủ Tiêu Chuẩn Halogen-Free",
      code: "K15",
      type: "CIJ",
      mediaExt: "mp4",
      desc: "K15 không chỉ bám dính siêu việt trên nhựa và kim loại mà còn hoàn toàn không chứa Halogen, đáp ứng các chuẩn xuất khẩu EU khắt khe nhất."
  },
  {
      slug: "muc-in-day-cap-trang-linx-videojet",
      title: "Giải Pháp In Dây Cáp Điện: Mực Trắng Không Răng Cưa",
      code: "WHITE-CABLE",
      type: "CIJ",
      mediaExt: "mp4",
      desc: "In thông số lên dây cáp điện đòi hỏi độ bám cao và mã vạch không bị vỡ hạt. Mực trắng chuyên dụng cho cáp giải quyết triệt để vấn đề này."
  },
  {
      slug: "muc-in-chai-thuy-tinh-uot-lanh",
      title: "In Date Lên Chai Thủy Tinh Ướt Lạnh: Thách Thức Và Lời Giải",
      code: "GLASS-INK",
      type: "CIJ",
      mediaExt: "mp4",
      desc: "Nước ngưng tụ trên vỏ chai bia/nước ngọt là kẻ thù của mực in. Dòng mực CIJ chuyên dụng của VNPIS xuyên qua lớp nước để bám chặt vào thủy tinh."
  },
  {
      slug: "muc-in-tij-bao-bi-bim-bim-snack",
      title: "Mực In TIJ Chuyên Trị Bao Bì Snack (Bóng Kính)",
      code: "TIJ-SNACK",
      type: "TIJ",
      mediaExt: "mp4",
      desc: "In ngày sản xuất lên túi bim bim, màng nhôm bóng kính đòi hỏi mực phải bám ngay lập tức trước khi rơi xuống thùng rớt. Mực TIJ Solvent là lựa chọn số 1."
  },
  {
      slug: "muc-khang-con-alcohol-resistant-ink",
      title: "Mực In Kháng Cồn (Alcohol Resistant) Cho Ngành Y Tế",
      code: "ALCOHOL-RES",
      type: "CIJ",
      mediaExt: "mp4",
      desc: "Các sản phẩm y tế thường xuyên bị lau chùi bằng dung môi cồn. Mực in kháng cồn đảm bảo thông tin quan trọng không bao giờ bị bay màu."
  },
  {
      slug: "muc-do-cij-reda-in-nhua-toi-mau",
      title: "Sử Dụng Mực Đỏ REDA Cho Bề Mặt Tối Màu",
      code: "REDA",
      type: "CIJ",
      mediaExt: "jpg",
      desc: "Trên nền nhựa đen hoặc vật liệu tối màu, mực đỏ REDA mang lại sự tương phản hoàn hảo, giúp mã vạch dễ dàng được máy quét nhận diện."
  },
  {
      slug: "muc-in-ong-pe-ong-nhua",
      title: "Mực Vàng In Ống Nhựa PE/PVC Siêu Bền Chắc",
      code: "YELLOW-PIPE",
      type: "CIJ",
      mediaExt: "mp4",
      desc: "Ống nhựa PE thường xuyên chịu nắng mưa ngoài trời. Mực vàng chuyên dụng có khả năng chống tia UV, không phai màu theo thời gian."
  },
  {
      slug: "muc-nuoc-tij-hw-in-carton",
      title: "Tối Ưu Chi Phí In Thùng Carton Với Mực Nước TIJ HW",
      code: "HW",
      type: "TIJ",
      mediaExt: "jpg",
      desc: "Đối với bề mặt thấm hút như thùng carton, giấy kraft, mực nước HW mang lại độ đậm cực cao với chi phí siêu tiết kiệm so với in nhãn dán."
  },
  {
      slug: "muc-in-nhua-pvc-vang-trang",
      title: "Test Bám Dính Mực Trắng Trên Can Nhựa Hóa Chất PVC",
      code: "PVC-WHITE",
      type: "CIJ",
      mediaExt: "mp4",
      desc: "Can nhựa đựng hóa chất thường bị rò rỉ dung môi ra ngoài. Mực trắng CIJ của chúng tôi kháng được hầu hết các loại axit nhẹ và hóa chất tẩy rửa."
  },
  {
      slug: "muc-tij-tuy-bien-ma-vach",
      title: "In Mã QR Code Biến Đổi Liên Tục Bằng Máy TIJ",
      code: "TIJ-QR",
      type: "TIJ",
      mediaExt: "jpg",
      desc: "Ứng dụng in QR code định danh cho từng sản phẩm đòi hỏi hộp mực TIJ phải có độ phân giải tối thiểu 300dpi và không được phép nghẹt tia."
  },
  {
      slug: "muc-xanh-la-green-ink",
      title: "Tạo Điểm Nhấn Nhận Diện Thương Hiệu Với Mực Xanh Lá (GREEN)",
      code: "GREEN",
      type: "CIJ",
      mediaExt: "jpg",
      desc: "Đừng gò bó vào mực đen truyền thống. Mực xanh lá (GREEN) giúp sản phẩm của bạn nổi bật hơn trên kệ hàng và chống làm giả trực quan."
  },
  {
      slug: "muc-in-tij-tieu-chuan-fda",
      title: "Mực In Thực Phẩm TIJ Đạt Chuẩn Tiếp Xúc Trực Tiếp FDA",
      code: "FOOD-TIJ",
      type: "TIJ",
      mediaExt: "jpg",
      desc: "Không chỉ trứng gà, mực in thực phẩm còn in trực tiếp lên bánh kẹo, vỏ trái cây màng mỏng một cách an toàn tuyệt đối."
  },
  {
      slug: "muc-in-tu-dong-hoa-robot",
      title: "Tích Hợp Máy In TIJ Lên Cánh Tay Robot",
      code: "TIJ-ROBOT",
      type: "TIJ",
      mediaExt: "jpg",
      desc: "Đầu in nhỏ gọn của công nghệ TIJ kết hợp với mực khô nhanh là combo hoàn hảo để gắn lên các cánh tay robot phân loại sản phẩm tốc độ cao."
  },
  {
      slug: "muc-khang-dau-t09-in-kim-loai",
      title: "Mực Kháng Dầu T09: Cứu Tinh Cho Gia Công Cơ Khí",
      code: "T09",
      type: "CIJ",
      mediaExt: "jpg",
      desc: "Các chi tiết kim loại phay tiện xong thường dính lớp dầu bảo quản. Mực T09 có khả năng tự xuyên qua lớp dầu mỏng để bám chặt vào kim loại."
  },
  {
      slug: "giai-phap-in-date-gia-re-hieu-qua",
      title: "Nên Chọn Mực TIJ Hay CIJ Cho Doanh Nghiệp Của Bạn?",
      code: "GUIDE",
      type: "TIJ/CIJ",
      mediaExt: "jpg",
      desc: "Bài viết tổng hợp giúp chủ doanh nghiệp SME quyết định đúng đắn khoản đầu tư giữa hệ thống in phun nhiệt TIJ và in phun liên tục CIJ."
  }
];

// Content matrix for programmatic SEO
const techTypes = ["CIJ", "TIJ", "DOD", "UV"];
const materials = ["Nhựa PET", "Màng BOPP", "Thép Không Gỉ", "Gỗ Công Nghiệp", "Ống Cao Su", "Bao Bì Giấy", "Kính Cường Lực", "Dây Cáp Quang", "Vải Không Dệt", "Mạch Điện Tử PCB"];
const industries = ["Thực Phẩm", "Dược Phẩm", "Logistics", "Vật Liệu Xây Dựng", "Điện Tử", "Linh Kiện Ô Tô", "Mỹ Phẩm", "Đồ Uống", "Nông Sản", "Cơ Khí"];
const inkFeatures = ["Siêu Bám Dính", "Chống Trầy Xước", "Khô Siêu Tốc 0.1s", "Kháng Tia UV", "Chịu Hóa Chất", "Phát Quang Chống Giả", "Chuẩn FDA Thực Phẩm"];

// Generate 50 new articles
const newArticles = [];
for (let i = 0; i < 50; i++) {
    const tech = techTypes[Math.floor(Math.random() * techTypes.length)];
    const material = materials[Math.floor(Math.random() * materials.length)];
    const industry = industries[Math.floor(Math.random() * industries.length)];
    const feature = inkFeatures[Math.floor(Math.random() * inkFeatures.length)];
    
    // Slug generation
    const slugRaw = `muc-in-${tech.toLowerCase()}-cho-${material.toLowerCase().replace(/ /g, '-')}-nganh-${industry.toLowerCase().replace(/ /g, '-')}`;
    const slug = slugRaw.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").replace(/[^a-z0-9-]/g, "");
    
    const title = `Giải Pháp Mực In ${tech} ${feature} Cho Bề Mặt ${material} (Ngành ${industry})`;
    
    newArticles.push({
        slug,
        title,
        code: `PRG-${i+100}`,
        type: tech,
        mediaExt: "jpg", // Fallback, could be mp4 if you have real video mapping
        desc: `Tìm hiểu bí quyết áp dụng công nghệ mực in ${tech} với đặc tính ${feature.toLowerCase()} chuyên dụng cho bề mặt ${material.toLowerCase()} trong dây chuyền sản xuất của ngành ${industry.toLowerCase()}. Tối ưu năng suất và giảm phế phẩm lên tới 90%.`,
        content: `
            Trong ngành ${industry}, việc in date, in mã vạch lên ${material} luôn là một bài toán khó. Nếu sử dụng mực in thông thường, bạn sẽ gặp tình trạng bong tróc, mờ nét hoặc bay màu sau thời gian ngắn.
            
            VNPIS tự hào mang đến giải pháp mực in ${tech} với ưu điểm ${feature}. Đây là công thức được điều chế đặc biệt tại phòng Lab để bám chặt vào bề mặt ${material}, bất chấp các điều kiện môi trường khắc nghiệt như độ ẩm cao, nhiệt độ thay đổi, hoặc ma sát cơ học.
            
            Hãy liên hệ với chúng tôi để nhận mẫu test thử miễn phí trên dây chuyền của bạn!
        `
    });
}

// Ensure the data directory exists
const dataDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Combine and write to JSON
const allArticles = [...oldArticles, ...newArticles];
fs.writeFileSync(path.join(dataDir, 'blog-posts.json'), JSON.stringify(allArticles, null, 2));

console.log(`Successfully generated ${allArticles.length} articles! Data saved to src/data/blog-posts.json.`);
