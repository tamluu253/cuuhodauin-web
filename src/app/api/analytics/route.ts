export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { NextResponse } from 'next/server';
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { getTopKeywords } from '@/app/dbg/gsc';

const propertyId = '549458447'; // GA4 Property ID chuẩn từ Screenshot cho cuuhodauin.com (Ghi đè ID cũ 549663166 trên Vercel)

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || 'day';

  // Calculate date ranges
  const endDate = 'today';
  let startDate = '7daysAgo';

  if (period === 'day') {
    startDate = 'today';
  } else if (period === 'week') {
    startDate = '7daysAgo';
  } else if (period === 'month') {
    startDate = '30daysAgo';
  } else if (period === 'quarter') {
    startDate = '90daysAgo';
  } else if (period === 'year') {
    startDate = '365daysAgo';
  }

  // Check if GA credentials exist
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
    return NextResponse.json({
      sessions: 0,
      newUsers: 0,
      eventCount: 0,
      topPages: [],
      topKeywords: [],
      error: 'Vui lòng bổ sung GA_CLIENT_EMAIL và GA_PRIVATE_KEY trong Vercel Environment Variables để xem dữ liệu tự động.',
    });
  }

  try {
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
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

    const topPages = pagesResponse.rows
      ?.map((row) => ({
        title: row.dimensionValues?.[0]?.value || 'Trang chưa đặt tên',
        views: parseInt(row.metricValues?.[0]?.value || '0', 10),
      }))
      .filter((page) => !page.title.includes('INANVNPIS') && !page.title.includes('VNPIS Solutions')) || [];

    const periodDaysMap: Record<string, number> = {
      day: 1,
      week: 7,
      month: 30,
      quarter: 90,
      year: 365,
    };
    const periodDays = periodDaysMap[period] || 7;

    // Fetch Search Console Top Keywords
    const topKeywords = await getTopKeywords(periodDays);

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
