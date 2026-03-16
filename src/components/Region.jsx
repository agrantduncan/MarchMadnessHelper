import Matchup from './Matchup'

const BASE_HEIGHT = 64 // px — slot height in round 1

export default function Region({ region, slots, onPick, onSelect, selectedTeam }) {
  return (
    <div className="flex items-start">
      {[1, 2, 3, 4].map((round) => {
        const matchupCount = 8 / Math.pow(2, round - 1)
        const slotHeight = BASE_HEIGHT * Math.pow(2, round - 1)
        const keys = Array.from({ length: matchupCount }, (_, i) => `${region}-r${round}-m${i}`)

        return (
          <div key={round} style={{ display: 'flex', flexDirection: 'column' }}>
            {keys.map((key) => {
              const slot = slots[key]
              if (!slot) return null
              return (
                <Matchup
                  key={key}
                  slotKey={key}
                  slot={slot}
                  round={round}
                  slotHeight={slotHeight}
                  onPick={onPick}
                  onSelect={onSelect}
                  selectedTeam={selectedTeam}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
