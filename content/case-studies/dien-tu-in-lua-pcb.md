---
title: "Ứng Dụng In Lụa Tự Động Lên Bo Mạch Điện Tử (PCB) Cho Nhà Máy Linh Kiện"
description: "VNPIS thiết kế và lắp đặt hệ thống máy in lụa CNC quang học (CCD Camera) độ chính xác 0.01mm, dùng để in keo hàn (Solder Paste) và mực dẫn điện cho ngành điện tử."
category: "Điện Tử & Bán Dẫn"
client: "Nhà máy Sản xuất Linh kiện Điện tử"
industry: "Sản xuất Mạch in (PCB & FPC)"
solution: "Máy In Lụa Bàn Phẳng CNC + Hệ thống định vị CCD Camera + Khung lưới thép Thụy Sĩ"
result: "Đạt độ chính xác in tuyệt đối (sai số < 0.015mm). Năng suất tăng 300% so với in thủ công."
---

# Bài Toán Cực Khó Của Ngành Linh Kiện Điện Tử

Khách hàng của VNPIS là một nhà cung cấp linh kiện bo mạch (PCB) cho các hãng điện thoại lớn. Họ nhận một dự án sản xuất mạch in mềm (Flexible Printed Circuit - FPC). 
Yêu cầu của dự án là phải in một lớp **keo hàn (Solder paste)** và lớp **mực dẫn điện (Conductive Ink)** lên trên bề mặt mạch với độ dày chính xác là 30 micron. 

Vấn đề lớn nhất:
Các chân linh kiện (Pads) trên bo mạch có kích thước siêu nhỏ, khoảng cách giữa các chân chỉ là 0.1mm. Nếu in lệch dù chỉ bằng sợi tóc, keo hàn sẽ dính vào nhau gây chập mạch (Short circuit), hoặc không bám trúng chân linh kiện gây hở mạch (Open circuit).
Hệ thống in lụa bán tự động canh lề bằng cơ khí (chốt định vị) hiện tại của nhà máy có sai số lên tới 0.05mm, dẫn đến tỷ lệ hàng phế phẩm (Scrap rate) vượt quá 15%, gây thiệt hại khổng lồ.

# Giải Pháp Công Nghệ Cao Từ VNPIS

Để đạt độ chính xác ở mức micromet, không thể dựa vào cữ cơ khí hay mắt người. VNPIS tiến hành nâng cấp toàn bộ dây chuyền với giải pháp **In Lụa Định Vị Quang Học Tự Động**.

## 1. Máy In Lụa Bàn Phẳng CNC (CCD Registration Screen Printer)
Thay vì công nhân tự đặt phôi vào, máy in của VNPIS được trang bị:
- **Bàn in cân bằng động XY-Theta:** Bàn hút chân không giữ chặt bo mạch có thể dịch chuyển xoay (Theta) và trượt ngang dọc (X,Y) bằng động cơ Servo siêu chính xác.
- **Hệ Thống CCD Vision Camera:** Khi tay robot gắp bo mạch đặt vào bàn in, 4 camera sẽ soi xuống 4 điểm đánh dấu (Fiducial marks) trên bo mạch. Phần mềm sẽ tính toán độ lệch góc và lập tức ra lệnh cho bàn in xoay/trượt khớp 100% với khung lưới in bên trên. Mọi thứ diễn ra trong vòng 0.5 giây.

## 2. Khung Lưới In Hợp Kim Thép (Stainless Steel Mesh)
Với các nét in siêu nhỏ 0.1mm, lưới polyester thông thường sẽ bị giãn sau vài trăm lần quét dao gạt. VNPIS cung cấp khung căng **lưới thép không gỉ nhập khẩu Thụy Sĩ**. Lưới thép có độ đàn hồi gần như bằng 0, đảm bảo kích thước mắt lưới không thay đổi, cho phép giọt mực/keo đi qua với khối lượng đồng đều tuyệt đối từ bản in đầu tiên đến bản in thứ 10.000.

## 3. Dao Gạt Mực (Squeegee) Phủ PU Tĩnh Điện
Sử dụng dao gạt có độ cứng 80 Shore A, lưỡi vát kim cương để cắt đứt màng keo hàn dứt khoát, không để lại viền lem.

# Kết Quả Đột Phá

Sau 1 tháng vận hành dây chuyền in lụa tự động của VNPIS, nhà máy đã ghi nhận những con số không tưởng:
- **Độ chính xác (Registration Accuracy):** Sai số khi in liên tục giảm xuống dưới mức ±0.015mm.
- **Tỷ lệ phế phẩm (Scrap rate):** Giảm từ 15% xuống còn **0.2%**.
- **Năng suất:** Robot nạp phôi tự động giúp tốc độ in tăng gấp 3 lần so với công nhân thao tác thủ công, giải quyết triệt để tình trạng nút thắt cổ chai (Bottleneck) trong khâu in ấn.

Với kinh nghiệm cơ khí chính xác và tự động hóa, VNPIS chứng minh khả năng thiết lập những dây chuyền in lụa khó nhất cho ngành công nghiệp điện tử công nghệ cao.
