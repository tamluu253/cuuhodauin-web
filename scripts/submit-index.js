const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://vnpis.com';
const CREDENTIALS_PATH = path.join(__dirname, '../credentials.json');

async function submitToIndex() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('LỖI: Không tìm thấy file credentials.json tại thư mục gốc.');
    console.log('Vui lòng làm theo hướng dẫn trong Kế hoạch SEO để lấy file này từ Google Cloud.');
    process.exit(1);
  }

  const jwtClient = new google.auth.JWT({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  await jwtClient.authorize();
  const indexing = google.indexing({ version: 'v3', auth: jwtClient });

  const contentDir = path.join(__dirname, '../content/articles');
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

  console.log(`Đang chuẩn bị gửi ${files.length} bài viết lên Google Indexing API...`);

  for (const file of files) {
    const slug = file.replace('.md', '');
    const url = `${DOMAIN}/blog/${slug}`;

    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`[Thành công] Đã gửi: ${url}`);
    } catch (error) {
      console.error(`[Thất bại] Lỗi khi gửi ${url}:`, error.message);
    }
    
    // Ngủ 500ms để tránh bị Google block do spam quá nhanh
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('Hoàn thành gửi index!');
}

submitToIndex();
