export const dynamic = 'force-dynamic';
import React from 'react';
import Link from 'next/link';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

// KhÃ¡Â»Å¸i tÃ¡ÂºÂ¡o Google Analytics Client trÃƒÂªn Server an toÃƒÂ n
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
      visits: 'LÃ¡Â»â€”i API', organic: 'ThiÃ¡ÂºÂ¿u cÃ¡ÂºÂ¥u hÃƒÂ¬nh', leads: '-', ctr: '-',
      keywords: [],
    };
  }

  const range = dateRanges[period] || dateRanges.week;

  try {
    // 1. Fetch cÃƒÂ¡c chÃ¡Â»â€° sÃ¡Â»â€˜ tÃ¡Â»â€¢ng quan (Sessions, New Users, Event Count)
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

    // 2. Fetch danh sÃƒÂ¡ch Trang Ã„â€˜Ã†Â°Ã¡Â»Â£c xem nhiÃ¡Â»Âu nhÃ¡ÂºÂ¥t (hoÃ¡ÂºÂ·c tÃ¡Â»Â« khÃƒÂ³a nÃ¡ÂºÂ¿u cÃƒÂ³ cÃ¡ÂºÂ¥u hÃƒÂ¬nh GSC)
    // TÃ¡ÂºÂ¡m dÃƒÂ¹ng Page Title lÃƒÂ m dimension hiÃ¡Â»Æ’n thÃ¡Â»â€¹ do GA4 khÃƒÂ´ng cÃƒÂ³ Keyword gÃ¡Â»â€˜c
    const [kwResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [range],
      dimensions: [{ name: 'pageTitle' }],
      metrics: [{ name: 'sessions' }, { name: 'engagedSessions' }],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 10, // LÃ¡ÂºÂ¥y top 10 trang
    });

    const keywords = (kwResponse.rows || []).map((r, i) => {
      const dims = r.dimensionValues;
      const mets = r.metricValues;
      const sessionCount = parseInt(mets?.[0]?.value || '0');
      const engaged = parseInt(mets?.[1]?.value || '0');
      
      return {
        rank: i + 1,
        term: dims?.[0]?.value || 'KhÃƒÂ´ng xÃƒÂ¡c Ã„â€˜Ã¡Â»â€¹nh',
        searches: sessionCount.toLocaleString(),
        ctr: sessionCount > 0 ? ((engaged / sessionCount) * 100).toFixed(1) + '%' : '0.0%',
        engine: 'HÃ¡Â»â€¡ thÃ¡Â»â€˜ng website',
        position: `Top ${i + 1}`
      };
    });

    return { visits, organic, leads, ctr, keywords };

  } catch (e) {
    console.error('LÃ¡Â»â€”i khi gÃ¡Â»Âi Google Analytics API:', e);
    return {
      visits: 'LÃ¡Â»â€”i', organic: 'API', leads: '-', ctr: '-',
      keywords: [],
    };
  }
}

// BÃ¡ÂºÂ¥t Ã„â€˜Ã¡Â»â€œng bÃ¡Â»â„¢ tham sÃ¡Â»â€˜ URL (dÃƒÂ nh cho Next.js version 15+)
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function HiddenAnalyticsDashboard(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const periodStr = typeof searchParams?.period === 'string' ? searchParams.period : 'week';
  const period = ['day', 'week', 'month', 'quarter', 'year'].includes(periodStr) 
      ? (periodStr as PeriodType) 
      : 'week';
  
  const currentStats = await getAnalyticsData(period);
  const keywords = currentStats.keywords;

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
        <title>Cá»©u Há»™ Äáº§u In Analytics Dashboard - ThÃ¡Â»Â±c tÃ¡ÂºÂ¿</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </head>
      <body style={{ backgroundColor: '#0b132b', color: '#f8fafc', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
        <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #1e293b', paddingBottom: '16px' }}>
            <div>
              <span style={{ backgroundColor: '#22c55e', color: '#ffffff', fontSize: '11px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>DÃ¡Â»Â¯ liÃ¡Â»â€¡u thÃ¡Â»Â±c tÃ¡Â»Â« Google Analytics 4</span>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b', margin: '8px 0 0 0' }}>CUUHODAUIN.COM &mdash; ANALYTICS DASHBOARD</h1>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0 0' }}>BÃƒÂ¡o cÃƒÂ¡o hiÃ¡Â»â€¡u suÃ¡ÂºÂ¥t lÃ†Â°Ã¡Â»Â£t truy cÃ¡ÂºÂ­p & nÃ¡Â»â„¢i dung trang web (MÃƒÂ£ GA4: {propertyId || 'Ã„Âang chÃ¡Â»Â cÃ¡ÂºÂ¥u hÃƒÂ¬nh'})</p>
            </div>
            
            {/* Filter controls */}
            <div style={{ display: 'flex', gap: '8px', backgroundColor: '#1e293b', padding: '4px', borderRadius: '8px' }}>
              <Link href="?period=day" style={getButtonStyle('day')}>NgÃƒÂ y</Link>
              <Link href="?period=week" style={getButtonStyle('week')}>TuÃ¡ÂºÂ§n</Link>
              <Link href="?period=month" style={getButtonStyle('month')}>ThÃƒÂ¡ng</Link>
              <Link href="?period=quarter" style={getButtonStyle('quarter')}>QuÃƒÂ½</Link>
              <Link href="?period=year" style={getButtonStyle('year')}>NÃ„Æ’m</Link>
            </div>
          </div>

          {/* Cards metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>TÃ¡Â»â€¢ng LÃ†Â°Ã¡Â»Â£t Truy CÃ¡ÂºÂ­p (Sessions)</p>
              <h2 style={{ fontSize: '28px', color: '#ffffff', margin: '8px 0 0 0' }}>{currentStats.visits}</h2>
              <span style={{ fontSize: '12px', color: '#22c55e' }}>PhiÃƒÂªn truy cÃ¡ÂºÂ­p website</span>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>NgÃ†Â°Ã¡Â»Âi dÃƒÂ¹ng mÃ¡Â»â€ºi (New Users)</p>
              <h2 style={{ fontSize: '28px', color: '#f59e0b', margin: '8px 0 0 0' }}>{currentStats.organic}</h2>
              <span style={{ fontSize: '12px', color: '#22c55e' }}>ChÃ¡Â»â€° sÃ¡Â»â€˜ thu hÃƒÂºt KH mÃ¡Â»â€ºi</span>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>TÃ¡Â»â€¢ng tÃ†Â°Ã†Â¡ng tÃƒÂ¡c (Event Count)</p>
              <h2 style={{ fontSize: '28px', color: '#10b981', margin: '8px 0 0 0' }}>{currentStats.leads}</h2>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Click, CuÃ¡Â»â„¢n trang, BÃ¡ÂºÂ¥m gÃ¡Â»Âi</span>
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>TÃ¡Â»â€° lÃ¡Â»â€¡ tÃ†Â°Ã†Â¡ng tÃƒÂ¡c (TÃ†Â°Ã†Â¡ng Ã„â€˜Ã¡Â»â€˜i)</p>
              <h2 style={{ fontSize: '28px', color: '#8b5cf6', margin: '8px 0 0 0' }}>{currentStats.ctr}</h2>
              <span style={{ fontSize: '12px', color: '#8b5cf6' }}>Engaged / Total Sessions</span>
            </div>
          </div>

          {/* Top Pages Table */}
          <div style={{ backgroundColor: '#1e293b', padding: '24px', borderRadius: '12px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', color: '#f59e0b', margin: '0 0 16px 0' }}>Ã°Å¸Ââ€  Top NÃ¡Â»â„¢i Dung Thu HÃƒÂºt NhÃ¡ÂºÂ¥t ({period.toUpperCase()})</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8' }}>
                  <th style={{ padding: '12px', width: '80px' }}>VÃ¡Â»â€¹ TrÃƒÂ­</th>
                  <th style={{ padding: '12px' }}>TiÃƒÂªu Ã„â€˜Ã¡Â»Â trang (Page Title)</th>
                  <th style={{ padding: '12px', width: '150px' }}>SÃ¡Â»â€˜ PhiÃƒÂªn (Sessions)</th>
                  <th style={{ padding: '12px', width: '150px' }}>TÃ¡Â»â€° lÃ¡Â»â€¡ tÃ†Â°Ã†Â¡ng tÃƒÂ¡c</th>
                </tr>
              </thead>
              <tbody>
                {keywords.length > 0 ? keywords.map((kw) => (
                  <tr key={kw.rank} style={{ borderBottom: '1px solid #334155' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>
                      <span style={{ backgroundColor: kw.rank <= 3 ? '#f59e0b' : '#475569', color: '#0f172a', padding: '2px 8px', borderRadius: '4px' }}>{kw.position}</span>
                    </td>
                    <td style={{ padding: '12px', color: '#ffffff', fontWeight: 'bold' }}>{kw.term}</td>
                    <td style={{ padding: '12px', color: '#cbd5e1' }}>{kw.searches}</td>
                    <td style={{ padding: '12px', color: '#22c55e', fontWeight: 'bold' }}>{kw.ctr}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: '#64748b' }}>
                      ChÃ†Â°a cÃƒÂ³ dÃ¡Â»Â¯ liÃ¡Â»â€¡u tÃ¡Â»Â« Google Analytics trong thÃ¡Â»Âi gian nÃƒÂ y
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div style={{ textAlign: 'center', fontSize: '12px', color: '#64748b', marginTop: '32px' }}>
            <p>Ã°Å¸â€â€™ BÃƒÂ¡o cÃƒÂ¡o dÃ¡Â»Â¯ liÃ¡Â»â€¡u tÃ„Â©nh Ã„â€˜ÃƒÂ£ Ã„â€˜Ã†Â°Ã¡Â»Â£c chuyÃ¡Â»Æ’n sang **DÃ¡Â»Â¯ liÃ¡Â»â€¡u Ã„ÂÃ¡Â»â„¢ng lÃ¡ÂºÂ¥y trÃ¡Â»Â±c tiÃ¡ÂºÂ¿p tÃ¡Â»Â« Google Analytics API**.</p>
            <p>&copy; {new Date().getFullYear()} CÃƒÂ´ng ty TNHH VNPIS &mdash; MST: 0318266611</p>
          </div>
        </div>
      </body>
    </html>
  );
}
