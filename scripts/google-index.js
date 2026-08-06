/**
 * Google Indexing API Automator
 * 
 * Usage:
 * 1. Create a Service Account in Google Cloud Console.
 * 2. Download the JSON key and save it as 'service-account.json' in this folder.
 * 3. Add the service account email as an Owner in your Google Search Console property.
 * 4. Run `node scripts/google-index.js` to ping the URLs.
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const keyFilePath = path.join(__dirname, 'service-account.json');

// Check if credentials exist
if (!fs.existsSync(keyFilePath)) {
  console.error("❌ LỖI: Không tìm thấy file 'service-account.json'. Vui lòng làm theo hướng dẫn trong file để tạo Google Service Account.");
  process.exit(1);
}

const key = require('./service-account.json');
const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
);

// Danh sách các URL Hub cần ưu tiên index (Cập nhật cho CIJ & TIJ Hubs)
const urlsToIndex = [
  'https://vnpis.com/solutions/uv-single-pass-printing',
  'https://vnpis.com/solutions/pad-printing',
  'https://vnpis.com/solutions/screen-printing',
  'https://vnpis.com/solutions/industrial-coding',
  'https://vnpis.com/solutions/variable-data-printing',
  'https://vnpis.com/products/industrial-ink',
  'https://vnpis.com/products/cij-printers',
  'https://vnpis.com/products/tij-printers',
  'https://vnpis.com/products/consumables',
  'https://vnpis.com/services/machine-rental',
  'https://vnpis.com/services/machine-repair',
  'https://vnpis.com/services/screen-printing-service',
  'https://vnpis.com/services/color-management',
  'https://vnpis.com/videos',
  'https://vnpis.com/faq'
];

async function pingGoogle() {
  console.log("🚀 Bắt đầu gửi yêu cầu index lên Google Search Console...");
  
  try {
    await jwtClient.authorize();
    console.log("✅ Đã xác thực Service Account thành công!");
  } catch (error) {
    console.error("❌ Lỗi xác thực:", error.message);
    return;
  }

  const indexing = google.indexing({
    version: 'v3',
    auth: jwtClient,
  });

  for (const url of urlsToIndex) {
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ Đã gửi: ${url}`);
    } catch (error) {
      console.error(`❌ Lỗi gửi ${url}:`, error.message);
    }
    
    // Ngủ 1 giây để tránh Rate Limit của Google (100 request/phút)
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log("🎉 Hoàn tất quá trình gửi yêu cầu Index.");
}

pingGoogle();
