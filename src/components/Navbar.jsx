import { Search, BookOpen, Star, Sparkles, Sigma, CheckCircle2, Menu, X } from 'lucide-react';

export default function Navbar({
  searchQuery,
  setSearchQuery,
  totalProblems,
  completedCount,
  starredCount,
  showStarredOnly,
  setShowStarredOnly,
  onOpenFormulas,
  onOpenStats,
  sidebarOpen,
  setSidebarOpen
}) {
  const completionPercentage = totalProblems > 0 ? Math.round((completedCount / totalProblems) * 100) : 0;

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Mobile Menu Trigger + Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors lg:hidden"
            aria-label="Toggle Navigation"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => { setSearchQuery(''); setShowStarredOnly(false); }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/25 ring-1 ring-white/20">
              <Sigma className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  AMIE Math-1
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full">
                  Section-A
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">103 Complete Problem Solutions</p>
            </div>
          </div>
        </div>

        {/* Center: Interactive Search Input */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-violet-400 transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, formula (e.g. cycloid, log, chain rule)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 text-sm text-slate-100 placeholder-slate-500 rounded-xl border border-slate-700/60 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-2">
          {/* Starred Filter Button */}
          <button
            onClick={() => setShowStarredOnly(!showStarredOnly)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
              showStarredOnly
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/10'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${showStarredOnly ? 'fill-amber-400 text-amber-400' : 'text-amber-400'}`} />
            <span className="hidden sm:inline">Bookmarks</span>
            {starredCount > 0 && (
              <span className="px-1.5 py-0.2 text-[10px] bg-amber-400/30 text-amber-200 rounded-full font-bold">
                {starredCount}
              </span>
            )}
          </button>

          {/* Formulas Cheat Sheet */}
          <button
            onClick={onOpenFormulas}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60 hover:text-violet-300 hover:border-violet-500/40 transition-all"
          >
            <Sigma className="w-3.5 h-3.5 text-violet-400" />
            <span className="hidden sm:inline">Formulas</span>
          </button>

          {/* Progress Tracker Pill */}
          <button
            onClick={onOpenStats}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 transition-all text-xs font-medium text-slate-300 group"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>
              <span className="text-emerald-400 font-bold">{completedCount}</span>/{totalProblems}
            </span>
            <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/mhcybroot/AMIE-Section-A-Mathematics-1"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 border border-slate-700/60 transition-colors"
            title="GitHub Repository"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="p-3 bg-slate-950 border-t border-slate-800/80 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search problems & formulas..."
            className="w-full pl-9 pr-4 py-2 bg-slate-900 text-xs text-slate-100 placeholder-slate-500 rounded-xl border border-slate-800 focus:border-violet-500 outline-none"
          />
        </div>
      </div>
    </header>
  );
}
