import Matchup from './Matchup'

const BASE_HEIGHT = 64 // px per matchup slot in round 1

export default function Region({ region, slots, onPick, onSelect, selectedTeam }) {
  const rounds = [1, 2, 3, 4]

  return (
    <div className="flex items-start gap-1">
      {rounds.map((round) => {
        const matchupCount = 8 / Math.pow(2, round - 1)
        const slotHeight = BASE_HEIGHT * Math.pow(2, round - 1)
        const matchupKeys = Array.from({ length: matchupCount }, (_, i) => `${region}-r${round}-m${i}`)

        return (
          <div key={round} className="flex flex-col" style={{ gap: 0 }}>
            {matchupKeys.map((key, i) => {
              const slot = slots[key]
              if (!slot) return null
              return (
                <div
                  key={key}
                  style={{ height: slotHeight, display: 'flex', alignItems: 'center' }}
                >
                  <Matchup
                    slotKey={key}
                    slot={slot}
                    round={round}
                    onPick={onPick}
                    onSelect={onSelect}
                    selectedTeam={selectedTeam}
                  />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
