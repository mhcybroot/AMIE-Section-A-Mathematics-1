import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle, Star, FileText, ExternalLink, Save, BookOpen } from 'lucide-react';
import MathView from './MathView';
import MarkdownMath from './MarkdownMath';

export default function SolutionModal({
  problem,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  isCompleted,
  isStarred,
  onToggleComplete,
  onToggleStar,
  note,
  onSaveNote,
  onOpenPDF
}) {
  const [currentNote, setCurrentNote] = useState(note || '');
  const [savedStatus, setSavedStatus] = useState(false);

  useEffect(() => {
    setCurrentNote(note || '');
    setSavedStatus(false);
  }, [problem, note]);

  // Handle keyboard shortcuts (Escape to close, Left/Right for prev/next)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!problem) return null;

  const handleSaveNote = () => {
    onSaveNote(problem.id, currentNote);
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
        
        {/* Header Bar */}
        <div className="p-4 sm:px-6 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-3 py-1 text-xs font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-xl">
              {problem.id}
            </span>
            <span className="text-xs font-semibold text-cyan-300 px-2.5 py-0.5 bg-cyan-950/40 border border-cyan-800/40 rounded-lg">
              {problem.pageRange}
            </span>
            <span className="text-xs text-slate-300 font-medium hidden sm:inline">
              {problem.chapterTitle}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next buttons */}
            <div className="flex items-center bg-slate-800/80 rounded-xl border border-slate-700/60 p-0.5">
              <button
                onClick={onPrev}
                disabled={!hasPrev}
                className="p-1.5 text-slate-400 hover:text-slate-100 disabled:opacity-30 disabled:hover:text-slate-400 rounded-lg transition-colors"
                title="Previous Problem (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-500 px-1">|</span>
              <button
                onClick={onNext}
                disabled={!hasNext}
                className="p-1.5 text-slate-400 hover:text-slate-100 disabled:opacity-30 disabled:hover:text-slate-400 rounded-lg transition-colors"
                title="Next Problem (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              title="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Main Problem Equation Banner */}
          <div className="p-4 bg-slate-950/80 border border-violet-800/30 rounded-2xl flex flex-col items-center justify-center shadow-inner">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Problem Statement
            </span>
            <div className="text-lg sm:text-xl text-slate-100 overflow-x-auto max-w-full py-2">
              <MathView math={problem.statement} block={true} />
            </div>
          </div>

          {/* Step-by-Step Breakdown */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4 text-xs font-bold text-violet-400 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Complete Step-by-Step Derivation & Explanation</span>
            </div>

            {problem.mdContent ? (
              <MarkdownMath content={problem.mdContent} />
            ) : (
              <p className="text-slate-400 text-sm">Step-by-step solution is available in the detailed HTML and PDF view.</p>
            )}
          </div>

          {/* Interactive Personal Study Notes */}
          <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300">
                Personal Study Notes for this Problem
              </label>
              {savedStatus && (
                <span className="text-xs text-emerald-400 font-medium animate-pulse">
                  Saved to browser!
                </span>
              )}
            </div>
            <textarea
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
              placeholder="Write personal formulas, tricky steps, or key reminders here..."
              rows={2}
              className="w-full p-3 bg-slate-900 text-xs text-slate-200 placeholder-slate-500 rounded-xl border border-slate-700/80 focus:border-violet-500 outline-none resize-none"
            />
            <button
              onClick={handleSaveNote}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-medium transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Note</span>
            </button>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            {/* Solved Toggle */}
            <button
              onClick={() => onToggleComplete(problem.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              <CheckCircle className={`w-3.5 h-3.5 ${isCompleted ? 'fill-emerald-400 text-slate-950' : ''}`} />
              <span>{isCompleted ? 'Completed' : 'Mark as Solved'}</span>
            </button>

            {/* Bookmark Toggle */}
            <button
              onClick={() => onToggleStar(problem.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isStarred
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${isStarred ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>{isStarred ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Open Raw HTML Solution */}
            {problem.htmlPath && (
              <a
                href={problem.htmlPath}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>Full Web Solution</span>
              </a>
            )}

            {/* View PDF */}
            <button
              onClick={() => onOpenPDF(problem)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/40 text-xs font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-rose-400" />
              <span>2-Page PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
