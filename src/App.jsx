import React, { useState, useMemo } from 'react';
import data from './data/problems_data.json';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProblemCard from './components/ProblemCard';
import SolutionModal from './components/SolutionModal';
import FormulaSheetModal from './components/FormulaSheetModal';
import PDFModal from './components/PDFModal';
import StatsDrawer from './components/StatsDrawer';
import { useProgress } from './hooks/useProgress';
import { Grid, ListFilter, Sparkles, BookOpen, Layers, SearchX } from 'lucide-react';

export default function App() {
  const { problems, chapters, formulaSheet } = data;
  const {
    completed,
    starred,
    toggleCompleted,
    toggleStarred,
    updateNote,
    getNote,
    resetAllProgress,
    isCompleted,
    isStarred
  } = useProgress();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showStarredOnly, setShowStarredOnly] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Modals state
  const [activeSolutionProblem, setActiveSolutionProblem] = useState(null);
  const [activePDFProblem, setActivePDFProblem] = useState(null);
  const [formulaModalOpen, setFormulaModalOpen] = useState(false);
  const [statsDrawerOpen, setStatsDrawerOpen] = useState(false);

  // Filtered problems computation
  const filteredProblems = useMemo(() => {
    return problems.filter((item) => {
      // Filter by Chapter
      if (selectedChapter !== 'All' && item.chapterId !== selectedChapter) {
        return false;
      }

      // Filter by Difficulty
      if (selectedDifficulty !== 'All' && item.difficulty !== selectedDifficulty) {
        return false;
      }

      // Filter by Bookmarks
      if (showStarredOnly && !starred.includes(item.id)) {
        return false;
      }

      // Filter by Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesStatement = item.statement && item.statement.toLowerCase().includes(q);
        const matchesChapter = item.chapterTitle && item.chapterTitle.toLowerCase().includes(q);
        const matchesId = item.id && item.id.toLowerCase().includes(q);
        const matchesHint = item.hint && item.hint.toLowerCase().includes(q);
        const matchesCategory = item.category && item.category.toLowerCase().includes(q);
        const matchesPage = item.pageRange && item.pageRange.toLowerCase().includes(q);
        return matchesStatement || matchesChapter || matchesId || matchesHint || matchesCategory || matchesPage;
      }

      return true;
    });
  }, [problems, selectedChapter, selectedDifficulty, showStarredOnly, searchQuery, starred]);

  // Solution Navigation Handlers
  const currentSolutionIndex = useMemo(() => {
    if (!activeSolutionProblem) return -1;
    return filteredProblems.findIndex((p) => p.id === activeSolutionProblem.id);
  }, [activeSolutionProblem, filteredProblems]);

  const handlePrevSolution = () => {
    if (currentSolutionIndex > 0) {
      setActiveSolutionProblem(filteredProblems[currentSolutionIndex - 1]);
    }
  };

  const handleNextSolution = () => {
    if (currentSolutionIndex >= 0 && currentSolutionIndex < filteredProblems.length - 1) {
      setActiveSolutionProblem(filteredProblems[currentSolutionIndex + 1]);
    }
  };

  // Active chapter title
  const currentChapterObj = chapters.find((c) => c.id === selectedChapter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-violet-500/30 selection:text-violet-200">
      
      {/* Top Sticky Navigation */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalProblems={problems.length}
        completedCount={completed.length}
        starredCount={starred.length}
        showStarredOnly={showStarredOnly}
        setShowStarredOnly={setShowStarredOnly}
        onOpenFormulas={() => setFormulaModalOpen(true)}
        onOpenStats={() => setStatsDrawerOpen(true)}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-6">
        
        {/* Left Sidebar (Chapters, Filters) */}
        <Sidebar
          chapters={chapters}
          selectedChapter={selectedChapter}
          setSelectedChapter={setSelectedChapter}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          completedIds={completed}
          problems={problems}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 space-y-6">
          
          {/* Header Banner */}
          <div className="p-6 bg-gradient-to-r from-violet-950/50 via-slate-900 to-slate-900/90 border border-slate-800/80 rounded-3xl relative overflow-hidden shadow-xl">
            <div className="absolute right-0 top-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full text-xs font-semibold">
                  {selectedChapter === 'All' ? 'Complete Course Repository' : currentChapterObj?.page || 'Selected Chapter'}
                </span>
                {showStarredOnly && (
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold">
                    ⭐ Bookmarked Only
                  </span>
                )}
              </div>

              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {selectedChapter === 'All'
                  ? 'AMIE Section-A Mathematics-1 Problem Bank'
                  : currentChapterObj?.title || 'Chapter Collection'}
              </h1>

              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                Step-by-step verified examination solutions across Pages 30 to 40 with KaTeX math rendering, interactive formulas, and downloadable 2-page print PDFs.
              </p>

              {/* Quick Status Bar */}
              <div className="flex items-center gap-4 pt-2 text-xs text-slate-300 flex-wrap">
                <span className="font-semibold text-violet-400">
                  Showing {filteredProblems.length} of {problems.length} problems
                </span>
                <span>•</span>
                <span>
                  Completed: <b className="text-emerald-400">{completed.length}</b>
                </span>
                <span>•</span>
                <span>
                  Bookmarked: <b className="text-amber-400">{starred.length}</b>
                </span>
              </div>
            </div>
          </div>

          {/* Problem Cards Grid */}
          {filteredProblems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredProblems.map((problem) => (
                <ProblemCard
                  key={problem.id}
                  problem={problem}
                  isCompleted={isCompleted(problem.id)}
                  isStarred={isStarred(problem.id)}
                  onToggleComplete={toggleCompleted}
                  onToggleStar={toggleStarred}
                  onOpenSolution={(prob) => setActiveSolutionProblem(prob)}
                  onOpenPDF={(prob) => setActivePDFProblem(prob)}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-slate-900/40 border border-slate-800 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
                <SearchX className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-200">No matching problems found</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Try adjusting your search keywords, difficulty filter, or clearing the bookmarked toggle.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedChapter('All');
                  setSelectedDifficulty('All');
                  setShowStarredOnly(false);
                }}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </main>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-800/80 bg-slate-950 py-8 text-center text-xs text-slate-500 space-y-2">
        <p>© 2026 AMIE Section-A Mathematics-1 Coursework & Examination Solutions.</p>
        <p className="text-slate-600">
          Engineered with React 18, Vite, Tailwind CSS, and KaTeX. All 103 problems verified and indexed.
        </p>
      </footer>

      {/* Interactive Modals */}
      <SolutionModal
        problem={activeSolutionProblem}
        onClose={() => setActiveSolutionProblem(null)}
        onPrev={handlePrevSolution}
        onNext={handleNextSolution}
        hasPrev={currentSolutionIndex > 0}
        hasNext={currentSolutionIndex >= 0 && currentSolutionIndex < filteredProblems.length - 1}
        isCompleted={activeSolutionProblem ? isCompleted(activeSolutionProblem.id) : false}
        isStarred={activeSolutionProblem ? isStarred(activeSolutionProblem.id) : false}
        onToggleComplete={toggleCompleted}
        onToggleStar={toggleStarred}
        note={activeSolutionProblem ? getNote(activeSolutionProblem.id) : ''}
        onSaveNote={updateNote}
        onOpenPDF={(prob) => {
          setActiveSolutionProblem(null);
          setActivePDFProblem(prob);
        }}
      />

      <FormulaSheetModal
        isOpen={formulaModalOpen}
        onClose={() => setFormulaModalOpen(false)}
        formulaSheet={formulaSheet}
      />

      <PDFModal
        problem={activePDFProblem}
        isOpen={!!activePDFProblem}
        onClose={() => setActivePDFProblem(null)}
      />

      <StatsDrawer
        isOpen={statsDrawerOpen}
        onClose={() => setStatsDrawerOpen(false)}
        totalProblems={problems.length}
        completedCount={completed.length}
        starredCount={starred.length}
        chapters={chapters}
        problems={problems}
        completedIds={completed}
        onReset={resetAllProgress}
      />

    </div>
  );
}
