const { BetaAnalyticsDataClient } = require('@google-analytics/data');

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

    let startDate = 'today';
    let endDate = 'today';

    switch (period) {
      case 'week':
        startDate = '7daysAgo';
        break;
      case 'month':
        startDate = '30daysAgo';
        break;
      case 'quarter':
        startDate = '90daysAgo';
        break;
      case 'year':
        startDate = '365daysAgo';
        break;
      case 'day':
      default:
        startDate = 'today';
        break;
    }

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate,
          endDate,
        },
      ],
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

    return res.status(200).json({
      sessions,
      newUsers,
      eventCount,
      topPages: topPages.slice(0, 5)
    });
  } catch (error) {
    console.error('Analytics Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
