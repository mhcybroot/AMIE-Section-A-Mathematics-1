import React, { useState } from 'react';
import { Star, CheckCircle, FileText, ExternalLink, Lightbulb, ChevronDown, ChevronUp, Download, Eye } from 'lucide-react';
import MathView from './MathView';

export default function ProblemCard({
  problem,
  isCompleted,
  isStarred,
  onToggleComplete,
  onToggleStar,
  onOpenSolution,
  onOpenPDF
}) {
  const [showHint, setShowHint] = useState(false);

  // Difficulty badge styling
  const difficultyStyles = {
    Standard: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    'Core Exam': 'bg-blue-500/10 text-cyan-400 border-blue-500/30',
    Advanced: 'bg-rose-500/10 text-rose-400 border-rose-500/30'
  };

  return (
    <div
      className={`group relative flex flex-col justify-between p-5 rounded-2xl transition-all duration-300 border ${
        isCompleted
          ? 'bg-slate-950/70 border-emerald-500/40 shadow-sm shadow-emerald-950/20'
          : 'bg-slate-900/70 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700/80 hover:shadow-xl hover:shadow-violet-950/20'
      }`}
    >
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-lg">
              {problem.id.replace('Problem_', 'Q-').replace('Imp_', 'IMP-').replace('Adv_', 'ADV-').replace('Param_', 'PARAM-').replace('Partial_', 'PARTIAL-')}
            </span>
            <span className="text-xs text-slate-400 font-medium">{problem.pageRange}</span>
            <span
              className={`px-2 py-0.5 text-[10px] font-semibold border rounded-md ${
                difficultyStyles[problem.difficulty] || difficultyStyles['Standard']
              }`}
            >
              {problem.difficulty}
            </span>
          </div>

          {/* Star Bookmark & Completed Check */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onToggleStar(problem.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isStarred
                  ? 'text-amber-400 bg-amber-500/20'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
              }`}
              title={isStarred ? 'Remove bookmark' : 'Bookmark problem'}
            >
              <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400' : ''}`} />
            </button>

            <button
              onClick={() => onToggleComplete(problem.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isCompleted
                  ? 'text-emerald-400 bg-emerald-500/20'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
              }`}
              title={isCompleted ? 'Mark as unsolved' : 'Mark as solved'}
            >
              <CheckCircle className={`w-4 h-4 ${isCompleted ? 'fill-emerald-400/20 text-emerald-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Chapter Title */}
        <p className="text-xs font-semibold text-slate-400 truncate mb-2">{problem.chapterTitle}</p>

        {/* LaTeX Math Expression Box */}
        <div className="p-3.5 my-2 bg-slate-950/80 rounded-xl border border-slate-800/80 flex items-center justify-center min-h-[72px] overflow-x-auto text-slate-100 group-hover:border-slate-700 transition-colors">
          <MathView math={problem.statement} block={true} className="text-base sm:text-lg" />
        </div>

        {/* Hint Accordion */}
        {problem.hint && (
          <div className="mt-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-1 text-[11px] text-amber-400/80 hover:text-amber-300 transition-colors"
            >
              <Lightbulb className="w-3 h-3" />
              <span>{showHint ? 'Hide Strategy Hint' : 'Show Strategy Hint'}</span>
              {showHint ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            {showHint && (
              <div className="p-2.5 mt-1.5 bg-amber-950/20 border border-amber-900/40 rounded-lg text-xs text-amber-200/90 leading-relaxed animate-fade-in">
                {problem.hint}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        {/* View Solution Modal Button */}
        <button
          onClick={() => onOpenSolution(problem)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/40 hover:border-violet-500/70 text-xs font-semibold transition-all shadow-sm"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Solution</span>
        </button>

        {/* View / Download PDF Button */}
        <button
          onClick={() => onOpenPDF(problem)}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-slate-100 text-xs font-semibold border border-slate-700 transition-colors"
          title="Open Printable 2-Page PDF"
        >
          <FileText className="w-3.5 h-3.5 text-rose-400" />
          <span>PDF</span>
        </button>
      </div>
    </div>
  );
}
