import { createContext, useContext } from 'react'
import { useBracket } from './hooks/useBracket'

const BracketContext = createContext(null)

export function BracketProvider({ children }) {
  const bracket = useBracket()
  return <BracketContext.Provider value={bracket}>{children}</BracketContext.Provider>
}

export function useBracketContext() {
  const ctx = useContext(BracketContext)
  if (!ctx) throw new Error('useBracketContext must be used within BracketProvider')
  return ctx
}
