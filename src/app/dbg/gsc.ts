import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});

const searchconsole = google.searchconsole({ version: 'v1', auth });

const siteUrlsToTry = [
  'sc-domain:cuuhodauin.com',
  'https://cuuhodauin.com/',
  'https://www.cuuhodauin.com/',
];

export async function getTopKeywords(startDate: string, endDate: string) {
  if (!process.env.GA_CLIENT_EMAIL || !process.env.GA_PRIVATE_KEY) {
    return [];
  }

  for (const siteUrl of siteUrlsToTry) {
    try {
      const response = await searchconsole.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: ['query'],
          rowLimit: 10,
        },
      });

      if (response.data.rows && response.data.rows.length > 0) {
        return response.data.rows.map((row, i) => ({
          rank: i + 1,
          query: row.keys?.[0] || 'Unknown',
          clicks: row.clicks || 0,
          impressions: row.impressions || 0,
          ctr: ((row.ctr || 0) * 100).toFixed(1) + '%',
        }));
      }
      return [];
    } catch (e: any) {
      if (e.code === 403) {
        continue;
      }
      console.error(`GSC Error for ${siteUrl}:`, e.message);
    }
  }

  return [];
}
