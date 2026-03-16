import { motion } from 'framer-motion'
import TeamSlot from './TeamSlot'

export default function Matchup({ slotKey, slot, round, onPick, onSelect, selectedTeam }) {
  const { top, bottom, winner } = slot
  const unpicked = !winner && top && bottom

  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-0.5">
        <TeamSlot
          teamId={top}
          isWinner={winner === top}
          isLoser={winner !== null && winner !== top}
          isSelected={selectedTeam === top}
          unpicked={!!unpicked}
          onPick={(id) => onPick(slotKey, id)}
          onSelect={onSelect}
        />
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

      {/* Bracket connector line */}
      <motion.svg
        width="12"
        height="32"
        className="flex-shrink-0 overflow-visible"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d={`M 0 8 L 6 8 L 6 24 L 0 24`}
          fill="none"
          stroke="#374151"
          strokeWidth="1"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: round * 0.1 } },
          }}
        />
        <motion.line
          x1="6" y1="16" x2="12" y2="16"
          stroke="#374151"
          strokeWidth="1"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 0.2, delay: round * 0.1 + 0.3 } },
          }}
        />
      </motion.svg>
    </div>
  )
}
