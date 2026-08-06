const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const https = require('https');

const CREDENTIALS_PATH = path.join(__dirname, '../credentials.json');

async function fetchSitemap() {
  return new Promise((resolve, reject) => {
    https.get('https://vnpis.com/sitemap.xml', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function submitToIndexAPI(urls) {
  try {
    const jwtClient = new google.auth.JWT({
      keyFile: CREDENTIALS_PATH,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    await jwtClient.authorize();
    
    // Create an array of batch requests
    // Google indexing API does not have an official batch endpoint in node client easily usable for URL_UPDATED
    // We will send them sequentially but fast.
    
    console.log(`Starting to submit ${urls.length} URLs...`);
    
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      try {
        const response = await jwtClient.request({
          method: 'POST',
          url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
          data: {
            url: url,
            type: 'URL_UPDATED',
          },
        });
        console.log(`[Success ${i+1}/${urls.length}] Submitted: ${url}`);
        successCount++;
      } catch (err) {
        console.error(`[Error ${i+1}/${urls.length}] Failed: ${url} - ${err.message}`);
        failCount++;
      }
      
      // Delay slightly to avoid rate limit (Google limit is usually high but good practice)
      await new Promise(r => setTimeout(r, 100));
    }
    
    console.log(`\nSubmission complete! Success: ${successCount}, Failed: ${failCount}`);

  } catch (error) {
    console.error('Error during indexing submission:', error);
  }
}

async function main() {
  try {
    console.log("Fetching sitemap...");
    const sitemapXml = await fetchSitemap();
    
    // Extract loc tags
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    const urls = [];
    let match;
    while ((match = urlRegex.exec(sitemapXml)) !== null) {
      urls.push(match[1]);
    }
    
    if (urls.length === 0) {
      console.log("No URLs found in sitemap.");
      return;
    }
    
    await submitToIndexAPI(urls);
    
  } catch (err) {
    console.error("Fatal error:", err);
  }
}

main();
