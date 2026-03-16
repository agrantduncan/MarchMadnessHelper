import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TEAMS, REGIONS } from '../data/teams'
import TeamSlot from './TeamSlot'
import StatsPanel from './StatsPanel'

const ROUND_KEYS = ['r1', 'r2', 'r3', 'r4']
const ROUND_NAMES = { r1: 'Round of 64', r2: 'Round of 32', r3: 'Sweet 16', r4: 'Elite 8' }

function MobileMatchup({ slotKey, slot, onPick, onSelect, selectedTeam }) {
  const { top, bottom, winner } = slot
  const unpicked = !winner && top && bottom
  return (
    <div className="flex flex-col gap-0.5 py-1 border-b border-slate-800/60">
      <TeamSlot teamId={top} isWinner={winner === top} isLoser={winner !== null && winner !== top}
        isSelected={selectedTeam === top} unpicked={!!unpicked}
        onPick={(id) => onPick(slotKey, id)} onSelect={onSelect} />
      <TeamSlot teamId={bottom} isWinner={winner === bottom} isLoser={winner !== null && winner !== bottom}
        isSelected={selectedTeam === bottom} unpicked={!!unpicked}
        onPick={(id) => onPick(slotKey, id)} onSelect={onSelect} />
    </div>
  )
}

export default function MobileView({ slots, onPick, onSelect, selectedTeam, onClosePanel }) {
  const [activeRegion, setActiveRegion] = useState('East')

  return (
    <div className="flex flex-col h-full">
      {/* Region tabs */}
      <div className="flex border-b border-slate-800 flex-shrink-0">
        {REGIONS.map((r) => (
          <button
            key={r}
            onClick={() => setActiveRegion(r)}
            className={`flex-1 py-2 text-xs font-semibold transition-colors ${
              activeRegion === r
                ? 'text-orange-400 border-b-2 border-orange-400'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Rounds */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4">
        {ROUND_KEYS.map((rk) => {
          const rNum = parseInt(rk.replace('r', ''))
          const count = 8 / Math.pow(2, rNum - 1)
          const keys = Array.from({ length: count }, (_, i) => `${activeRegion}-${rk}-m${i}`)
          return (
            <div key={rk}>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{ROUND_NAMES[rk]}</div>
              <div className="space-y-1">
                {keys.map((key) => {
                  const slot = slots[key]
                  if (!slot) return null
                  return <MobileMatchup key={key} slotKey={key} slot={slot} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
                })}
              </div>
            </div>
          )
        })}

        {/* Final Four & Championship in mobile */}
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Final Four</div>
          {['FF-r5-m0', 'FF-r5-m1'].map((key) => {
            const slot = slots[key]
            if (!slot) return null
            return <MobileMatchup key={key} slotKey={key} slot={slot} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          })}
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Championship</div>
          {(() => {
            const slot = slots['FF-r6-m0']
            if (!slot) return null
            return <MobileMatchup slotKey="FF-r6-m0" slot={slot} onPick={onPick} onSelect={onSelect} selectedTeam={selectedTeam} />
          })()}
        </div>
      </div>

      {/* Bottom sheet stats panel */}
      <AnimatePresence>
        {selectedTeam && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 z-30 max-h-[60vh] overflow-y-auto rounded-t-2xl"
          >
            <div className="flex justify-between items-center px-4 pt-3 pb-1">
              <div className="w-10 h-1 bg-slate-600 rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2" />
              <div />
              <button onClick={onClosePanel} className="text-slate-400 hover:text-white text-lg ml-auto">✕</button>
            </div>
            <StatsPanel teamId={selectedTeam} onClose={onClosePanel} inline />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
