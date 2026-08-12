export const dynamic = 'force-dynamic';
import React from 'react';
import Link from 'next/link';
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { getTopKeywords } from './gsc';

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

const propertyId = process.env.GA_PROPERTY_ID;

type PeriodType = 'day' | 'week' | 'month' | 'quarter' | 'year';

const dateRanges = {
  day: { startDate: '1daysAgo', endDate: 'today' },
  week: { startDate: '7daysAgo', endDate: 'today' },
  month: { startDate: '30daysAgo', endDate: 'today' },
  quarter: { startDate: '90daysAgo', endDate: 'today' },
  year: { startDate: '365daysAgo', endDate: 'today' },
};

async function getAnalyticsData(period: PeriodType) {
  if (!propertyId || !process.env.GA_CLIENT_EMAIL || !process.env.GA_PRIVATE_KEY) {
    return {
      visits: 'Lỗi API', organic: 'Thiếu cấu hình', leads: '-', ctr: '-',
      pages: [],
    };
  }

  const range = dateRanges[period] || dateRanges.week;

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [range],
      metrics: [
        { name: 'sessions' },
        { name: 'newUsers' }, 
        { name: 'eventCount' }, 
      ],
    });

    const rows = response.rows;
    let visits = '0', organic = '0', leads = '0', ctr = '0.0%';
    
    if (rows && rows.length > 0) {
      const metricValues = rows[0].metricValues;
      if (metricValues) {
        const totalVisits = parseInt(metricValues[0].value || '0');
        const newUsers = parseInt(metricValues[1].value || '0');
        const events = parseInt(metricValues[2].value || '0');

        visits = totalVisits.toLocaleString();
        organic = newUsers.toLocaleString(); 
        leads = events.toLocaleString(); 
        ctr = totalVisits > 0 ? ((events / totalVisits) * 100).toFixed(1) + '%' : '0.0%';
      }
    }

    const [kwResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [range],
      dimensions: [{ name: 'pageTitle' }],
      metrics: [{ name: 'sessions' }, { name: 'engagedSessions' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 10,
    });

    const pages = (kwResponse.rows || []).map((r, i) => {
      const dims = r.dimensionValues;
      const mets = r.metricValues;
      const sessionCount = parseInt(mets?.[0]?.value || '0');
      const engaged = parseInt(mets?.[1]?.value || '0');
      
      return {
        rank: i + 1,
        title: dims?.[0]?.value || 'Không xác định',
        sessions: sessionCount.toLocaleString(),
        ctr: sessionCount > 0 ? ((engaged / sessionCount) * 100).toFixed(1) + '%' : '0.0%',
        position: `Top ${i + 1}`
      };
    });

    return { visits, organic, leads, ctr, pages };

  } catch (e) {
    console.error('Lỗi khi gọi Google Analytics API:', e);
    return {
      visits: 'Lỗi', organic: 'API', leads: '-', ctr: '-',
      pages: [],
    };
  }
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function AnalyticsDashboard(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const periodStr = typeof searchParams?.period === 'string' ? searchParams.period : 'week';
  const period = ['day', 'week', 'month', 'quarter', 'year'].includes(periodStr) 
      ? (periodStr as PeriodType) 
      : 'week';
  
  const currentStats = await getAnalyticsData(period);
  const pages = currentStats.pages;
  
  const range = dateRanges[period] || dateRanges.week;
  const gscStartDate = range.startDate === 'today' ? new Date().toISOString().split('T')[0] : 
                       new Date(Date.now() - parseInt(range.startDate) * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const gscEndDate = new Date().toISOString().split('T')[0];
  
  const gscKeywords = await getTopKeywords(gscStartDate, gscEndDate);

  const getButtonStyle = (p: string) => ({
    backgroundColor: period === p ? '#f59e0b' : 'transparent',
    color: period === p ? '#0f172a' : '#94a3b8',
    padding: '8px 16px',
    borderRadius: '6px',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '13px',
    textTransform: 'uppercase' as const,
    display: 'inline-block'
  });

  return (
    <html lang="vi">
      <head>
        <title>Cứu Hộ Đầu In Analytics Dashboard - Thực tế</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </head>
      <body style={{ backgroundColor: '#0b132b', color: '#f8fafc', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
        <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #1e293b', paddingBottom: '16px' }}>
            <div>
              <span style={{ backgroundColor: '#22c55e', color: '#ffffff', fontSize: '11px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>Dữ liệu thực từ Google Analytics 4 & GSC</span>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b', margin: '8px 0 0 0' }}>CUUHODAUIN.COM &mdash; ANALYTICS DASHBOARD</h1>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0 0' }}>Báo cáo hiệu suất lượt truy cập & nội dung trang web</p>
            </div>
            
            {/* Filter controls */}
            <div style={{ display: 'flex', gap: '8px', backgroundColor: '#1e293b', padding: '4px', borderRadius: '8px' }}>
              <Link href="?period=day" style={getButtonStyle('day')}>Ngày</Link>
              <Link href="?period=week" style={getButtonStyle('week')}>Tuần</Link>
              <Link href="?period=month" style={getButtonStyle('month')}>Tháng</Link>
              <Link href="?period=quarter" style={getButtonStyle('quarter')}>Quý</Link>
              <Link href="?period=year" style={getButtonStyle('year')}>Năm</Link>
            </div>
          </div>

          {/* Cards metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>Tổng Lượt Truy Cập (Sessions)</p>
              <h2 style={{ fontSize: '28px', color: '#ffffff', margin: '8px 0 0 0' }}>{currentStats.visits}</h2>
              <span style={{ fontSize: '12px', color: '#22c55e' }}>Phiên truy cập website</span>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>Người dùng mới (New Users)</p>
              <h2 style={{ fontSize: '28px', color: '#f59e0b', margin: '8px 0 0 0' }}>{currentStats.organic}</h2>
              <span style={{ fontSize: '12px', color: '#22c55e' }}>Chỉ số thu hút KH mới</span>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>Tổng tương tác (Event Count)</p>
              <h2 style={{ fontSize: '28px', color: '#10b981', margin: '8px 0 0 0' }}>{currentStats.leads}</h2>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Click, Cuộn trang, Bấm gọi</span>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>Tỉ lệ tương tác (Tương đối)</p>
              <h2 style={{ fontSize: '28px', color: '#8b5cf6', margin: '8px 0 0 0' }}>{currentStats.ctr}</h2>
              <span style={{ fontSize: '12px', color: '#8b5cf6' }}>Engaged / Total Sessions</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            {/* Top Pages Table */}
            <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '18px', color: '#f59e0b', margin: '0 0 16px 0' }}>🏆 Top Nội Dung Thu Hút Nhất</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8' }}>
                      <th style={{ padding: '12px', width: '80px' }}>Vị Trí</th>
                      <th style={{ padding: '12px' }}>Tiêu đề trang (Page Title)</th>
                      <th style={{ padding: '12px', width: '100px' }}>Số Phiên</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.length > 0 ? pages.map((page: any) => (
                      <tr key={page.rank} style={{ borderBottom: '1px solid #334155' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>
                          <span style={{ backgroundColor: page.rank <= 3 ? '#f59e0b' : '#475569', color: '#0f172a', padding: '2px 8px', borderRadius: '4px' }}>{page.position}</span>
                        </td>
                        <td style={{ padding: '12px', color: '#ffffff', fontWeight: 'bold' }}>{page.title}</td>
                        <td style={{ padding: '12px', color: '#cbd5e1' }}>{page.sessions}</td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={3} style={{ padding: '24px', textAlign: 'center', color: '#64748b' }}>
                          Chưa có dữ liệu từ Google Analytics
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Keywords Table */}
            <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '18px', color: '#3b82f6', margin: '0 0 16px 0' }}>🔍 Top Từ Khóa Tìm Kiếm (GSC)</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8' }}>
                      <th style={{ padding: '12px', width: '80px' }}>Vị Trí</th>
                      <th style={{ padding: '12px' }}>Từ khóa (Query)</th>
                      <th style={{ padding: '12px', width: '100px' }}>Lượt nhấp</th>
                      <th style={{ padding: '12px', width: '100px' }}>Hiển thị</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gscKeywords.length > 0 ? gscKeywords.map((kw: any) => (
                      <tr key={kw.rank} style={{ borderBottom: '1px solid #334155' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>
                          <span style={{ backgroundColor: kw.rank <= 3 ? '#3b82f6' : '#475569', color: '#ffffff', padding: '2px 8px', borderRadius: '4px' }}>Top {kw.rank}</span>
                        </td>
                        <td style={{ padding: '12px', color: '#ffffff', fontWeight: 'bold' }}>{kw.query}</td>
                        <td style={{ padding: '12px', color: '#22c55e', fontWeight: 'bold' }}>{kw.clicks}</td>
                        <td style={{ padding: '12px', color: '#cbd5e1' }}>{kw.impressions}</td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: '#64748b' }}>
                          Chưa có dữ liệu Từ khóa từ Google Search Console (hoặc thiếu quyền)
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
