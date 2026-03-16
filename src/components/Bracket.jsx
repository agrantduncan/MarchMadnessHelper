import Region from './Region'
import FinalFour from './FinalFour'

const REGION_LABELS = {
  East: 'EAST',
  West: 'WEST',
  Midwest: 'MIDWEST',
  South: 'SOUTH',
}

function RegionLabel({ name, side }) {
  return (
    <div className={`text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ${side === 'right' ? 'text-right' : 'text-left'}`}>
      {REGION_LABELS[name]}
    </div>
  )
}

export default function Bracket({ slots, onPick, onSelect, selectedTeam }) {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="inline-flex flex-col gap-0 min-w-max">
        {/* Top row: East (left→right) | Final Four | West (right→left) */}
        <div className="flex items-start gap-4">
          {/* East — reads left to right */}
          <div>
            <RegionLabel name="East" side="left" />
            <Region region="East" slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>

          {/* Final Four center */}
          <div className="mt-5">
            <FinalFour slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>

          {/* West — reads right to left (reverse columns) */}
          <div>
            <RegionLabel name="West" side="right" />
            <WestRegion slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>
        </div>

        <div className="h-4" />

        {/* Bottom row: Midwest (left→right) | spacer | South (right→left) */}
        <div className="flex items-start gap-4">
          <div>
            <RegionLabel name="Midwest" side="left" />
            <Region region="Midwest" slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>

          {/* Spacer to align with center column above */}
          <div style={{ visibility: 'hidden' }}>
            <FinalFour slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>

          <div>
            <RegionLabel name="South" side="right" />
            <WestRegion region="South" slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Reversed region: rounds go 4→1 (Elite 8 on left, R64 on right)
function WestRegion({ region = 'West', slots, onPick, onSelect, selectedTeam }) {
  const BASE_HEIGHT = 64
  const rounds = [4, 3, 2, 1]

  return (
    <div className="flex items-start gap-1">
      {rounds.map((round) => {
        const matchupCount = 8 / Math.pow(2, round - 1)
        const slotHeight = BASE_HEIGHT * Math.pow(2, round - 1)
        const matchupKeys = Array.from({ length: matchupCount }, (_, i) => `${region}-r${round}-m${i}`)

        return (
          <div key={round} className="flex flex-col" style={{ gap: 0 }}>
            {matchupKeys.map((key) => {
              const slot = slots[key]
              if (!slot) return null

              const { top, bottom, winner } = slot
              const unpicked = !winner && top && bottom

              return (
                <div key={key} style={{ height: slotHeight, display: 'flex', alignItems: 'center' }}>
                  {/* Reversed matchup: connector on left, teams on right */}
                  <div className="flex items-center">
                    <svg width="12" height="32" className="flex-shrink-0">
                      <line x1="12" y1="8" x2="6" y2="8" stroke="#374151" strokeWidth="1"/>
                      <line x1="6" y1="8" x2="6" y2="24" stroke="#374151" strokeWidth="1"/>
                      <line x1="6" y1="24" x2="12" y2="24" stroke="#374151" strokeWidth="1"/>
                      <line x1="6" y1="16" x2="0" y2="16" stroke="#374151" strokeWidth="1"/>
                    </svg>
                    <div className="flex flex-col gap-0.5">
                      <ReversedSlot
                        teamId={top}
                        isWinner={winner === top}
                        isLoser={winner !== null && winner !== top}
                        isSelected={selectedTeam === top}
                        unpicked={!!unpicked}
                        onPick={(id) => onPick(key, id)}
                        onSelect={onSelect}
                      />
                      <ReversedSlot
                        teamId={bottom}
                        isWinner={winner === bottom}
                        isLoser={winner !== null && winner !== bottom}
                        isSelected={selectedTeam === bottom}
                        unpicked={!!unpicked}
                        onPick={(id) => onPick(key, id)}
                        onSelect={onSelect}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

import { motion } from 'framer-motion'
import { TEAMS } from '../data/teams'

function ReversedSlot({ teamId, isWinner, isLoser, isSelected, unpicked, onPick, onSelect }) {
  const team = teamId ? TEAMS[teamId] : null

  if (!team) {
    return (
      <div className="h-7 flex items-center px-2 rounded text-xs text-slate-600 bg-slate-900/30 border border-slate-800/50" style={{ minWidth: 120 }}>
        <span className="truncate">TBD</span>
        <span className="w-4 text-center ml-1.5 text-[10px]">—</span>
      </div>
    )
  }

  const seedColor = team.seed <= 4 ? 'text-yellow-400' : team.seed <= 8 ? 'text-blue-400' : 'text-slate-400'

  return (
    <motion.div
      layout
      animate={isLoser ? { opacity: 0.3 } : { opacity: 1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      onClick={() => { onSelect(teamId); if (!isLoser) onPick(teamId) }}
      className={`
        h-7 flex items-center px-2 rounded cursor-pointer select-none border text-xs transition-colors
        ${isWinner ? 'bg-orange-500/20 border-orange-500/60 text-white font-semibold'
          : isLoser ? 'bg-slate-900/20 border-slate-800/30 text-slate-600 line-through'
          : unpicked ? 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-orange-500/40 hover:bg-slate-700/60 animate-pulse'
          : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-orange-500/40 hover:bg-slate-700/60'}
        ${isSelected ? 'ring-1 ring-orange-400' : ''}
      `}
      style={{ minWidth: 120 }}
    >
      <span className="truncate max-w-[90px]">{team.name}</span>
      <span className={`w-4 text-center ml-1.5 font-bold text-[10px] ${seedColor}`}>{team.seed}</span>
    </motion.div>
  )
}
