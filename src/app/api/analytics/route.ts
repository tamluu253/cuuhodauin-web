export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { NextResponse } from 'next/server';
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { getTopKeywords } from '@/app/dbg/gsc';

const propertyId = '549663166'; // Explicit GA4 Property ID for cuuhodauin.com

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || 'day';

  // Calculate date ranges
  const endDate = 'today';
  let startDate = '7daysAgo';
  let gscStartDate = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
  const gscEndDate = new Date().toISOString().split('T')[0];

  if (period === 'day') {
    startDate = 'today';
    gscStartDate = gscEndDate;
  } else if (period === 'week') {
    startDate = '7daysAgo';
    gscStartDate = new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0];
  } else if (period === 'month') {
    startDate = '30daysAgo';
    gscStartDate = new Date(Date.now() - 30 * 86400000).toISOString().split('T')[0];
  } else if (period === 'quarter') {
    startDate = '90daysAgo';
    gscStartDate = new Date(Date.now() - 90 * 86400000).toISOString().split('T')[0];
  } else if (period === 'year') {
    startDate = '365daysAgo';
    gscStartDate = new Date(Date.now() - 365 * 86400000).toISOString().split('T')[0];
  }

  // Check if GA credentials exist
  if (!process.env.GA_CLIENT_EMAIL || !process.env.GA_PRIVATE_KEY) {
    return NextResponse.json({
      sessions: 0,
      newUsers: 0,
      eventCount: 0,
      topPages: [],
      topKeywords: [],
      note: 'Vui lòng bổ sung GA_CLIENT_EMAIL và GA_PRIVATE_KEY trong Vercel Environment Variables để xem dữ liệu kết nối API tự động.',
    });
  }

  try {
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: process.env.GA_CLIENT_EMAIL,
        private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
    });

    // Run report for overview metrics
    const [overviewResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      metrics: [
        { name: 'sessions' },
        { name: 'newUsers' },
        { name: 'eventCount' },
      ],
    });

    // Run report for top pages
    const [pagesResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'pageTitle' }],
      metrics: [{ name: 'screenPageViews' }],
      limit: 5,
    });

    const sessions = parseInt(overviewResponse.rows?.[0]?.metricValues?.[0]?.value || '0', 10);
    const newUsers = parseInt(overviewResponse.rows?.[0]?.metricValues?.[1]?.value || '0', 10);
    const eventCount = parseInt(overviewResponse.rows?.[0]?.metricValues?.[2]?.value || '0', 10);

    const topPages = pagesResponse.rows?.map((row) => ({
      title: row.dimensionValues?.[0]?.value || 'Trang chưa đặt tên',
      views: parseInt(row.metricValues?.[0]?.value || '0', 10),
    })) || [];

    // Fetch Search Console Top Keywords
    const topKeywords = await getTopKeywords(gscStartDate, gscEndDate);

    return NextResponse.json({
      sessions,
      newUsers,
      eventCount,
      topPages,
      topKeywords,
    });
  } catch (err: any) {
    console.error('Analytics API Error:', err);
    return NextResponse.json({
      sessions: 0,
      newUsers: 0,
      eventCount: 0,
      topPages: [],
      topKeywords: [],
      error: err.message,
    });
  }
}
