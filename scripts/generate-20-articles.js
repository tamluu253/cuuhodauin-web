const fs = require('fs');
const path = require('path');

const SOURCE_VIDEO_DIR = "C:\\Users\\TL\\Documents\\BLJINK Ink Test Video\\样品测试视频\\样品测试视频";
const DEST_MEDIA_DIR = path.join(__dirname, "..", "public", "media", "blog");
const BLOG_DIR = path.join(__dirname, "..", "src", "app", "blog");

if (!fs.existsSync(DEST_MEDIA_DIR)) {
    fs.mkdirSync(DEST_MEDIA_DIR, { recursive: true });
}

const articles = [
    {
        slug: "giai-phap-in-truc-tiep-len-vo-trung-ga-muc-he01",
        title: "Bí Quyết In Sắc Nét Trên Vỏ Trứng Gà Với Mực Thực Phẩm HE01",
        code: "HE01",
        type: "TIJ",
        mediaSource: "淡蓝色鸡蛋墨\\d1d03c97d13478e3c56250d7ea6b0402_raw.mp4",
        mediaExt: "mp4",
        desc: "Mực in trứng HE01 là dòng mực thực phẩm an toàn, khô siêu tốc, giúp in ngày tháng, logo lên vỏ trứng rõ nét mà không làm tổn hại cấu trúc vỏ."
    },
    {
        slug: "muc-in-lop-xe-dzwav-chiu-nhiet-luu-hoa",
        title: "Mực In Lốp Xe DZWAV: Chống Chịu Lưu Hóa Cực Đoan",
        code: "DZWAV",
        type: "DOD",
        mediaSource: "大字符白墨\\c8248331d10facef79a8b3305c7f8807.mp4",
        mediaExt: "mp4",
        desc: "DZWAV là mã mực DOD trắng siêu bám dính, chuyên dụng cho ngành sản xuất lốp xe cao su, chịu được nhiệt độ và áp suất lưu hóa khắc nghiệt nhất."
    },
    {
        slug: "muc-cij-k12-chiu-nhiet-121-do-luoc-soi",
        title: "Mực CIJ K12 Chịu Nhiệt 121°C: Giải Pháp Cho Ngành Đồ Hộp",
        code: "K12",
        type: "CIJ",
        mediaSource: "耐酸耐高温水煮测试\\1.mp4",
        mediaExt: "mp4",
        desc: "Mực K12 được thiết kế đặc biệt để in trên bao bì đồ hộp, túi màng nhôm. Chịu được quá trình hấp thanh trùng, luộc sôi ở 121 độ C lên tới 2 tiếng mà không bong tróc."
    },
    {
        slug: "muc-in-tang-hinh-t03-chong-hang-gia",
        title: "Test Thực Tế Mực In Tàng Hình T03 - Công Nghệ Chống Giả Đỉnh Cao",
        code: "T03",
        type: "CIJ",
        mediaSource: "隐形墨水测试效果\\27eb79cb6985d0a7de9db3adfb73a11c.mp4",
        mediaExt: "mp4",
        desc: "Mực T03 hoàn toàn tàng hình dưới ánh sáng thường và chỉ phát quang màu xanh dương dưới đèn UV. Giải pháp hoàn hảo để đánh dấu nội bộ và chống hàng giả."
    },
    {
        slug: "muc-tij-hf200-kho-nhanh-sieu-net",
        title: "Đánh Giá Mực Đen TIJ HF200: Khô Siêu Nhanh, Độ Nét Cao",
        code: "HF200",
        type: "TIJ",
        mediaSource: "实验室\\1.jpg",
        mediaExt: "jpg",
        desc: "Mực HF200 gốc dung môi mang lại bản in đen sâu, khô cực nhanh trên các bề mặt khó nhằn như nilon, màng PE, và kim loại."
    },
    {
        slug: "muc-bam-dinh-sieu-cuong-k15-khong-halogen",
        title: "Mực Bám Dính Siêu Cường K15: Tuân Thủ Tiêu Chuẩn Halogen-Free",
        code: "K15",
        type: "CIJ",
        mediaSource: "无卤素、耐酒精擦拭、耐 200到 300℃\\e57f00b8e1cc8f1c28429800f20c561e.mp4",
        mediaExt: "mp4",
        desc: "K15 không chỉ bám dính siêu việt trên nhựa và kim loại mà còn hoàn toàn không chứa Halogen, đáp ứng các chuẩn xuất khẩu EU khắt khe nhất."
    },
    {
        slug: "muc-in-day-cap-trang-linx-videojet",
        title: "Giải Pháp In Dây Cáp Điện: Mực Trắng Không Răng Cưa",
        code: "WHITE-CABLE",
        type: "CIJ",
        mediaSource: "灰色墨水白色线缆打印效果\\4.mp4",
        mediaExt: "mp4",
        desc: "In thông số lên dây cáp điện đòi hỏi độ bám cao và mã vạch không bị vỡ hạt. Mực trắng chuyên dụng cho cáp giải quyết triệt để vấn đề này."
    },
    {
        slug: "muc-in-chai-thuy-tinh-uot-lanh",
        title: "In Date Lên Chai Thủy Tinh Ướt Lạnh: Thách Thức Và Lời Giải",
        code: "GLASS-INK",
        type: "CIJ",
        mediaSource: "啤酒瓶玻璃墨测试\\62faf5b74e7703c519d1a37f64e82a86.mp4",
        mediaExt: "mp4",
        desc: "Nước ngưng tụ trên vỏ chai bia/nước ngọt là kẻ thù của mực in. Dòng mực CIJ chuyên dụng của VNPIS xuyên qua lớp nước để bám chặt vào thủy tinh."
    },
    {
        slug: "muc-in-tij-bao-bi-bim-bim-snack",
        title: "Mực In TIJ Chuyên Trị Bao Bì Snack (Bóng Kính)",
        code: "TIJ-SNACK",
        type: "TIJ",
        mediaSource: "薯片袋效果\\K1.mp4",
        mediaExt: "mp4",
        desc: "In ngày sản xuất lên túi bim bim, màng nhôm bóng kính đòi hỏi mực phải bám ngay lập tức trước khi rơi xuống thùng rớt. Mực TIJ Solvent là lựa chọn số 1."
    },
    {
        slug: "muc-khang-con-alcohol-resistant-ink",
        title: "Mực In Kháng Cồn (Alcohol Resistant) Cho Ngành Y Tế",
        code: "ALCOHOL-RES",
        type: "CIJ",
        mediaSource: "无卤素、耐酒精擦拭、耐 200到 300℃\\fcb7a2e5ad8ea2e9d2a6a72f41c25212.mp4",
        mediaExt: "mp4",
        desc: "Các sản phẩm y tế thường xuyên bị lau chùi bằng dung môi cồn. Mực in kháng cồn đảm bảo thông tin quan trọng không bao giờ bị bay màu."
    },
    {
        slug: "muc-do-cij-reda-in-nhua-toi-mau",
        title: "Sử Dụng Mực Đỏ REDA Cho Bề Mặt Tối Màu",
        code: "REDA",
        type: "CIJ",
        mediaSource: "实验室\\2.jpg",
        mediaExt: "jpg",
        desc: "Trên nền nhựa đen hoặc vật liệu tối màu, mực đỏ REDA mang lại sự tương phản hoàn hảo, giúp mã vạch dễ dàng được máy quét nhận diện."
    },
    {
        slug: "muc-in-ong-pe-ong-nhua",
        title: "Mực Vàng In Ống Nhựa PE/PVC Siêu Bền Chắc",
        code: "YELLOW-PIPE",
        type: "CIJ",
        mediaSource: "黑色PE管TY5D黄墨测试\\ca932ba2ccd22753a584a1c0197ef003.mp4",
        mediaExt: "mp4",
        desc: "Ống nhựa PE thường xuyên chịu nắng mưa ngoài trời. Mực vàng chuyên dụng có khả năng chống tia UV, không phai màu theo thời gian."
    },
    {
        slug: "muc-nuoc-tij-hw-in-carton",
        title: "Tối Ưu Chi Phí In Thùng Carton Với Mực Nước TIJ HW",
        code: "HW",
        type: "TIJ",
        mediaSource: "实验室\\3.jpg",
        mediaExt: "jpg",
        desc: "Đối với bề mặt thấm hút như thùng carton, giấy kraft, mực nước HW mang lại độ đậm cực cao với chi phí siêu tiết kiệm so với in nhãn dán."
    },
    {
        slug: "muc-in-nhua-pvc-vang-trang",
        title: "Test Bám Dính Mực Trắng Trên Can Nhựa Hóa Chất PVC",
        code: "PVC-WHITE",
        type: "CIJ",
        mediaSource: "黄色PVC罐白墨测试\\c9542045db5de61533ed220c72068a4f.mp4",
        mediaExt: "mp4",
        desc: "Can nhựa đựng hóa chất thường bị rò rỉ dung môi ra ngoài. Mực trắng CIJ của chúng tôi kháng được hầu hết các loại axit nhẹ và hóa chất tẩy rửa."
    },
    {
        slug: "muc-tij-tuy-bien-ma-vach",
        title: "In Mã QR Code Biến Đổi Liên Tục Bằng Máy TIJ",
        code: "TIJ-QR",
        type: "TIJ",
        mediaSource: "实验室\\4.jpg",
        mediaExt: "jpg",
        desc: "Ứng dụng in QR code định danh cho từng sản phẩm đòi hỏi hộp mực TIJ phải có độ phân giải tối thiểu 300dpi và không được phép nghẹt tia."
    },
    {
        slug: "muc-xanh-la-green-ink",
        title: "Tạo Điểm Nhấn Nhận Diện Thương Hiệu Với Mực Xanh Lá (GREEN)",
        code: "GREEN",
        type: "CIJ",
        mediaSource: "实验室\\5.jpg",
        mediaExt: "jpg",
        desc: "Đừng gò bó vào mực đen truyền thống. Mực xanh lá (GREEN) giúp sản phẩm của bạn nổi bật hơn trên kệ hàng và chống làm giả trực quan."
    },
    {
        slug: "muc-in-tij-tieu-chuan-fda",
        title: "Mực In Thực Phẩm TIJ Đạt Chuẩn Tiếp Xúc Trực Tiếp FDA",
        code: "FOOD-TIJ",
        type: "TIJ",
        mediaSource: "实验室\\6.jpg",
        mediaExt: "jpg",
        desc: "Không chỉ trứng gà, mực in thực phẩm còn in trực tiếp lên bánh kẹo, vỏ trái cây màng mỏng một cách an toàn tuyệt đối."
    },
    {
        slug: "muc-in-tu-dong-hoa-robot",
        title: "Tích Hợp Máy In TIJ Lên Cánh Tay Robot",
        code: "TIJ-ROBOT",
        type: "TIJ",
        mediaSource: "实验室\\7.jpg",
        mediaExt: "jpg",
        desc: "Đầu in nhỏ gọn của công nghệ TIJ kết hợp với mực khô nhanh là combo hoàn hảo để gắn lên các cánh tay robot phân loại sản phẩm tốc độ cao."
    },
    {
        slug: "muc-khang-dau-t09-in-kim-loai",
        title: "Mực Kháng Dầu T09: Cứu Tinh Cho Gia Công Cơ Khí",
        code: "T09",
        type: "CIJ",
        mediaSource: "实验室\\8.jpg",
        mediaExt: "jpg",
        desc: "Các chi tiết kim loại phay tiện xong thường dính lớp dầu bảo quản. Mực T09 có khả năng tự xuyên qua lớp dầu mỏng để bám chặt vào kim loại."
    },
    {
        slug: "giai-phap-in-date-gia-re-hieu-qua",
        title: "Nên Chọn Mực TIJ Hay CIJ Cho Doanh Nghiệp Của Bạn?",
        code: "GUIDE",
        type: "TIJ/CIJ",
        mediaSource: "实验室\\9.jpg",
        mediaExt: "jpg",
        desc: "Bài viết tổng hợp giúp chủ doanh nghiệp SME quyết định đúng đắn khoản đầu tư giữa hệ thống in phun nhiệt TIJ và in phun liên tục CIJ."
    }
];

articles.forEach(article => {
    const sourceMediaPath = path.join(SOURCE_VIDEO_DIR, article.mediaSource);
    const destMediaName = `${article.slug}.${article.mediaExt}`;
    const destMediaPath = path.join(DEST_MEDIA_DIR, destMediaName);

    if (fs.existsSync(sourceMediaPath)) {
        fs.copyFileSync(sourceMediaPath, destMediaPath);
    } else {
        console.log(`Missing source media: ${sourceMediaPath}`);
    }

    const articleDir = path.join(BLOG_DIR, article.slug);
    if (!fs.existsSync(articleDir)) {
        fs.mkdirSync(articleDir, { recursive: true });
    }

    const mediaTag = article.mediaExt === 'mp4' 
        ? `<video src="/media/blog/${destMediaName}" autoPlay loop muted playsInline className="w-full h-auto rounded-xl shadow-lg border border-slate-200" />`
        : `<img src="/media/blog/${destMediaName}" alt="${article.title}" className="w-full h-auto rounded-xl shadow-lg border border-slate-200" />`;

    const codeContent = `import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: '${article.title} | VNPIS',
  description: '${article.desc}',
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/products/special-inks" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Về trang Mực In Đặc Biệt
        </Link>
        
        <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">${article.type}</span>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Mã: ${article.code}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">${article.title}</h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">${article.desc}</p>
          
          <div className="mb-12">
            ${mediaTag}
          </div>

          <div className="prose prose-lg max-w-none text-slate-700">
            <h2>Tại sao nên sử dụng mã mực ${article.code}?</h2>
            <p>Trong môi trường sản xuất công nghiệp, việc chọn đúng loại mực quyết định tới 80% khả năng truy xuất nguồn gốc và nhận diện thương hiệu. Dòng mực ${article.type} mã <strong>${article.code}</strong> của VNPIS mang lại hiệu suất vượt trội, loại bỏ hoàn toàn các vấn đề bong tróc, mờ nhòe hay nghẹt đầu in.</p>
            
            <ul className="space-y-4 my-8 list-none pl-0">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span>Bám dính vĩnh viễn trên bề mặt tiêu chuẩn.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span>Thời gian khô cực nhanh, đáp ứng dây chuyền tốc độ cao.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5" />
                <span>Thân thiện môi trường, an toàn cho người vận hành.</span>
              </li>
            </ul>

            <p>Khách hàng của VNPIS đã ứng dụng thành công giải pháp này để tiết kiệm hàng trăm triệu đồng chi phí tem nhãn mỗi năm. Thay vì dán tem, in trực tiếp bằng công nghệ ${article.type} là tương lai của ngành đóng gói.</p>
          </div>
        </article>

        {/* Lead Form */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Cần Tư Vấn & Báo Giá Mã ${article.code}?</h2>
            <p className="text-slate-300">Để lại thông tin, chuyên gia VNPIS sẽ mang mẫu thử đến tận nhà máy của bạn.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Họ và Tên *</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Nhập tên của bạn" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Số Điện Thoại *</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Nhập số điện thoại" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Yêu cầu báo giá</label>
              <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" defaultValue={"Tôi quan tâm đến mã mực ${article.code}. Vui lòng liên hệ tư vấn."}></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-colors text-lg">
              Gửi Yêu Cầu Tư Vấn Ngay
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
`;

    fs.writeFileSync(path.join(articleDir, 'page.tsx'), codeContent);
});

console.log("Successfully generated 20 articles.");
