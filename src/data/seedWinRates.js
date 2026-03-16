// Historical seed win rates by round
export const SEED_WIN_RATES = {
  1:  { R64: 99,   R32: 85,  S16: 68,  E8: 50,  F4: 28,  Champ: 16 },
  2:  { R64: 94,   R32: 73,  S16: 53,  E8: 35,  F4: 17,  Champ: 8 },
  3:  { R64: 85,   R32: 63,  S16: 40,  E8: 24,  F4: 12,  Champ: 5 },
  4:  { R64: 79,   R32: 55,  S16: 32,  E8: 18,  F4: 8,   Champ: 3 },
  5:  { R64: 64,   R32: 40,  S16: 20,  E8: 9,   F4: 4,   Champ: 1 },
  6:  { R64: 63,   R32: 38,  S16: 18,  E8: 8,   F4: 3,   Champ: 1 },
  7:  { R64: 60,   R32: 35,  S16: 16,  E8: 7,   F4: 3,   Champ: 1 },
  8:  { R64: 52,   R32: 22,  S16: 9,   E8: 4,   F4: 1,   Champ: 0.5 },
  9:  { R64: 48,   R32: 20,  S16: 8,   E8: 3,   F4: 1,   Champ: 0.5 },
  10: { R64: 40,   R32: 18,  S16: 7,   E8: 3,   F4: 1,   Champ: 0.3 },
  11: { R64: 37,   R32: 16,  S16: 6,   E8: 2,   F4: 1,   Champ: 0.2 },
  12: { R64: 36,   R32: 14,  S16: 5,   E8: 2,   F4: 0.5, Champ: 0.1 },
  13: { R64: 21,   R32: 6,   S16: 2,   E8: 0.5, F4: 0.1, Champ: 0 },
  14: { R64: 15,   R32: 3,   S16: 1,   E8: 0.2, F4: 0,   Champ: 0 },
  15: { R64: 6,    R32: 1,   S16: 0.3, E8: 0,   F4: 0,   Champ: 0 },
  16: { R64: 1,    R32: 0.1, S16: 0,   E8: 0,   F4: 0,   Champ: 0 },
}

export const ROUND_LABELS = ['R64', 'R32', 'S16', 'E8', 'F4', 'Champ']
export const ROUND_NAMES = {
  R64: 'Round of 64',
  R32: 'Round of 32',
  S16: 'Sweet 16',
  E8: 'Elite 8',
  F4: 'Final Four',
  Champ: 'Championship',
}
