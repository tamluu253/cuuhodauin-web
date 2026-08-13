import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Transporter for sending lead notification emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info@vnpis.com',
    pass: 'lejochkwtxpxrefu',
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message, pageTitle } = body;

    const timeStr = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    console.log('=== CỨU HỘ ĐẦU IN - YÊU CẦU MỚI ===');
    console.log(`- Thời gian: ${timeStr}`);
    console.log(`- Trang: ${pageTitle || 'Trang chủ Cứu Hộ Đầu In'}`);
    console.log(`- Họ tên: ${name}`);
    console.log(`- SĐT: ${phone}`);
    console.log(`- Mô tả lỗi / Nhu cầu: ${message}`);
    console.log('===================================');

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; background-color: #ffffff;">
        <div style="background-color: #0f172a; color: #ffffff; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="margin: 0; font-size: 20px; color: #f59e0b;">CỨU HỘ ĐẦU IN (CUUHODAUIN.COM) - YÊU CẦU MỚI</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">Thời gian tiếp nhận: ${timeStr}</p>
        </div>

        <p style="font-size: 15px; color: #334155; margin-bottom: 16px;">
          Hệ thống cuuhodauin.com vừa ghi nhận 1 yêu cầu tư vấn / cứu hộ đầu in từ khách hàng:
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px; font-weight: bold; color: #475569; width: 140px; background-color: #f8fafc;">Họ và Tên:</td>
            <td style="padding: 10px; color: #0f172a; font-weight: bold; font-size: 16px;">${name || 'Chưa cung cấp'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px; font-weight: bold; color: #475569; background-color: #f8fafc;">Số Điện Thoại:</td>
            <td style="padding: 10px; color: #2563eb; font-weight: bold; font-size: 16px;">${phone || 'Chưa cung cấp'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px; font-weight: bold; color: #475569; background-color: #f8fafc;">Trang Đăng Ký:</td>
            <td style="padding: 10px; color: #0f172a;">${pageTitle || 'cuuhodauin.com'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #475569; background-color: #f8fafc;">Hiện Trạng Lỗi:</td>
            <td style="padding: 10px; color: #0f172a; line-height: 1.5;">${message || 'Cứu hộ / phục hồi đầu in'}</td>
          </tr>
        </table>

        <div style="background-color: #fffbebf8; border-left: 4px solid #f59e0b; padding: 12px 16px; margin-bottom: 20px; font-size: 13px; color: #b45309;">
          <strong>Lưu ý:</strong> Vui lòng liên hệ lại khách hàng qua số điện thoại <strong>${phone}</strong> để phản hồi cứu hộ kịp thời.
        </div>

        <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">
          Email tự động từ hệ thống Cứu Hộ Đầu In (https://cuuhodauin.com).
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: '"Cứu Hộ Đầu In Lead" <info@vnpis.com>',
      to: 'info@vnpis.com',
      cc: 'tamluu253@gmail.com',
      subject: `[Cứu Hộ Đầu In] ${name} - ${phone}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Đã gửi thông tin thành công' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Không thể gửi email thông báo' }, { status: 500 });
  }
}
