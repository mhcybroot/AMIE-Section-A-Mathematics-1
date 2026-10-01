import React, { useState } from 'react';
import { X, Search, Sigma, Copy, Check } from 'lucide-react';
import MathView from './MathView';

export default function FormulaSheetModal({ isOpen, onClose, formulaSheet }) {
  const [search, setSearch] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (latex, idx) => {
    navigator.clipboard.writeText(latex);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const filteredCategories = formulaSheet.map((cat) => ({
    ...cat,
    formulas: cat.formulas.filter(
      (f) =>
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.desc.toLowerCase().includes(search.toLowerCase()) ||
        f.latex.toLowerCase().includes(search.toLowerCase())
    )
  })).filter((cat) => cat.formulas.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="p-4 sm:px-6 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center">
              <Sigma className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-100">AMIE Mathematics-1 Formula Cheat Sheet</h2>
              <p className="text-xs text-slate-400">Essential calculus & derivative formulas for exam preparation</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800/80">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search formulas (e.g. product rule, inverse, trigonometric, laplace)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 text-sm text-slate-100 placeholder-slate-500 rounded-xl border border-slate-700/80 focus:border-violet-500 outline-none"
            />
          </div>
        </div>

        {/* Scrollable Formula Cards */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {filteredCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-violet-400 px-1">
                {cat.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cat.formulas.map((f, fIdx) => {
                  const uniqueKey = `${catIdx}-${fIdx}`;
                  return (
                    <div
                      key={uniqueKey}
                      className="p-3.5 bg-slate-950/60 rounded-xl border border-slate-800/80 hover:border-violet-500/40 transition-colors flex flex-col justify-between gap-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-slate-200">{f.name}</span>
                        <button
                          onClick={() => handleCopy(f.latex, uniqueKey)}
                          className="p-1 rounded text-slate-500 hover:text-slate-300 transition-colors"
                          title="Copy LaTeX"
                        >
                          {copiedIndex === uniqueKey ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      <div className="py-2 px-3 bg-slate-900/90 rounded-lg border border-slate-800 text-center text-slate-100 overflow-x-auto">
                        <MathView math={f.latex} block={true} className="text-sm" />
                      </div>

                      <p className="text-[11px] text-slate-400 italic">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No formulas matched your search.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
