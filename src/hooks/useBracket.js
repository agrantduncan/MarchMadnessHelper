import { useState, useCallback } from 'react'
import { REGIONS, REGION_MATCHUPS } from '../data/teams'

// Build initial slots from team data
function buildInitialSlots() {
  const slots = {}

  REGIONS.forEach((region) => {
    const matchups = REGION_MATCHUPS(region)
    matchups.forEach(([top, bottom], i) => {
      slots[`${region}-r1-m${i}`] = { top, bottom, winner: null }
    })
    // Rounds 2-4 start empty
    for (let r = 2; r <= 4; r++) {
      const count = 8 / Math.pow(2, r - 1)
      for (let m = 0; m < count; m++) {
        slots[`${region}-r${r}-m${m}`] = { top: null, bottom: null, winner: null }
      }
    }
  })

  // Final Four
  slots['FF-r5-m0'] = { top: null, bottom: null, winner: null } // East vs West
  slots['FF-r5-m1'] = { top: null, bottom: null, winner: null } // Midwest vs South

  // Championship
  slots['FF-r6-m0'] = { top: null, bottom: null, winner: null }

  return slots
}

// Returns the next slot key and position ('top'|'bottom') after this slot
function getNextSlot(slotKey) {
  const parts = slotKey.split('-')

  // Regional rounds
  if (parts.length === 3) {
    const region = parts[0]
    const round = parseInt(parts[1].replace('r', ''))
    const matchup = parseInt(parts[2].replace('m', ''))

    if (round < 4) {
      const nextRound = round + 1
      const nextMatchup = Math.floor(matchup / 2)
      const pos = matchup % 2 === 0 ? 'top' : 'bottom'
      return { key: `${region}-r${nextRound}-m${nextMatchup}`, pos }
    }

    // Elite 8 → Final Four
    if (round === 4) {
      const f4Map = { East: { key: 'FF-r5-m0', pos: 'top' }, West: { key: 'FF-r5-m0', pos: 'bottom' }, Midwest: { key: 'FF-r5-m1', pos: 'top' }, South: { key: 'FF-r5-m1', pos: 'bottom' } }
      return f4Map[region]
    }
  }

  // Final Four → Championship
  if (slotKey === 'FF-r5-m0') return { key: 'FF-r6-m0', pos: 'top' }
  if (slotKey === 'FF-r5-m1') return { key: 'FF-r6-m0', pos: 'bottom' }

  return null
}

// Clear all downstream slots that contain teamId
function clearDownstream(slots, slotKey, teamId) {
  const next = getNextSlot(slotKey)
  if (!next) return slots

  const nextSlot = slots[next.key]
  if (!nextSlot) return slots

  const newSlots = { ...slots }
  // Remove from the slot's position if it matches
  if (nextSlot[next.pos] === teamId || nextSlot.top === teamId || nextSlot.bottom === teamId) {
    const wasWinner = nextSlot.winner === teamId
    const updatedSlot = {
      ...nextSlot,
      top: nextSlot.top === teamId ? null : nextSlot.top,
      bottom: nextSlot.bottom === teamId ? null : nextSlot.bottom,
      winner: nextSlot.winner === teamId ? null : nextSlot.winner,
    }
    newSlots[next.key] = updatedSlot

    // If this team was the winner, cascade further
    if (wasWinner) {
      return clearDownstream(newSlots, next.key, teamId)
    }
  }

  return newSlots
}

export function useBracket() {
  const [slots, setSlots] = useState(buildInitialSlots)
  const [selectedTeam, setSelectedTeam] = useState(null)

  const champion = slots['FF-r6-m0']?.winner ?? null

  const pickWinner = useCallback((slotKey, teamId) => {
    setSlots((prev) => {
      const slot = prev[slotKey]
      if (!slot) return prev

      const oldWinner = slot.winner

      // If same pick, deselect
      if (oldWinner === teamId) return prev

      // Clear downstream for old winner if re-picking
      let newSlots = oldWinner ? clearDownstream(prev, slotKey, oldWinner) : { ...prev }

      // Set winner
      newSlots[slotKey] = { ...newSlots[slotKey], winner: teamId }

      // Advance to next slot
      const next = getNextSlot(slotKey)
      if (next && newSlots[next.key]) {
        // Remove old winner from next slot if present
        const nextSlot = newSlots[next.key]
        const clearedNext = {
          ...nextSlot,
          [next.pos]: teamId,
          // Clear winner if we're overwriting the slot they came from
          winner: nextSlot.winner && nextSlot.winner !== teamId ? nextSlot.winner : null,
        }
        // Re-check: if the existing top/bottom at that pos was different, it stays as the opponent
        newSlots[next.key] = {
          ...nextSlot,
          [next.pos]: teamId,
          winner: nextSlot.winner === nextSlot[next.pos] && nextSlot[next.pos] !== teamId
            ? null
            : nextSlot.winner,
        }
      }

      return newSlots
    })
  }, [])

  const selectTeam = useCallback((teamId) => {
    setSelectedTeam((prev) => (prev === teamId ? null : teamId))
  }, [])

  const resetBracket = useCallback(() => {
    setSlots(buildInitialSlots())
    setSelectedTeam(null)
  }, [])

  return { slots, selectedTeam, champion, pickWinner, selectTeam, resetBracket }
}
