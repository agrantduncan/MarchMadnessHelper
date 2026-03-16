import { motion } from 'framer-motion'
import TeamSlot from './TeamSlot'

const TEAM_H = 28 // px height of one TeamSlot

export default function Matchup({ slotKey, slot, round, slotHeight, onPick, onSelect, selectedTeam }) {
  const { top, bottom, winner } = slot
  const unpicked = !winner && top && bottom

  // Teams must sit at H/4 and 3H/4 so bracket lines connect correctly across rounds
  const topY = slotHeight / 4
  const botY = (3 * slotHeight) / 4
  const midY = slotHeight / 2

  return (
    <div style={{ position: 'relative', height: slotHeight, display: 'flex', flexShrink: 0 }}>
      {/* Teams column */}
      <div style={{ position: 'relative', width: 136, flexShrink: 0 }}>
        <div style={{ position: 'absolute', top: topY - TEAM_H / 2, left: 0, right: 0 }}>
          <TeamSlot
            teamId={top}
            isWinner={winner === top}
            isLoser={winner !== null && winner !== top}
            isSelected={selectedTeam === top}
            unpicked={!!unpicked}
            onPick={(id) => onPick(slotKey, id)}
            onSelect={onSelect}
          />
        </div>
        <div style={{ position: 'absolute', top: botY - TEAM_H / 2, left: 0, right: 0 }}>
          <TeamSlot
            teamId={bottom}
            isWinner={winner === bottom}
            isLoser={winner !== null && winner !== bottom}
            isSelected={selectedTeam === bottom}
            unpicked={!!unpicked}
            onPick={(id) => onPick(slotKey, id)}
            onSelect={onSelect}
          />
        </div>
      </div>

      {/* Bracket connector SVG */}
      <motion.svg
        width="14"
        height={slotHeight}
        style={{ flexShrink: 0, overflow: 'visible' }}
        initial="hidden"
        animate="visible"
      >
        {/* top horizontal arm */}
        <motion.line x1="0" y1={topY} x2="7" y2={topY} stroke="#374151" strokeWidth="1"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: round * 0.08 } } }} />
        {/* vertical spine */}
        <motion.line x1="7" y1={topY} x2="7" y2={botY} stroke="#374151" strokeWidth="1"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: round * 0.08 + 0.1 } } }} />
        {/* bottom horizontal arm */}
        <motion.line x1="0" y1={botY} x2="7" y2={botY} stroke="#374151" strokeWidth="1"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, delay: round * 0.08 } } }} />
        {/* midpoint → next round */}
        <motion.line x1="7" y1={midY} x2="14" y2={midY} stroke="#374151" strokeWidth="1"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.2, delay: round * 0.08 + 0.2 } } }} />
      </motion.svg>
    </div>
  )
}
