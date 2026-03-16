import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { useBracketContext } from '../BracketContext'
import Bracket from '../components/Bracket'
import StatsPanel from '../components/StatsPanel'
import MobileView from '../components/MobileView'
import ResetModal from '../components/ResetModal'
import { TEAMS } from '../data/teams'

function useIsMobile() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  useEffect(() => {
    const onResize = () => setW(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return w < 768
}

function useIsTablet() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  useEffect(() => {
    const onResize = () => setW(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return w >= 768 && w < 1200
}

export default function BracketPage() {
  const { slots, selectedTeam, champion, pickWinner, selectTeam, resetBracket } = useBracketContext()
  const prevChampion = useRef(null)
  const [showResetModal, setShowResetModal] = useState(false)
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  useEffect(() => {
    if (champion && champion !== prevChampion.current) {
      prevChampion.current = champion
      confetti({ particleCount: 200, spread: 100, origin: { x: 0.5, y: 0.4 }, colors: ['#f97316', '#fbbf24', '#ffffff', '#fb923c'] })
      setTimeout(() => confetti({ particleCount: 80, spread: 60, origin: { x: 0.2, y: 0.5 } }), 300)
      setTimeout(() => confetti({ particleCount: 80, spread: 60, origin: { x: 0.8, y: 0.5 } }), 500)
    }
    if (!champion) prevChampion.current = null
  }, [champion])

  const totalGames = 63
  const pickedGames = Object.values(slots).filter((s) => s.winner !== null).length

  function handleReset() {
    resetBracket()
    setShowResetModal(false)
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0f1117]">
      {/* Header */}
      <div className="flex-shrink-0 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-base leading-tight">🏀 2026 March Madness</h1>
          <p className="text-slate-500 text-xs mt-0.5">
            {pickedGames}/{totalGames} games picked
            {champion && <span className="ml-2 text-yellow-400 font-semibold">🏆 {TEAMS[champion]?.name}</span>}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowResetModal(true)}
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors px-3 py-1.5 border border-slate-700 hover:border-slate-600 rounded-lg"
          >
            Reset
          </button>
          <Link
            to="/summary"
            className="text-xs bg-orange-600 hover:bg-orange-500 text-white px-3 py-1.5 rounded-lg font-semibold transition-colors"
          >
            {isMobile ? 'Summary' : 'View My Bracket →'}
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {isMobile ? (
          <MobileView
            slots={slots}
            onPick={pickWinner}
            onSelect={selectTeam}
            selectedTeam={selectedTeam}
            onClosePanel={() => selectTeam(selectedTeam)}
          />
        ) : (
          <>
            <div className={`flex-1 overflow-auto p-4 ${isTablet ? 'scale-bracket' : ''}`}>
              {isTablet ? (
                <div style={{ transform: 'scale(0.72)', transformOrigin: 'top left', width: '139%' }}>
                  <Bracket slots={slots} onPick={pickWinner} onSelect={selectTeam} selectedTeam={selectedTeam} />
                </div>
              ) : (
                <Bracket slots={slots} onPick={pickWinner} onSelect={selectTeam} selectedTeam={selectedTeam} />
              )}
            </div>
            <StatsPanel teamId={selectedTeam} onClose={() => selectTeam(selectedTeam)} />
          </>
        )}
      </div>

      <ResetModal
        open={showResetModal}
        onCancel={() => setShowResetModal(false)}
        onConfirm={handleReset}
      />
    </div>
  )
}
