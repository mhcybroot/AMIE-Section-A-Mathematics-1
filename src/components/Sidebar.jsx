import React from 'react';
import { BookOpen, Layers, CheckCircle, Sparkles, Filter, Award, ChevronRight } from 'lucide-react';

export default function Sidebar({
  chapters,
  selectedChapter,
  setSelectedChapter,
  selectedDifficulty,
  setSelectedDifficulty,
  completedIds,
  problems,
  isOpen,
  setIsOpen
}) {
  const difficulties = ['All', 'Standard', 'Core Exam', 'Advanced'];

  // Calculate chapter completion statistics
  const getChapterStats = (chapterId) => {
    const chapterProblems = problems.filter((p) => p.chapterId === chapterId);
    const completed = chapterProblems.filter((p) => completedIds.includes(p.id)).length;
    return {
      total: chapterProblems.length,
      completed,
      pct: chapterProblems.length > 0 ? Math.round((completed / chapterProblems.length) * 100) : 0
    };
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-72 bg-slate-950/95 border-r border-slate-800/80 p-4 overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-6">
          
          {/* Difficulty Filter */}
          <div>
            <div className="flex items-center gap-2 mb-2.5 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Filter className="w-3.5 h-3.5 text-violet-400" />
              <span>Difficulty Level</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800/60">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedDifficulty === diff
                      ? 'bg-violet-600 text-white shadow-sm shadow-violet-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Chapters Navigation */}
          <div>
            <div className="flex items-center justify-between mb-2.5 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Course Chapters (11)</span>
              </div>
              <span className="text-[10px] text-slate-500 font-normal">Pages 30-40</span>
            </div>

            <div className="space-y-1">
              {/* All Chapters Tab */}
              <button
                onClick={() => {
                  setSelectedChapter('All');
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-medium transition-all ${
                  selectedChapter === 'All'
                    ? 'bg-gradient-to-r from-violet-600/20 to-indigo-600/20 text-violet-300 border border-violet-500/40 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-900/80 hover:text-slate-100 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-full ${selectedChapter === 'All' ? 'bg-violet-400 animate-pulse' : 'bg-slate-600'}`} />
                  <span>All Problem Collections</span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-400 rounded-md">
                  {problems.length}
                </span>
              </button>

              {/* Individual Chapter List */}
              {chapters.map((ch) => {
                const stats = getChapterStats(ch.id);
                const isSelected = selectedChapter === ch.id;

                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      setSelectedChapter(ch.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-all border ${
                      isSelected
                        ? 'bg-slate-900 text-violet-300 border-violet-500/50 shadow-md shadow-violet-950/40'
                        : 'text-slate-300 hover:bg-slate-900/60 border-slate-900/40 hover:border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-semibold text-slate-200 truncate flex-1">
                        {ch.title}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-slate-800/80 text-cyan-300 shrink-0">
                        {ch.page}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>{ch.count} problems</span>
                      <span className={stats.pct === 100 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                        {stats.completed}/{stats.total} ({stats.pct}%)
                      </span>
                    </div>

                    {/* Mini Progress Bar */}
                    <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          stats.pct === 100
                            ? 'bg-emerald-400'
                            : 'bg-gradient-to-r from-violet-500 to-cyan-400'
                        }`}
                        style={{ width: `${stats.pct}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Help / Info Card */}
          <div className="p-3.5 bg-gradient-to-br from-violet-950/40 to-slate-900/60 border border-violet-800/30 rounded-2xl text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-violet-300 font-semibold">
              <Award className="w-4 h-4 text-amber-400" />
              <span>AMIE Exam Tip</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Every solved problem includes the exact 2-page examination layout and step-by-step KaTeX derivation.
            </p>
          </div>

        </div>
      </aside>
    </>
  );
}
