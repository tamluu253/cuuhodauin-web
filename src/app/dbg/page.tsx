"use client";

import React, { useEffect, useState } from "react";

export default function AnalyticsDashboard() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [period, setPeriod] = useState("week");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/analytics?period=${period}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error ${res.status}: không thể lấy dữ liệu API.`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setData(data);
          setError(null);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [period]);

  const getSmartInsight = (clicks: number, impressions: number, posStr: string) => {
    const pos = parseFloat(posStr) || 99;
    if (pos <= 3 && clicks > 0) return { label: '🔥 Đang Giữ Top 1-3', bg: '#15803d', color: '#ffffff' };
    if (impressions > 0 && clicks === 0) return { label: '💡 Cần Đổi Meta Title', bg: '#b45309', color: '#ffffff' };
    if (pos > 3 && pos <= 10) return { label: '🚀 Đang Cận Top 1-3', bg: '#1d4ed8', color: '#ffffff' };
    return { label: '📈 Đang Tăng Hạng', bg: '#475569', color: '#ffffff' };
  };

  const totalGscClicks = (data?.topKeywords || []).reduce((acc: number, k: any) => acc + (k.clicks || 0), 0);
  const totalGscImpressions = (data?.topKeywords || []).reduce((acc: number, k: any) => acc + (k.impressions || 0), 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase border border-emerald-500/30">
              Dữ liệu thực từ Google Analytics 4 &amp; GSC
            </div>
            <h1 className="text-3xl font-extrabold text-amber-400">
              CUUHODAUIN.COM — ANALYTICS DASHBOARD
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Báo cáo hiệu suất lượt truy cập, top bài viết &amp; thứ hạng từ khóa Google
            </p>
          </div>

          <div className="flex bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {[
              { id: "day", label: "NGÀY" },
              { id: "week", label: "TUẦN" },
              { id: "month", label: "THÁNG" },
              { id: "quarter", label: "QUÝ" },
              { id: "year", label: "NĂM" },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setPeriod(p.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  period === p.id
                    ? "bg-amber-500 text-slate-950 shadow-lg font-extrabold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </header>

        {loading ? (
          <div className="py-24 text-center text-slate-400 text-base font-semibold">Đang đồng bộ dữ liệu từ Google Analytics &amp; Search Console...</div>
        ) : error ? (
          <div className="p-6 bg-rose-950/40 border border-rose-800/80 rounded-2xl text-rose-300">
            <h3 className="font-bold text-lg mb-2">Không thể tải báo cáo</h3>
            <p className="text-sm">{error}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 5 KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 border-l-4 border-l-blue-500">
                <div className="text-slate-400 text-xs font-extrabold uppercase">Lượt Truy Cập</div>
                <div className="text-2xl font-black text-white mt-1.5">{data?.sessions || 0}</div>
                <div className="text-[11px] text-emerald-400 mt-1">Phiên thực tế trên web</div>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 border-l-4 border-l-amber-500">
                <div className="text-slate-400 text-xs font-extrabold uppercase">Người Dùng Mới</div>
                <div className="text-2xl font-black text-amber-400 mt-1.5">{data?.newUsers || 0}</div>
                <div className="text-[11px] text-emerald-400 mt-1">Khách hàng mới tiềm năng</div>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 border-l-4 border-l-emerald-500">
                <div className="text-slate-400 text-xs font-extrabold uppercase">Tương Tác Events</div>
                <div className="text-2xl font-black text-emerald-400 mt-1.5">{data?.eventCount || 0}</div>
                <div className="text-[11px] text-slate-400 mt-1">Click gọi / Cuộn trang</div>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 border-l-4 border-l-purple-500">
                <div className="text-slate-400 text-xs font-extrabold uppercase">Nhấp GSC (Clicks)</div>
                <div className="text-2xl font-black text-purple-400 mt-1.5">{totalGscClicks}</div>
                <div className="text-[11px] text-purple-400 mt-1">Lượt click từ Google</div>
              </div>

              <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 border-l-4 border-l-pink-500">
                <div className="text-slate-400 text-xs font-extrabold uppercase">Hiển Thị GSC</div>
                <div className="text-2xl font-black text-pink-400 mt-1.5">{totalGscImpressions}</div>
                <div className="text-[11px] text-pink-400 mt-1">Lượt hiển thị kết quả</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Pages Table */}
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-amber-400 mb-5 flex items-center">
                  🏆 Top Nội Dung Thu Hút Nhất (GA4)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase">
                        <th className="pb-3 width-16">Hạng</th>
                        <th className="pb-3">Tiêu đề trang</th>
                        <th className="pb-3 text-right">Lượt Xem</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {data?.topPages && data.topPages.length > 0 ? (
                        data.topPages.map((page: any, idx: number) => (
                          <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-3 font-bold">
                              <span className={`px-2 py-1 rounded text-xs ${idx < 3 ? 'bg-amber-500 text-slate-950 font-extrabold' : 'bg-slate-800 text-slate-300'}`}>
                                Top {idx + 1}
                              </span>
                            </td>
                            <td className="py-3 font-semibold text-white">{page.title}</td>
                            <td className="py-3 text-right font-bold text-slate-200">{page.views}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="py-8 text-center text-slate-500">Chưa có dữ liệu từ Google Analytics</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Top Keywords Table */}
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-lg font-bold text-blue-400">
                    🔍 Top Từ Khóa Tìm Kiếm (GSC Full Metrics)
                  </h3>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
                    Top {data?.topKeywords?.length || 0} từ khóa
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-300">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase">
                        <th className="pb-3">Hạng GG</th>
                        <th className="pb-3">Từ khóa (Query)</th>
                        <th className="pb-3 text-center">Nhấp</th>
                        <th className="pb-3 text-center">Hiển thị</th>
                        <th className="pb-3 text-center">CTR</th>
                        <th className="pb-3 text-right">Chiến lược SEO</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {data?.topKeywords && data.topKeywords.length > 0 ? (
                        data.topKeywords.map((kw: any) => {
                          const insight = getSmartInsight(kw.clicks, kw.impressions, kw.position || String(kw.rank));
                          return (
                            <tr key={kw.rank} className="hover:bg-slate-800/40 transition-colors">
                              <td className="py-3 font-bold">
                                <span className={`px-2 py-1 rounded text-xs ${kw.rank <= 3 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}>
                                  Top {kw.position || kw.rank}
                                </span>
                              </td>
                              <td className="py-3 font-semibold text-white">{kw.query}</td>
                              <td className="py-3 text-center font-bold text-emerald-400">{kw.clicks}</td>
                              <td className="py-3 text-center text-slate-300">{kw.impressions}</td>
                              <td className="py-3 text-center text-amber-400 font-semibold">{kw.ctr || '0%'}</td>
                              <td className="py-3 text-right">
                                <span 
                                  style={{ backgroundColor: insight.bg, color: insight.color }} 
                                  className="px-2 py-1 rounded text-[10px] font-extrabold inline-block"
                                >
                                  {insight.label}
                                </span>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-slate-500">
                            Chưa có dữ liệu từ khóa Google Search Console
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
