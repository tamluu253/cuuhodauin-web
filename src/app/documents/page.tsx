'use client';

import React, { useState } from 'react';
import { FileText, Download, ShieldCheck, FileCheck, CheckCircle } from 'lucide-react';
import GatedDownloadModal from '@/components/documents/GatedDownloadModal';

const documents = [
  {
    id: 'rohs-t113',
    title: 'Báo Cáo RoHS Mực Đen T113',
    desc: 'Chứng nhận đạt tiêu chuẩn RoHS (Hạn chế chất độc hại) cho dòng mực đen T113.',
    type: 'PDF / RoHS Report',
    size: '940 KB',
    fileUrl: '/media/documents/VNPIS-T113-Black-Ink-RoHS-Report.pdf',
    fileName: 'VNPIS-T113-Black-Ink-RoHS-Report.pdf'
  },
  {
    id: 'halogen-t113',
    title: 'Báo Cáo Halogen Mực Đen T113',
    desc: 'Chứng nhận đạt chuẩn Halogen-Free cho dòng mực đen công nghiệp T113.',
    type: 'PDF / Halogen Report',
    size: '924 KB',
    fileUrl: '/media/documents/VNPIS-T113-Black-Ink-Halogen-Report.pdf',
    fileName: 'VNPIS-T113-Black-Ink-Halogen-Report.pdf'
  },
  {
    id: 'rohs-sv1',
    title: 'Báo Cáo RoHS Dung Môi SV-1 & CL-1',
    desc: 'Chứng nhận RoHS cho dung môi pha loãng (Solvent) và dung dịch rửa (Cleaning Agent).',
    type: 'PDF / RoHS Report',
    size: '850 KB',
    fileUrl: '/media/documents/VNPIS-SV1-Solvent-RoHS-Report.pdf',
    fileName: 'VNPIS-SV1-Solvent-RoHS-Report.pdf'
  },
  {
    id: 'halogen-sv1',
    title: 'Báo Cáo Halogen Dung Môi SV-1 & CL-1',
    desc: 'Chứng nhận Halogen-Free cho dung môi pha loãng và dung dịch rửa.',
    type: 'PDF / Halogen Report',
    size: '835 KB',
    fileUrl: '/media/documents/VNPIS-SV1-Solvent-Halogen-Report.pdf',
    fileName: 'VNPIS-SV1-Solvent-Halogen-Report.pdf'
  }
];

export default function DocumentsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{fileName: string, fileUrl: string} | null>(null);

  const handleDownloadClick = (fileName: string, fileUrl: string) => {
    setSelectedDoc({ fileName, fileUrl });
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-semibold">
            <ShieldCheck className="w-5 h-5" />
            <span>Trung Tâm Tài Liệu</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Tài Liệu Kỹ Thuật & Chứng Nhận</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Khám phá và tải xuống các báo cáo thử nghiệm, chứng nhận quốc tế (RoHS, Halogen-Free), và Bảng dữ liệu an toàn vật liệu (MSDS) của các dòng mực in VNPIS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div key={doc.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{doc.type}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{doc.title}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{doc.desc}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                <span className="text-sm font-medium text-slate-500">{doc.size}</span>
                <button 
                  onClick={() => handleDownloadClick(doc.fileName, doc.fileUrl)}
                  className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Download className="w-4 h-4 mr-1.5" /> Tải Xuống
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {selectedDoc && (
        <GatedDownloadModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          fileName={selectedDoc.fileName}
          fileUrl={selectedDoc.fileUrl}
        />
      )}
    </main>
  );
}
