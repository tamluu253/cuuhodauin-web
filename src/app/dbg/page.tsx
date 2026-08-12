"use client";

import { useEffect, useState } from "react";

export default function AnalyticsDashboard() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [period, setPeriod] = useState("day");
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

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded mb-2">
              DỮ LIỆU THỰC TỪ GOOGLE ANALYTICS 4 & GSC
            </div>
            <h1 className="text-3xl font-bold text-orange-400">
              CUUHODAUIN.COM &mdash; ANALYTICS DASHBOARD
            </h1>
            <p className="text-slate-400 mt-1">
              Báo cáo hiệu suất lượt truy cập & nội dung trang web
            </p>
          </div>

          <div className="flex bg-slate-800 p-1 rounded-lg">
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
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  period === p.id
                    ? "bg-amber-500 text-slate-900"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </header>

        {loading ? (
          <div className="text-center py-20 text-slate-400">Đang tải dữ liệu thực tế từ Google Analytics...</div>
        ) : error ? (
          <div className="bg-red-500/20 border border-red-500 text-red-200 p-6 rounded-xl">
            <h2 className="text-lg font-bold mb-2">Lỗi kết nối / Thiếu cấu hình</h2>
            <p>{error}</p>
          </div>
        ) : data ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800 border border-slate-700/50 p-6 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <h3 className="text-slate-400 text-sm font-medium">TỔNG LƯỢT TRUY CẬP (SESSIONS)</h3>
                <div className="text-4xl font-bold text-white mt-2">{data.sessions}</div>
              </div>
              <div className="bg-slate-800 border border-slate-700/50 p-6 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                <h3 className="text-slate-400 text-sm font-medium">NGƯỜI DÙNG MỚI (NEW USERS)</h3>
                <div className="text-4xl font-bold text-amber-500 mt-2">{data.newUsers}</div>
              </div>
              <div className="bg-slate-800 border border-slate-700/50 p-6 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                <h3 className="text-slate-400 text-sm font-medium">TỔNG TƯƠNG TÁC (EVENT COUNT)</h3>
                <div className="text-4xl font-bold text-emerald-400 mt-2">{data.eventCount}</div>
              </div>
              <div className="bg-slate-800 border border-slate-700/50 p-6 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                <h3 className="text-slate-400 text-sm font-medium">TỈ LỆ TƯƠNG TÁC (TƯƠNG ĐỐI)</h3>
                <div className="text-4xl font-bold text-purple-400 mt-2">
                  {data.sessions > 0 ? ((data.eventCount / data.sessions) * 100).toFixed(1) : 0}%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-800 border border-slate-700/50 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-amber-500 mb-6 flex items-center gap-2">
                  🏆 Top Nội Dung Thu Hút Nhất
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-700 text-slate-400 text-sm">
                        <th className="pb-4 px-4 font-medium">Vị Trí</th>
                        <th className="pb-4 px-4 font-medium">Tiêu đề trang (Page Title)</th>
                        <th className="pb-4 px-4 font-medium text-center">Số Phiên (Sessions)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                      {data.topPages?.map((page: any, i: number) => (
                        <tr key={i} className="hover:bg-slate-700/20 transition-colors">
                          <td className="py-4 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                              i === 0 ? "bg-amber-500 text-slate-900" :
                              i === 1 ? "bg-slate-300 text-slate-900" :
                              i === 2 ? "bg-amber-700 text-white" :
                              "bg-slate-700 text-slate-300"
                            }`}>Top {i + 1}</span>
                          </td>
                          <td className="py-4 px-4 font-medium text-slate-200">{page.title}</td>
                          <td className="py-4 px-4 text-center font-bold text-white">{page.views}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700/50 rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-blue-500 mb-6 flex items-center gap-2">
                  🔍 Top Từ Khóa Tìm Kiếm (GSC)
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-700 text-slate-400 text-sm">
                        <th className="pb-4 px-4 font-medium">Vị Trí</th>
                        <th className="pb-4 px-4 font-medium">Từ khóa (Query)</th>
                        <th className="pb-4 px-4 font-medium text-center">Lượt nhấp</th>
                        <th className="pb-4 px-4 font-medium text-center">Hiển thị</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                      {data.topKeywords && data.topKeywords.length > 0 ? data.topKeywords.map((kw: any, i: number) => (
                        <tr key={i} className="hover:bg-slate-700/20 transition-colors">
                          <td className="py-4 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                              i <= 2 ? "bg-blue-500 text-white" : "bg-slate-700 text-slate-300"
                            }`}>Top {kw.rank}</span>
                          </td>
                          <td className="py-4 px-4 font-medium text-slate-200">{kw.query}</td>
                          <td className="py-4 px-4 text-center font-bold text-green-400">{kw.clicks}</td>
                          <td className="py-4 px-4 text-center text-slate-400">{kw.impressions}</td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={4} className="py-8 text-center text-slate-500">
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
        ) : null}
      </div>
    </div>
  );
}
