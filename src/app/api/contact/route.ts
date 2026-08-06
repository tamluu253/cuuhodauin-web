import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure Google Workspace SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: 'info@vnpis.com',
    pass: 'lejochkwtxpxrefu',
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, company, message, pageTitle } = body;

    const timeStr = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    console.log('=== KHÁCH HÀNG ĐĂNG KÝ TƯ VẤN ===');
    console.log(`- Thời gian: ${timeStr}`);
    console.log(`- Trang đăng ký: ${pageTitle || 'Website VNPIS'}`);
    console.log(`- Họ và tên: ${name}`);
    console.log(`- Số điện thoại: ${phone}`);
    console.log(`- Công ty / Xưởng: ${company}`);
    console.log(`- Nhu cầu: ${message}`);
    console.log('===================================');

    // Create HTML template for professional email notification
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; rounded: 12px; padding: 24px; background-color: #ffffff;">
        <div style="background-color: #0f172a; color: #ffffff; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="margin: 0; font-size: 20px; color: #f97316;">VNPIS WEB LEAD - YÊU CẦU TƯ VẤN MỚI</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">Thời gian tiếp nhận: ${timeStr}</p>
        </div>

        <p style="font-size: 15px; color: #334155; margin-bottom: 16px;">
          Hệ thống vnpis.com vừa ghi nhận 1 yêu cầu tư vấn báo giá mới từ khách hàng với thông tin chi tiết dưới đây:
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
            <td style="padding: 10px; font-weight: bold; color: #475569; background-color: #f8fafc;">Công ty / Xưởng:</td>
            <td style="padding: 10px; color: #0f172a;">${company || 'Chưa cung cấp'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f1f5f9;">
            <td style="padding: 10px; font-weight: bold; color: #475569; background-color: #f8fafc;">Trang Đăng Ký:</td>
            <td style="padding: 10px; color: #0f172a;">${pageTitle || 'Trang chủ VNPIS'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #475569; background-color: #f8fafc;">Mô Tả Nhu Cầu:</td>
            <td style="padding: 10px; color: #0f172a; line-height: 1.5;">${message || 'Tư vấn báo giá vật tư/máy móc'}</td>
          </tr>
        </table>

        <div style="background-color: #fff7ed; border-left: 4px solid #f97316; padding: 12px 16px; margin-bottom: 20px; font-size: 13px; color: #c2410c;">
          <strong>Lưu ý:</strong> Vui lòng liên hệ lại khách hàng qua số điện thoại <strong>${phone}</strong> để tư vấn báo giá kịp thời.
        </div>

        <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; pt: 12px;">
          Email này được gửi tự động từ hệ thống Website VNPIS (https://vnpis.com).
        </div>
      </div>
    `;

    // Send mail to info@vnpis.com and CC tamluu253@gmail.com
    await transporter.sendMail({
      from: '"VNPIS Lead Notification" <info@vnpis.com>',
      to: 'info@vnpis.com',
      cc: 'tamluu253@gmail.com',
      subject: `[VNPIS Web Lead] ${name} - ${phone} (${company || 'Khách Hàng Mới'})`,
      html: htmlContent,
    });

    console.log('Email sent successfully via info@vnpis.com SMTP!');

    return NextResponse.json({ success: true, message: 'Đã tiếp nhận yêu cầu tư vấn' });
  } catch (error) {
    console.error('Email sending error via SMTP:', error);
    return NextResponse.json({ success: false, error: 'Có lỗi xảy ra khi gửi email' }, { status: 500 });
  }
}
