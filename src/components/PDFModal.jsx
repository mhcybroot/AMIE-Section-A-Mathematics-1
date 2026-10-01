import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

export default function PDFModal({ problem, isOpen, onClose }) {
  if (!isOpen || !problem) return null;

  const pdfUrl = problem.pdfPath;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="p-3 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <span>{problem.id} — 2-Page Print PDF</span>
                <span className="text-xs px-2 py-0.5 bg-slate-800 text-slate-400 rounded-md font-mono">
                  {problem.pageRange}
                </span>
              </h3>
              <p className="text-xs text-slate-400 truncate">{problem.chapterTitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Link */}
            <a
              href={pdfUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium shadow-md shadow-violet-600/30 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            {/* Open in New Tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              title="Open in new window"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embedded Frame */}
        <div className="flex-1 bg-slate-950 relative">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            title={`PDF Solution for ${problem.id}`}
            className="w-full h-full border-0"
          />
        </div>

      </div>
    </div>
  );
}
