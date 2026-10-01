import React from 'react';
import { X, CheckCircle, Award, Target, Flame, RotateCcw } from 'lucide-react';

export default function StatsDrawer({
  isOpen,
  onClose,
  totalProblems,
  completedCount,
  starredCount,
  chapters,
  problems,
  completedIds,
  onReset
}) {
  if (!isOpen) return null;

  const overallPct = totalProblems > 0 ? Math.round((completedCount / totalProblems) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md h-full bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between overflow-y-auto animate-scale-in">
        
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-bold text-slate-100">Study Progress & Metrics</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Overall Circular Gauge */}
          <div className="p-5 bg-slate-950/80 rounded-2xl border border-slate-800 text-center space-y-3">
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-emerald-400 transition-all duration-1000 ease-out"
                  strokeDasharray={`${overallPct}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-slate-100">{overallPct}%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest">Mastery</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400">Completed</p>
                <p className="text-lg font-bold text-emerald-400">{completedCount} / {totalProblems}</p>
              </div>
              <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400">Bookmarked</p>
                <p className="text-lg font-bold text-amber-400">{starredCount}</p>
              </div>
            </div>
          </div>

          {/* Chapter Mastery Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Chapter-Wise Progress
            </h3>

            <div className="space-y-2">
              {chapters.map((ch) => {
                const chapterProblems = problems.filter((p) => p.chapterId === ch.id);
                const comp = chapterProblems.filter((p) => completedIds.includes(p.id)).length;
                const pct = chapterProblems.length > 0 ? Math.round((comp / chapterProblems.length) * 100) : 0;

                return (
                  <div key={ch.id} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-200 truncate">{ch.title}</span>
                      <span className="text-cyan-300 font-mono text-[11px]">{ch.page}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>{comp} of {chapterProblems.length} completed</span>
                      <span className={pct === 100 ? 'text-emerald-400 font-bold' : ''}>{pct}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          pct === 100 ? 'bg-emerald-400' : 'bg-violet-500'
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Reset Progress Action */}
        <div className="pt-6 border-t border-slate-800">
          <button
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-rose-950/30 text-slate-400 hover:text-rose-400 border border-slate-700 hover:border-rose-800 text-xs font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Study Progress</span>
          </button>
        </div>

      </div>
    </div>
  );
}
