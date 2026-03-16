import { motion } from 'framer-motion'
import TeamSlot from './TeamSlot'
import { TEAMS } from '../data/teams'

const BASE_HEIGHT = 64

export default function FinalFour({ slots, onPick, onSelect, selectedTeam }) {
  const f4m0 = slots['FF-r5-m0'] || { top: null, bottom: null, winner: null }
  const f4m1 = slots['FF-r5-m1'] || { top: null, bottom: null, winner: null }
  const champ = slots['FF-r6-m0'] || { top: null, bottom: null, winner: null }

  const totalHeight = BASE_HEIGHT * 8 // same as one region column

  return (
    <div className="flex items-start gap-1" style={{ height: totalHeight }}>
      {/* Final Four left (FF-r5-m0: East vs West) */}
      <div className="flex flex-col justify-around" style={{ height: totalHeight }}>
        <div style={{ height: BASE_HEIGHT * 4, display: 'flex', alignItems: 'center' }}>
          <div className="flex flex-col gap-0.5">
            <TeamSlot
              teamId={f4m0.top}
              isWinner={f4m0.winner === f4m0.top}
              isLoser={f4m0.winner !== null && f4m0.winner !== f4m0.top}
              isSelected={selectedTeam === f4m0.top}
              unpicked={!!(f4m0.top && f4m0.bottom && !f4m0.winner)}
              onPick={(id) => onPick('FF-r5-m0', id)}
              onSelect={onSelect}
            />
            <TeamSlot
              teamId={f4m0.bottom}
              isWinner={f4m0.winner === f4m0.bottom}
              isLoser={f4m0.winner !== null && f4m0.winner !== f4m0.bottom}
              isSelected={selectedTeam === f4m0.bottom}
              unpicked={!!(f4m0.top && f4m0.bottom && !f4m0.winner)}
              onPick={(id) => onPick('FF-r5-m0', id)}
              onSelect={onSelect}
            />
          </div>
          {/* connector */}
          <svg width="12" height="32" className="flex-shrink-0">
            <line x1="0" y1="8" x2="6" y2="8" stroke="#374151" strokeWidth="1"/>
            <line x1="6" y1="8" x2="6" y2="24" stroke="#374151" strokeWidth="1"/>
            <line x1="6" y1="24" x2="0" y2="24" stroke="#374151" strokeWidth="1"/>
            <line x1="6" y1="16" x2="12" y2="16" stroke="#374151" strokeWidth="1"/>
          </svg>
        </div>

        <div style={{ height: BASE_HEIGHT * 4, display: 'flex', alignItems: 'center' }}>
          <div className="flex flex-col gap-0.5">
            <TeamSlot
              teamId={f4m1.top}
              isWinner={f4m1.winner === f4m1.top}
              isLoser={f4m1.winner !== null && f4m1.winner !== f4m1.top}
              isSelected={selectedTeam === f4m1.top}
              unpicked={!!(f4m1.top && f4m1.bottom && !f4m1.winner)}
              onPick={(id) => onPick('FF-r5-m1', id)}
              onSelect={onSelect}
            />
            <TeamSlot
              teamId={f4m1.bottom}
              isWinner={f4m1.winner === f4m1.bottom}
              isLoser={f4m1.winner !== null && f4m1.winner !== f4m1.bottom}
              isSelected={selectedTeam === f4m1.bottom}
              unpicked={!!(f4m1.top && f4m1.bottom && !f4m1.winner)}
              onPick={(id) => onPick('FF-r5-m1', id)}
              onSelect={onSelect}
            />
          </div>
          <svg width="12" height="32" className="flex-shrink-0">
            <line x1="0" y1="8" x2="6" y2="8" stroke="#374151" strokeWidth="1"/>
            <line x1="6" y1="8" x2="6" y2="24" stroke="#374151" strokeWidth="1"/>
            <line x1="6" y1="24" x2="0" y2="24" stroke="#374151" strokeWidth="1"/>
            <line x1="6" y1="16" x2="12" y2="16" stroke="#374151" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Championship */}
      <div className="flex flex-col items-center justify-center" style={{ height: totalHeight }}>
        <div className="mb-2 text-center">
          <div className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">Championship</div>
          <div className="flex flex-col gap-0.5">
            <TeamSlot
              teamId={champ.top}
              isWinner={champ.winner === champ.top}
              isLoser={champ.winner !== null && champ.winner !== champ.top}
              isSelected={selectedTeam === champ.top}
              unpicked={!!(champ.top && champ.bottom && !champ.winner)}
              onPick={(id) => onPick('FF-r6-m0', id)}
              onSelect={onSelect}
            />
            <TeamSlot
              teamId={champ.bottom}
              isWinner={champ.winner === champ.bottom}
              isLoser={champ.winner !== null && champ.winner !== champ.bottom}
              isSelected={selectedTeam === champ.bottom}
              unpicked={!!(champ.top && champ.bottom && !champ.winner)}
              onPick={(id) => onPick('FF-r6-m0', id)}
              onSelect={onSelect}
            />
          </div>

          {/* Champion display */}
          {champ.winner && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-center"
            >
              <div className="text-yellow-400 text-2xl mb-1">🏆</div>
              <div className="text-yellow-400 font-bold text-sm">{TEAMS[champ.winner]?.name}</div>
              <div className="text-slate-500 text-xs">2026 Champion</div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
