import { motion } from 'framer-motion'
import { TEAMS } from '../data/teams'
import Region from './Region'
import FinalFour from './FinalFour'
import TeamSlot from './TeamSlot'

const BASE_HEIGHT = 64

function RegionLabel({ name, side }) {
  return (
    <div className={`text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 ${side === 'right' ? 'text-right' : 'text-left'}`}>
      {name}
    </div>
  )
}

// Reversed region — rounds shown 4→1 (Elite 8 closest to center)
function ReversedRegion({ region, slots, onPick, onSelect, selectedTeam }) {
  const TEAM_H = 28

  return (
    <div style={{ display: 'flex', alignItems: 'start' }}>
      {[4, 3, 2, 1].map((round) => {
        const matchupCount = 8 / Math.pow(2, round - 1)
        const slotHeight = BASE_HEIGHT * Math.pow(2, round - 1)
        const keys = Array.from({ length: matchupCount }, (_, i) => `${region}-r${round}-m${i}`)

        return (
          <div key={round} style={{ display: 'flex', flexDirection: 'column' }}>
            {keys.map((key) => {
              const slot = slots[key]
              if (!slot) return null
              const { top, bottom, winner } = slot
              const unpicked = !winner && top && bottom
              const topY = slotHeight / 4
              const botY = (3 * slotHeight) / 4
              const midY = slotHeight / 2

              return (
                <div key={key} style={{ position: 'relative', height: slotHeight, display: 'flex', flexShrink: 0 }}>
                  {/* Connector SVG on left side (reversed) */}
                  <svg width="14" height={slotHeight} style={{ flexShrink: 0, overflow: 'visible' }}>
                    <line x1="14" y1={topY} x2="7" y2={topY} stroke="#374151" strokeWidth="1" />
                    <line x1="7" y1={topY} x2="7" y2={botY} stroke="#374151" strokeWidth="1" />
                    <line x1="14" y1={botY} x2="7" y2={botY} stroke="#374151" strokeWidth="1" />
                    <line x1="7" y1={midY} x2="0" y2={midY} stroke="#374151" strokeWidth="1" />
                  </svg>

                  {/* Teams column */}
                  <div style={{ position: 'relative', width: 136, flexShrink: 0 }}>
                    <div style={{ position: 'absolute', top: topY - TEAM_H / 2, left: 0, right: 0 }}>
                      <ReversedSlot
                        teamId={top}
                        isWinner={winner === top}
                        isLoser={winner !== null && winner !== top}
                        isSelected={selectedTeam === top}
                        unpicked={!!unpicked}
                        onPick={(id) => onPick(key, id)}
                        onSelect={onSelect}
                      />
                    </div>
                    <div style={{ position: 'absolute', top: botY - TEAM_H / 2, left: 0, right: 0 }}>
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

function ReversedSlot({ teamId, isWinner, isLoser, isSelected, unpicked, onPick, onSelect }) {
  const team = teamId ? TEAMS[teamId] : null
  if (!team) {
    return (
      <div className="h-7 flex items-center px-2 rounded text-xs text-slate-600 bg-slate-900/30 border border-slate-800/50" style={{ minWidth: 120 }}>
        <span className="flex-1 truncate">TBD</span>
        <span className="w-4 text-center ml-1.5 text-[10px]">—</span>
      </div>
    )
  }
  const seedColor = team.seed <= 4 ? 'text-yellow-400' : team.seed <= 8 ? 'text-blue-400' : 'text-slate-400'
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      animate={isLoser ? { opacity: 0.3 } : { opacity: 1 }}
      transition={{ duration: 0.15 }}
      onClick={() => { onSelect(teamId); if (!isLoser) onPick(teamId) }}
      className={`
        h-7 flex items-center px-2 rounded cursor-pointer select-none border text-xs transition-colors group relative
        ${isWinner ? 'bg-orange-500/20 border-orange-500/60 text-white font-semibold'
          : isLoser ? 'bg-slate-900/20 border-slate-800/30 text-slate-600 line-through'
          : unpicked ? 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-orange-500/40 hover:bg-slate-700/60 animate-pulse'
          : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-orange-500/40 hover:bg-slate-700/60'}
        ${isSelected ? 'ring-1 ring-orange-400' : ''}
      `}
      style={{ minWidth: 120 }}
    >
      <span className="flex-1 truncate">{team.name}</span>
      {isWinner
        ? <span className="w-4 text-center ml-1.5 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">✕</span>
        : <span className={`w-4 text-center ml-1.5 font-bold text-[10px] ${seedColor}`}>{team.seed}</span>
      }
    </motion.div>
  )
}

export default function Bracket({ slots, onPick, onSelect, selectedTeam }) {
  const totalH = BASE_HEIGHT * 8

  return (
    <div className="overflow-x-auto pb-4">
      <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 16 }}>
        {/* Top: East → | FF | ← West */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <div>
            <RegionLabel name="EAST" side="left" />
            <Region region="East" slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>
          <div style={{ marginTop: 20 }}>
            <FinalFour slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>
          <div>
            <RegionLabel name="WEST" side="right" />
            <ReversedRegion region="West" slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>
        </div>

        {/* Bottom: Midwest → | spacer | ← South */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <div>
            <RegionLabel name="MIDWEST" side="left" />
            <Region region="Midwest" slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>
          <div style={{ visibility: 'hidden', marginTop: 20 }}>
            <FinalFour slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>
          <div>
            <RegionLabel name="SOUTH" side="right" />
            <ReversedRegion region="South" slots={slots} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          </div>
        </div>
      </div>
    </div>
  )
}
