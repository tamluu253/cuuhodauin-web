import os
import datetime

new_posts = [
    # --- Máy in lụa (SCREEN) ---
    {
        "slug": "may-in-lua-tu-dong-in-thung-carton",
        "title": "Máy In Lụa Tự Động: Giải Pháp In Thùng Carton, Túi Giấy Giá Rẻ",
        "code": "SCREEN-01",
        "category": "SCREEN",
        "desc": "Máy in lụa tự động mang lại độ phủ mực dày, màu sắc rực rỡ cho bao bì giấy, thùng carton. Tiết kiệm chi phí so với in offset số lượng ít.",
        "content": "\nIn lụa (Screen Printing) từ lâu đã là công nghệ không thể thay thế trong ngành in ấn bao bì. Đối với các đơn vị sản xuất thùng carton, hộp giấy, túi giấy kraft số lượng vừa và nhỏ, máy in lụa tự động là lựa chọn hoàn hảo thay vì phải in offset tốn kém.\n\nƯu điểm lớn nhất của máy in lụa là khả năng tạo ra lớp mực rất dày, che phủ hoàn toàn màu nền tối của giấy kraft hay carton sóng. Tốc độ máy in lụa tự động hiện nay đã được cải thiện đáng kể, tích hợp hệ thống sấy hồng ngoại (IR) hoặc sấy UV ngay trên băng tải, giúp sản phẩm khô lập tức sau khi in.\n\nĐầu tư máy in lụa tự động từ VNPIS giúp xưởng của bạn chủ động hoàn toàn khâu in ấn bao bì. Vui lòng liên hệ 0987453866 để nhận tư vấn cấu hình máy phù hợp nhất.\n"
    },
    {
        "slug": "may-in-lua-phang-in-mach-dien-tu-pcb",
        "title": "Máy In Lụa Phẳng Chuyên Dụng In Bo Mạch Điện Tử PCB, Kính Cường Lực",
        "code": "SCREEN-02",
        "category": "SCREEN",
        "desc": "Công nghệ in lụa phẳng chính xác tuyệt đối dùng để in phủ xanh bo mạch PCB, in màng mỏng, in mặt kính điện thoại và thiết bị gia dụng.",
        "content": "\nTrong ngành công nghiệp điện tử và công nghệ cao, máy in lụa phẳng đóng vai trò cực kỳ quan trọng. Chúng được sử dụng để in các lớp mực dẫn điện, phủ xanh bảo vệ bo mạch PCB, hoặc in các họa tiết siêu nét lên kính cường lực, màn hình cảm ứng.\n\nYêu cầu đối với máy in lụa trong lĩnh vực này là độ chính xác vi sai (chỉ tính bằng micromet). Các máy in lụa công nghiệp của VNPIS được trang bị hệ thống căn chỉnh bằng camera CCD tự động, bàn hút chân không chống xê dịch vật liệu, và động cơ servo điều khiển dao gạt mực mượt mà.\n\nNếu bạn đang tìm kiếm giải pháp in lụa công nghệ cao cho dây chuyền sản xuất linh kiện, hãy nhấc máy gọi 0987453866. Chúng tôi có sẵn đội ngũ kỹ sư dày dạn kinh nghiệm hỗ trợ bạn.\n"
    },
    {
        "slug": "may-in-lua-tron-in-chai-lo-my-pham",
        "title": "In Tròn Siêu Tốc Trên Chai Lọ Mỹ Phẩm Với Máy In Lụa Tròn",
        "code": "SCREEN-03",
        "category": "SCREEN",
        "desc": "Máy in lụa tròn giải quyết bài toán in 360 độ lên thân chai lọ mỹ phẩm, ly nhựa, tuýp sữa rửa mặt. Lớp mực căng bóng, sang trọng.",
        "content": "\nBên cạnh máy in tampon in trên các mặt cong nhỏ, máy in lụa tròn lại là \"bá chủ\" khi cần in phủ toàn bộ 360 độ xung quanh thân chai lọ trụ tròn hoặc oval. Đối với bao bì mỹ phẩm, lớp mực in lụa luôn mang lại hiệu ứng thị giác căng bóng, đậm đà và có độ nổi nhẹ (emboss) rất sang trọng.\n\nMáy in lụa tròn hoạt động theo nguyên lý tịnh tiến: khung lụa di chuyển ngang trong khi chai lọ xoay tròn theo trục. Kỹ thuật này đòi hỏi khuôn gá (jig) phải được tiện CNC chính xác để chai không bị trượt. Kết hợp với mực in UV lụa, mực sẽ khô ngay lập tức khi đi qua buồng sấy.\n\nLiên hệ 0987453866 để đặt mua máy in lụa tròn giá tốt từ VNPIS. Chúng tôi hỗ trợ tiện khuôn gá miễn phí cho đơn hàng đầu tiên!\n"
    },
    
    # --- Máy UV Single Pass (UV) ---
    {
        "slug": "may-in-uv-single-pass-in-the-nhua-qr-code",
        "title": "Máy In UV Single Pass In Thẻ Nhựa, Dữ Liệu Biến Đổi Tốc Độ Siêu Tốc",
        "code": "UV-SP-01",
        "category": "UV",
        "desc": "Đột phá tốc độ in với máy UV Single Pass. Chuyên in dữ liệu biến đổi (QR code, Barcode, Serial) lên thẻ nhựa, thẻ cào, vé xe với tốc độ 50m/phút.",
        "content": "\nCông nghệ in UV Single Pass đang thay đổi hoàn toàn cục diện ngành in ấn kỹ thuật số công nghiệp. Thay vì đầu in phải chạy qua chạy lại nhiều lần (multi-pass) như máy in UV phẳng thông thường, đầu in Single Pass được xếp cố định theo khổ in, và sản phẩm chỉ cần lướt qua MỘT LẦN duy nhất là hoàn thiện.\n\nĐiều này mang lại tốc độ in khủng khiếp (lên đến 50 - 80 mét/phút). Đây là giải pháp hoàn hảo để in dữ liệu biến đổi (VDP - Variable Data Printing) như số serial nhảy tự động, mã QR code định danh độc nhất lên hàng triệu thẻ nhựa, thẻ cào, thẻ bảo hành mỗi ngày.\n\nVNPIS tự hào là đơn vị tiên phong cung cấp hệ thống máy in UV Single Pass tích hợp kèm băng tải cấp liệu tự động (feeder). Mọi chi tiết xin liên hệ hotline 0987453866.\n"
    },
    {
        "slug": "may-in-uv-single-pass-in-ly-giay-hop-xop",
        "title": "Ứng Dụng Máy In UV Single Pass In Ly Giấy, Hộp Đựng Thức Ăn Nhanh",
        "code": "UV-SP-02",
        "category": "UV",
        "desc": "Máy in UV Single Pass thay thế in offset để in logo full màu trực tiếp lên ly giấy, hộp xốp, hộp bã mía số lượng ít với chi phí cực rẻ.",
        "content": "\nTrong ngành F&B, việc nhập ly giấy, hộp bã mía, hộp xốp in sẵn logo đòi hỏi số lượng (MOQ) cực kỳ lớn từ nhà máy. Để giải quyết bài toán cá nhân hóa bao bì cho các chuỗi quán ăn nhỏ, máy in UV Single Pass ra đời như một vị cứu tinh.\n\nMáy in UV Single Pass có thể in trực tiếp hình ảnh full màu (CMYK) sắc nét lên bề mặt ly giấy đã thành phẩm hoặc nắp hộp xốp. Mực UV thực phẩm khô ngay lập tức nhờ hệ thống đèn LED UV lạnh, không làm biến dạng vật liệu mỏng.\n\nKhông cần làm bản kẽm, không lo tồn kho bao bì. Đầu tư một máy UV Single Pass từ VNPIS giúp bạn nhận gia công in ấn cho hàng trăm quán ăn trong khu vực. Gọi 0987453866 để xem video vận hành máy!\n"
    },
    {
        "slug": "may-in-uv-single-pass-tich-hop-day-chuyen-nha-may",
        "title": "Dịch Vụ Lắp Đặt Máy In UV Single Pass Trực Tiếp Tại Chuyền Sản Xuất",
        "code": "UV-SP-03",
        "category": "UV",
        "desc": "VNPIS không chỉ bán máy mà còn cung cấp dịch vụ thiết kế, tích hợp đầu in UV Single Pass trực tiếp vào dây chuyền băng tải hiện hữu của nhà máy.",
        "content": "\nMột trong những ưu điểm vĩ đại nhất của công nghệ in UV Single Pass là khả năng \"Plug and Play\" (cắm là chạy). Thay vì mua một chiếc máy in cồng kềnh độc lập, bạn hoàn toàn có thể mua nguyên cụm đầu in UV Single Pass để gắn thẳng lên băng tải dây chuyền đóng gói đang có sẵn tại nhà máy.\n\nĐội ngũ kỹ sư cơ điện tự động hóa của VNPIS sẽ khảo sát, thiết kế khung gá, lập trình PLC đồng bộ tốc độ đầu in với tốc độ băng tải của bạn. Dù là in date, in mã vạch lên vỉ thuốc, hay in logo màu lên vỏ thùng carton lướt qua, mọi thứ đều diễn ra hoàn toàn tự động không cần sự can thiệp của con người.\n\nTiết kiệm không gian nhà xưởng, tối ưu luồng công việc (workflow). Liên hệ ngay chuyên gia tự động hóa của chúng tôi qua số 0987453866 để nhận tư vấn giải pháp.\n"
    },

    # --- Vật tư cho in pad, in lụa (VAT-TU) ---
    {
        "slug": "ban-thep-in-tampon-cliche",
        "title": "Gia Công Bản Thép In Tampon (Cliche) Khắc Laser Siêu Nét",
        "code": "VT-01",
        "category": "VAT-TU",
        "desc": "VNPIS nhận gia công khắc bản thép in tampon (Cliche) bằng tia laser Fiber độ chuẩn xác cao. Bản thép chịu mài mòn, tuổi thọ lên đến 1 triệu nhịp in.",
        "content": "\nBản thép (Cliche) là linh hồn của phương pháp in tampon. Một bản thép bị ăn mòn không đều hoặc độ sâu không chuẩn sẽ khiến mực lên không đều, nhòe nét hoặc mờ lợt. Thay vì sử dụng phương pháp ăn mòn axit truyền thống gây ô nhiễm và thiếu chính xác, VNPIS áp dụng công nghệ khắc bản thép bằng tia Laser Fiber tiên tiến nhất.\n\nBản thép của chúng tôi được nhập khẩu từ Nhật Bản, có độ cứng cao (Rockwell 60-62 HRC), chịu được sự ma sát liên tục của dao gạt mực bằng thép hoặc vòng hợp kim của cốc mực. Độ sâu vệt khắc được kiểm soát hoàn hảo từ 20 đến 30 micromet tùy theo độ nhớt của mực và tính chất vật liệu.\n\nBạn chỉ cần gửi file vector (AI, Corel), VNPIS sẽ gia công và giao bản thép tận nơi trên toàn quốc. Đặt hàng ngay qua hotline 0987453866.\n"
    },
    {
        "slug": "cuc-silicone-in-tampon",
        "title": "Cung Cấp Cục Silicone In Tampon Mọi Kích Thước, Độ Cứng Theo Yêu Cầu",
        "code": "VT-02",
        "category": "VAT-TU",
        "desc": "Tổng kho cục silicone in tampon (Pad) đa dạng hình dáng: chóp nón, chữ nhật, bầu dục. Silicone nhập khẩu chống tĩnh điện, hút và nhả mực cực tốt.",
        "content": "\nChất lượng của bản in tampon phụ thuộc đến 40% vào cục silicone (Pad). Một cục silicone tốt phải có khả năng lấy sạch mực từ bản thép và nhả hoàn toàn mực lên bề mặt sản phẩm mà không để lại cặn rỗ. \n\nVNPIS cung cấp hàng trăm hình dáng silicone khác nhau để tương thích với mọi biên dạng sản phẩm (từ mặt phẳng, mặt cong, đến các hốc sâu). Vật liệu silicone được pha trộn với tỷ lệ dầu chuẩn xác, đảm bảo độ bền cơ học cao, không bị trương nở khi tiếp xúc với dung môi tẩy rửa mạnh. Độ cứng (Shore A) được điều chỉnh linh hoạt từ mềm (phù hợp vật liệu dễ vỡ) đến cứng (in các mảng màu lớn).\n\nĐừng để một cục silicone kém chất lượng làm hỏng cả đơn hàng của bạn. Liên hệ ngay 0987453866 để chúng tôi tư vấn mẫu silicone chuẩn xác nhất!\n"
    },
    {
        "slug": "muc-in-lua-uv-muc-ep-kim",
        "title": "Các Dòng Mực In Lụa Cao Cấp: Mực UV, Mực Plastisol, Mực Ép Kim",
        "code": "VT-03",
        "category": "VAT-TU",
        "desc": "Phân phối sỉ lẻ các loại mực in lụa chuyên dụng: Mực UV in kính/nhựa, mực Plastisol in vải, keo in ép kim. Đạt tiêu chuẩn an toàn SGS, RoHS.",
        "content": "\nCông nghệ in lụa có tính ứng dụng đa dạng nhờ vào sự phong phú của hệ thống mực in. Tại VNPIS, chúng tôi chọn lọc và phân phối các dòng mực in lụa chất lượng cao nhất, phục vụ cho nhiều ngành công nghiệp khắt khe.\n\n- **Mực UV In Lụa:** Khô ngay lập tức dưới ánh sáng đèn UV, màng mực bóng bẩy, bám dính siêu tốt trên PET, PVC, Kính, Kim loại.\n- **Mực Plastisol:** Dành riêng cho ngành dệt may, in áo thun. Không bị khô lưới, màu sắc tươi sáng và không nứt gãy khi giặt.\n- **Keo Ep Kim (Foil Transfer):** In lụa keo lót trước khi ép nhũ vàng/bạc, tạo hiệu ứng metallic rực rỡ cho thiệp cưới, bao bì hộp cứng.\n\nTất cả mực in đều có đầy đủ chứng chỉ an toàn môi trường. Vui lòng gọi 0987453866 để nhận bảng test màu và MSDS chi tiết.\n"
    },
    {
        "slug": "khung-lua-dao-gat-muc-in-lua",
        "title": "Vật Tư In Lụa Trọn Gói: Khung Nhôm, Lưới In, Dao Gạt Mực",
        "code": "VT-04",
        "category": "VAT-TU",
        "desc": "Cung cấp khung nhôm in lụa căng sẵn lưới polyester đủ mắt lưới (ngành giấy, nhựa, vải). Lưỡi dao gạt mực PU chịu dung môi siêu bền.",
        "content": "\nĐể có một bản in lụa đẹp, ngoài máy in và mực, bạn cần một hệ thống khung và dao gạt đạt chuẩn. Lưới in chùng hoặc dao gạt bị mẻ sẽ lập tức gây ra hiện tượng lem viền, răng cưa.\n\nVNPIS nhận căng khung lụa nhôm với lưới Polyester cường lực nhập khẩu từ Thụy Sĩ/Đài Loan. Số mắt lưới (mesh) đa dạng từ 40T đến 160T, phù hợp cho từ việc in keo hạt to đến in phủ UV vecni bóng. Dao gạt mực chất liệu Polyurethane (PU) chịu được ma sát mạnh, không bị trương nở trong dung môi, các cạnh dao được mài vát chuẩn góc 45 độ, 60 độ hoặc 90 độ.\n\nChúng tôi cung cấp trọn gói vật tư cho các xưởng in mới mở với giá sỉ tốt nhất thị trường. Hotline đặt hàng giao ngay trong ngày: 0987453866.\n"
    }
]

def generate_new_blogs():
    md_dir = 'content/articles'
    os.makedirs(md_dir, exist_ok=True)
    
    date = datetime.datetime.now().strftime('%Y-%m-%d')
    count = 0
    
    for post in new_posts:
        slug = post['slug']
        title = post['title']
        code = post['code']
        category = post['category']
        desc = post['desc']
        content = post['content']
        
        md_content = f"""---
title: "{title}"
description: "{desc}"
date: "{date}"
category: "{category}"
code: "{code}"
---
{content}
"""
        filepath = os.path.join(md_dir, f"{slug}.md")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(md_content)
        count += 1

    print(f"Successfully generated {count} new MDX blog posts.")

if __name__ == '__main__':
    generate_new_blogs()
