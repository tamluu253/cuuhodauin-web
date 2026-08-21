"use client";

import React, { useEffect, useState } from "react";

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
              CUUHODAUIN.COM — ANALYTICS DASHBOARD
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
                className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                  period === p.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </header>

        {loading ? (
          <div className="py-20 text-center text-slate-400">Đang tải dữ liệu...</div>
        ) : error ? (
          <div className="p-6 bg-red-950/50 border border-red-800 rounded-xl text-red-300">
            <h3 className="font-bold mb-2">Không thể tải báo cáo</h3>
            <p className="text-sm">{error}</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-xs font-bold">LƯỢT TRUY CẬP</div>
                <div className="text-3xl font-black text-white mt-2">{data?.visits || 0}</div>
              </div>
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-xs font-bold">NGƯỜI DÙNG MỚI</div>
                <div className="text-3xl font-black text-green-400 mt-2">{data?.organic || 0}</div>
              </div>
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-xs font-bold">SỰ KIỆN TƯƠNG TÁC</div>
                <div className="text-3xl font-black text-orange-400 mt-2">{data?.leads || 0}</div>
              </div>
              <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-xs font-bold">CTR TRUNG BÌNH</div>
                <div className="text-3xl font-black text-blue-400 mt-2">{data?.ctr || '0%'}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
