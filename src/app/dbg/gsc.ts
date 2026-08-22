import { google } from 'googleapis';

const siteUrlsToTry = [
  'sc-domain:cuuhodauin.com',
  'https://cuuhodauin.com/',
  'https://www.cuuhodauin.com/',
  'http://cuuhodauin.com/',
];

export async function getTopKeywords(periodDays: number = 7) {
  let clientEmail = process.env.GA_CLIENT_EMAIL?.trim();
  let privateKey = process.env.GA_PRIVATE_KEY?.trim();

  if (clientEmail?.startsWith('"') && clientEmail.endsWith('"')) {
    clientEmail = clientEmail.slice(1, -1);
  }
  if (privateKey?.startsWith('"') && privateKey.endsWith('"')) {
    privateKey = privateKey.slice(1, -1);
  }
  if (privateKey) {
    privateKey = privateKey.replace(/\\n/g, '\n');
  }

  if (!clientEmail || !privateKey) {
    return [];
  }

  // GSC has 3 days latency
  const endDateObj = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
  const startDateObj = new Date(Date.now() - (periodDays + 3) * 24 * 60 * 60 * 1000);

  const endDate = endDateObj.toISOString().split('T')[0];
  const startDate = startDateObj.toISOString().split('T')[0];

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });

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
      } catch (e: any) {
        continue;
      }
    }

    return [];
  } catch (e: any) {
    return [];
  }
}
