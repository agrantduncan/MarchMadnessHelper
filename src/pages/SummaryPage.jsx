import { Link } from 'react-router-dom'
import { useBracketContext } from '../BracketContext'
import { TEAMS, REGIONS } from '../data/teams'

const ROUND_KEYS = ['r1', 'r2', 'r3', 'r4']
const ROUND_NAMES = {
  r1: 'Round of 64',
  r2: 'Round of 32',
  r3: 'Sweet 16',
  r4: 'Elite 8',
}

function getRegionPicks(slots, region) {
  const picks = {}
  ROUND_KEYS.forEach((r) => {
    const rNum = parseInt(r.replace('r', ''))
    const count = 8 / Math.pow(2, rNum - 1)
    const winners = []
    for (let m = 0; m < count; m++) {
      const slot = slots[`${region}-${r}-m${m}`]
      if (slot?.winner) winners.push(TEAMS[slot.winner]?.name || slot.winner)
    }
    picks[r] = winners
  })
  return picks
}

export default function SummaryPage() {
  const { slots, champion } = useBracketContext()

  const f4m0 = slots['FF-r5-m0']
  const f4m1 = slots['FF-r5-m1']
  const champSlot = slots['FF-r6-m0']

  const f4teams = [f4m0?.winner, f4m1?.winner].filter(Boolean).map((id) => TEAMS[id]?.name)
  const champTeams = [champSlot?.top, champSlot?.bottom].filter(Boolean).map((id) => TEAMS[id]?.name)
  const championName = champion ? TEAMS[champion]?.name : null

  const allPicked = Object.values(slots).every((s) => !s.top || !s.bottom || s.winner)

  function exportTxt() {
    const lines = []
    lines.push('My 2026 March Madness Bracket')
    lines.push(`Generated: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`)
    lines.push('========================')
    lines.push('')

    REGIONS.forEach((region) => {
      lines.push(`${region.toUpperCase()}:`)
      const picks = getRegionPicks(slots, region)
      ROUND_KEYS.forEach((r) => {
        if (picks[r].length > 0) {
          lines.push(`  ${ROUND_NAMES[r]}: ${picks[r].join(', ')}`)
        }
      })
      lines.push('')
    })

    lines.push('========================')
    lines.push('')
    lines.push(`FINAL FOUR: ${f4teams.length ? f4teams.join(', ') : 'Not picked yet'}`)
    lines.push(`CHAMPIONSHIP GAME: ${champTeams.length ? champTeams.join(' vs ') : 'Not picked yet'}`)
    lines.push(`🏆 MY CHAMPION: ${championName || 'Not picked yet'}`)

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'my-2026-bracket.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-[#0f1117] text-slate-300">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-white font-bold text-2xl">My 2026 Bracket</h1>
            <p className="text-slate-500 text-sm mt-1">Your picks at a glance</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={exportTxt}
              className={`text-sm px-4 py-2 rounded-lg font-semibold transition-colors ${
                allPicked
                  ? 'bg-orange-600 hover:bg-orange-500 text-white'
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
              disabled={!allPicked}
              title={!allPicked ? 'Pick all games to export' : ''}
            >
              ⬇ Export .txt
            </button>
            <Link
              to="/"
              className="text-sm text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-lg transition-colors"
            >
              ← Back to Bracket
            </Link>
          </div>
        </div>

        {!allPicked && (
          <div className="mb-6 text-xs text-yellow-600 bg-yellow-900/20 border border-yellow-800/30 rounded-lg px-4 py-2">
            Pick all games to enable export
          </div>
        )}

        {/* Champion */}
        {championName && (
          <div className="mb-8 bg-gradient-to-r from-yellow-900/30 to-orange-900/20 border border-yellow-600/30 rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-yellow-400 font-bold text-2xl">{championName}</div>
            <div className="text-slate-400 text-sm mt-1">2026 National Champion</div>
          </div>
        )}

        {/* Final Four & Championship */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Final Four</h3>
            {f4teams.length ? f4teams.map((t) => (
              <div key={t} className="text-sm text-white py-1 border-b border-slate-700/50 last:border-0">{t}</div>
            )) : <div className="text-slate-600 text-sm">Not picked yet</div>}
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Championship Game</h3>
            {champTeams.length ? champTeams.map((t) => (
              <div key={t} className="text-sm text-white py-1 border-b border-slate-700/50 last:border-0">{t}</div>
            )) : <div className="text-slate-600 text-sm">Not picked yet</div>}
          </div>
        </div>

        {/* Region picks */}
        <div className="grid grid-cols-2 gap-4">
          {REGIONS.map((region) => {
            const picks = getRegionPicks(slots, region)
            return (
              <div key={region} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <h3 className="text-sm font-bold text-orange-400 mb-3">{region}</h3>
                {ROUND_KEYS.map((r) => (
                  <div key={r} className="mb-2">
                    <div className="text-xs text-slate-500 mb-1">{ROUND_NAMES[r]}</div>
                    {picks[r].length ? (
                      picks[r].map((name) => (
                        <div key={name} className="text-xs text-slate-300 py-0.5">{name}</div>
                      ))
                    ) : (
                      <div className="text-xs text-slate-600 italic">Not picked</div>
                    )}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
