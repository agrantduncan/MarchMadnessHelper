import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { useBracketContext } from '../BracketContext'
import Bracket from '../components/Bracket'
import StatsPanel from '../components/StatsPanel'
import { TEAMS } from '../data/teams'

export default function BracketPage() {
  const { slots, selectedTeam, champion, pickWinner, selectTeam, resetBracket } = useBracketContext()
  const prevChampion = useRef(null)

  useEffect(() => {
    if (champion && champion !== prevChampion.current) {
      prevChampion.current = champion
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { x: 0.5, y: 0.4 },
        colors: ['#f97316', '#fbbf24', '#ffffff', '#fb923c'],
      })
      setTimeout(() => confetti({ particleCount: 80, spread: 60, origin: { x: 0.2, y: 0.5 } }), 300)
      setTimeout(() => confetti({ particleCount: 80, spread: 60, origin: { x: 0.8, y: 0.5 } }), 500)
    }
    if (!champion) prevChampion.current = null
  }, [champion])

  const totalGames = 63
  const pickedGames = Object.values(slots).filter((s) => s.winner !== null).length

  return (
    <div className="flex h-screen overflow-hidden bg-[#0f1117]">
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex-shrink-0 px-6 py-3 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-xl leading-tight">
              🏀 2026 March Madness
            </h1>
            <p className="text-slate-500 text-xs mt-0.5">
              {pickedGames}/{totalGames} games picked
              {champion && (
                <span className="ml-2 text-yellow-400 font-semibold">
                  🏆 Champion: {TEAMS[champion]?.name}
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={resetBracket}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors px-3 py-1.5 border border-slate-700 hover:border-slate-600 rounded-lg"
            >
              Reset
            </button>
            <Link
              to="/summary"
              className="text-xs bg-orange-600 hover:bg-orange-500 text-white px-3 py-1.5 rounded-lg font-semibold transition-colors"
            >
              View My Bracket →
            </Link>
          </div>
        </div>

        {/* Bracket area */}
        <div className="flex-1 overflow-auto p-4">
          <Bracket
            slots={slots}
            onPick={pickWinner}
            onSelect={selectTeam}
            selectedTeam={selectedTeam}
          />
        </div>
      </div>

      {/* Stats panel */}
      <StatsPanel
        teamId={selectedTeam}
        onClose={() => selectTeam(selectedTeam)}
      />
    </div>
  )
}
