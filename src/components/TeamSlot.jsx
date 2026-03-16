import { motion } from 'framer-motion'
import { TEAMS } from '../data/teams'

export default function TeamSlot({ teamId, isWinner, isLoser, isSelected, onPick, onSelect, unpicked }) {
  const team = teamId ? TEAMS[teamId] : null

  if (!team) {
    return (
      <div className="h-7 flex items-center px-2 rounded text-xs text-slate-600 bg-slate-900/30 border border-slate-800/50">
        <span className="w-4 text-center mr-1.5">—</span>
        <span>TBD</span>
      </div>
    )
  }

  const seedColor = team.seed <= 4 ? 'text-yellow-400' : team.seed <= 8 ? 'text-blue-400' : 'text-slate-400'

  return (
    <motion.div
      animate={isLoser ? { opacity: 0.3 } : { opacity: 1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      onClick={() => {
        onSelect(teamId)
        if (!isLoser) onPick(teamId)
      }}
      className={`
        h-7 flex items-center px-2 rounded cursor-pointer select-none border text-xs transition-colors group relative
        ${isWinner
          ? 'bg-orange-500/20 border-orange-500/60 text-white font-semibold'
          : isLoser
          ? 'bg-slate-900/20 border-slate-800/30 text-slate-600 line-through'
          : unpicked
          ? 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-orange-500/40 hover:bg-slate-700/60 animate-pulse'
          : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-orange-500/40 hover:bg-slate-700/60'
        }
        ${isSelected ? 'ring-1 ring-orange-400' : ''}
      `}
    >
      {isWinner ? (
        <>
          <span className={`w-4 text-center mr-1.5 font-bold text-[10px] ${seedColor}`}>{team.seed}</span>
          <span className="truncate flex-1">{team.name}</span>
          <span className="w-4 text-center ml-1 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">✕</span>
        </>
      ) : (
        <>
          <span className={`w-4 text-center mr-1.5 font-bold text-[10px] ${seedColor}`}>{team.seed}</span>
          <span className="truncate max-w-[90px]">{team.name}</span>
        </>
      )}
    </motion.div>
  )
}
