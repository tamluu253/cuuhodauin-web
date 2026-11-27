#!/usr/bin/env node
/**
 * Auto-sync Sitemap to Google Search Console (GSC) for cuuhodauin.com
 * Reads GA_CLIENT_EMAIL & GA_PRIVATE_KEY from .env.local (or sibling workspace .env.local)
 * and automatically submits https://www.cuuhodauin.com/sitemap.xml to GSC.
 */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

const SITEMAP_URL = 'https://www.cuuhodauin.com/sitemap.xml';
const SITE_URLS_TO_TRY = [
  'https://www.cuuhodauin.com/',
  'https://cuuhodauin.com/',
  'sc-domain:cuuhodauin.com',
];

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    let val = trimmed.slice(eqIndex + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = val;
    }
  }
}

async function main() {
  loadEnvFile(path.join(process.cwd(), '.env.local'));
  if (!process.env.GA_CLIENT_EMAIL || !process.env.GA_PRIVATE_KEY) {
    loadEnvFile(path.join(process.cwd(), '..', 'vnpis-web', '.env.local'));
  }
  if (!process.env.GA_CLIENT_EMAIL || !process.env.GA_PRIVATE_KEY) {
    loadEnvFile(path.join(process.cwd(), '..', 'inanvnpis-web', '.env.local'));
  }

  const clientEmail = process.env.GA_CLIENT_EMAIL?.trim();
  const privateKey = process.env.GA_PRIVATE_KEY?.trim()?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
    console.error('[GSC Sync] Lỗi: Thiếu GA_CLIENT_EMAIL hoặc GA_PRIVATE_KEY trong .env.local');
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/webmasters'],
  });

  const searchconsole = google.searchconsole({ version: 'v1', auth });

  let submitted = false;
  let lastError = null;

  for (const siteUrl of SITE_URLS_TO_TRY) {
    try {
      await searchconsole.sitemaps.submit({
        siteUrl,
        feedpath: SITEMAP_URL,
      });
      console.log(`[GSC Sync] Thành công! Đã cập nhật sitemap ${SITEMAP_URL} lên property: ${siteUrl}`);

      try {
        const info = await searchconsole.sitemaps.get({
          siteUrl,
          feedpath: SITEMAP_URL,
        });
        console.log('[GSC Sync] Trạng thái Sitemap trên GSC:', {
          path: info.data.path,
          lastSubmitted: info.data.lastSubmitted,
          isPending: info.data.isPending,
          warnings: info.data.warnings || 0,
          errors: info.data.errors || 0,
        });
      } catch {
        // Non-fatal if immediate read lags
      }

      submitted = true;
      break;
    } catch (err) {
      lastError = err;
      console.warn(`[GSC Sync] Bỏ qua property ${siteUrl}: ${err.message}`);
    }
  }

  if (!submitted) {
    console.error('[GSC Sync] Không thể submit sitemap lên GSC:', lastError?.message || 'Unknown error');
    process.exit(1);
  }
}

main();
