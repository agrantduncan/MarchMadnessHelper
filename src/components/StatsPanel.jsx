import { motion, AnimatePresence } from 'framer-motion'
import { TEAMS } from '../data/teams'
import { SEED_WIN_RATES, ROUND_LABELS } from '../data/seedWinRates'

function StatBar({ label, value, max = 135 }) {
  const pct = Math.max(0, Math.min(100, ((max - value) / max) * 100))
  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-slate-400">{label}</span>
        <span className="text-slate-300 font-medium">#{value}</span>
      </div>
      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-orange-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      </div>
    </div>
  )
}

function StatsPanelContent({ team, rates, onClose }) {
  return (
    <>
      <div className="p-4 border-b border-slate-700 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
              team.seed <= 4 ? 'bg-yellow-500/20 text-yellow-400' :
              team.seed <= 8 ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700 text-slate-400'
            }`}>
              #{team.seed} {team.region}
            </span>
          </div>
          <h2 className="text-white font-bold text-lg leading-tight">{team.name}</h2>
          {team.profile === 'YES' && (
            <span className="inline-flex items-center gap-1 mt-1.5 text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-semibold">
              🏆 Title Contender
            </span>
          )}
          {team.profile === 'BORDERLINE' && (
            <span className="inline-flex items-center gap-1 mt-1.5 text-xs px-2 py-0.5 rounded-full bg-yellow-900/30 text-yellow-600 border border-yellow-700/30 font-semibold">
              ⚠️ Borderline
            </span>
          )}
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-slate-300 transition-colors ml-2 mt-0.5 text-lg leading-none">✕</button>
      </div>

      <div className="p-4 flex flex-col gap-5">
        <div>
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">KenPom Rankings</h3>
          <StatBar label="Offensive Efficiency" value={team.ortg} />
          <StatBar label="Defensive Efficiency" value={team.drtg} />
        </div>

        <div>
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Historical Seed Win Rates</h3>
          <div className="space-y-1.5">
            {ROUND_LABELS.map((label, idx) => {
              const rate = rates[label]
              const barWidth = Math.min(rate, 100)
              return (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 w-12 flex-shrink-0">{label}</span>
                  <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${barWidth >= 60 ? 'bg-green-500' : barWidth >= 30 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidth}%` }}
                      transition={{ duration: 0.4, delay: 0.05 * idx }}
                    />
                  </div>
                  <span className="text-xs text-slate-400 w-10 text-right">{rate}%</span>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Scouting Report</h3>
          <p className="text-sm text-slate-300 leading-relaxed">{team.blurb}</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-3">
          <div className="text-xs text-slate-500 mb-1">Tournament Ceiling</div>
          <div className="text-orange-400 font-bold text-sm">{team.ceiling}</div>
        </div>
      </div>
    </>
  )
}

export default function StatsPanel({ teamId, onClose, inline = false }) {
  const team = teamId ? TEAMS[teamId] : null
  const rates = team ? SEED_WIN_RATES[team.seed] : null

  if (inline) {
    if (!team) return null
    return <StatsPanelContent team={team} rates={rates} onClose={onClose} />
  }

  return (
    <AnimatePresence>
      {team && (
        <motion.div
          key={teamId}
          initial={{ x: 320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 320, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="w-72 flex-shrink-0 bg-slate-900 border-l border-slate-700 flex flex-col overflow-y-auto"
        >
          <StatsPanelContent team={team} rates={rates} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
