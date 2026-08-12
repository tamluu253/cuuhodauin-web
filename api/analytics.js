const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const { google } = require('googleapis');

export default async function handler(req, res) {
  try {
    const { period = 'day' } = req.query;

    const propertyId = process.env.GA_PROPERTY_ID;
    const clientEmail = process.env.GA_CLIENT_EMAIL;
    let privateKey = process.env.GA_PRIVATE_KEY || '';
    privateKey = privateKey.replace(/\\n/g, '\n');

    if (!propertyId || !clientEmail || !privateKey) {
      return res.status(500).json({ error: 'Missing Analytics configuration' });
    }

    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
    });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });
    const searchconsole = google.searchconsole({ version: 'v1', auth });

    let startDate = 'today';
    let endDate = 'today';
    let gscStartDate = new Date().toISOString().split('T')[0];

    switch (period) {
      case 'week':
        startDate = '7daysAgo';
        gscStartDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        break;
      case 'month':
        startDate = '30daysAgo';
        gscStartDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        break;
      case 'quarter':
        startDate = '90daysAgo';
        gscStartDate = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        break;
      case 'year':
        startDate = '365daysAgo';
        gscStartDate = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        break;
      case 'day':
      default:
        startDate = 'today';
        gscStartDate = new Date().toISOString().split('T')[0];
        break;
    }
    const gscEndDate = new Date().toISOString().split('T')[0];

    // 1. Fetch GA4 Data
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      metrics: [
        { name: 'sessions' },
        { name: 'newUsers' },
        { name: 'eventCount' },
      ],
      dimensions: [
        { name: 'pageTitle' },
        { name: 'pagePath' }
      ],
    });

    let sessions = 0;
    let newUsers = 0;
    let eventCount = 0;
    const topPages = [];

    if (response.rows && response.rows.length > 0) {
      response.rows.forEach(row => {
        const title = row.dimensionValues[0].value;
        const path = row.dimensionValues[1].value;
        const s = parseInt(row.metricValues[0].value, 10);
        const u = parseInt(row.metricValues[1].value, 10);
        const e = parseInt(row.metricValues[2].value, 10);

        sessions += s;
        newUsers += u;
        eventCount += e;

        if (path !== '/' && path !== '/dbg') {
          topPages.push({ path, title, views: s });
        }
      });
    }

    topPages.sort((a, b) => b.views - a.views);

    // 2. Fetch GSC Data
    let topKeywords = [];
    const siteUrlsToTry = [
      'sc-domain:cuuhodauin.com',
      'https://cuuhodauin.com/',
      'https://www.cuuhodauin.com/',
    ];

    for (const siteUrl of siteUrlsToTry) {
      try {
        const gscRes = await searchconsole.searchanalytics.query({
          siteUrl,
          requestBody: {
            startDate: gscStartDate,
            endDate: gscEndDate,
            dimensions: ['query'],
            rowLimit: 10,
          },
        });
        if (gscRes.data.rows && gscRes.data.rows.length > 0) {
          topKeywords = gscRes.data.rows.map((r, i) => ({
            rank: i + 1,
            query: r.keys?.[0] || 'Unknown',
            clicks: r.clicks || 0,
            impressions: r.impressions || 0,
          }));
          break; // Stop trying if successful
        }
      } catch (e) {
        if (e.code === 403) continue;
        console.error(`GSC Error for ${siteUrl}:`, e.message);
      }
    }

    return res.status(200).json({
      sessions,
      newUsers,
      eventCount,
      topPages: topPages.slice(0, 5),
      topKeywords,
    });
  } catch (error) {
    console.error('Analytics Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
