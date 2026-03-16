// 64 teams across 4 regions
// Seeding order in Round 1: 1v16, 8v9, 5v12, 4v13, 6v11, 3v14, 7v10, 2v15
export const TEAMS = {
  // ── EAST ──────────────────────────────────────────────────────────────────
  'east-1':  { id: 'east-1',  region: 'East',    seed: 1,  name: 'Duke',            ortg: 5,   drtg: 1,   ceiling: 'National Champion',  profile: 'YES',       blurb: 'The most complete team in the country. Elite defense anchored by Cameron Boozer, top-5 offense. No. 1 overall seed, ACC champions.' },
  'east-2':  { id: 'east-2',  region: 'East',    seed: 2,  name: 'UConn',           ortg: 18,  drtg: 12,  ceiling: 'Final Four',         profile: 'BORDERLINE',blurb: 'Defending champions with tournament pedigree but slightly off their dominant 2024 form. Dangerous come March.' },
  'east-3':  { id: 'east-3',  region: 'East',    seed: 3,  name: 'Michigan State',  ortg: 22,  drtg: 20,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'Balanced but not elite on either end. Tom Izzo always coaches up in March.' },
  'east-4':  { id: 'east-4',  region: 'East',    seed: 4,  name: 'Kansas',          ortg: 30,  drtg: 14,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'Stout defense under Bill Self but struggled offensively all season. Scored just 47 pts in Big 12 tourney loss.' },
  'east-5':  { id: 'east-5',  region: 'East',    seed: 5,  name: "St. John's",      ortg: 35,  drtg: 13,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Great defense under Rick Pitino but chronic half-court offensive struggles. Got upset in Round of 32 last year.' },
  'east-6':  { id: 'east-6',  region: 'East',    seed: 6,  name: 'Louisville',      ortg: 19,  drtg: 22,  ceiling: 'Sweet 16',           profile: 'BORDERLINE',blurb: 'Balanced team that could surprise. Ryan Conwell (18.7 PPG) is a tournament-type scorer. Could be a sleeper.' },
  'east-7':  { id: 'east-7',  region: 'East',    seed: 7,  name: 'UCLA',            ortg: 24,  drtg: 25,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'Offense-leaning profile, meets the Sweet 16 offensive threshold per KenPom. Inconsistent defense is the worry.' },
  'east-8':  { id: 'east-8',  region: 'East',    seed: 8,  name: 'Ohio State',      ortg: 28,  drtg: 32,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Offense-first team with enough firepower to pull a first-round upset. Best defensive team in Big Ten play, forcing turnovers on 20% of possessions.' },
  'east-9':  { id: 'east-9',  region: 'East',    seed: 9,  name: 'TCU',             ortg: 40,  drtg: 38,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Solid mid-tier Big 12 team. Capable of a first-round upset but ceiling is limited.' },
  'east-10': { id: 'east-10', region: 'East',    seed: 10, name: 'UCF',             ortg: 45,  drtg: 42,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'AAC standout with good pace and offensive efficiency. Longshot but has upset potential against UCLA.' },
  'east-11': { id: 'east-11', region: 'East',    seed: 11, name: 'South Florida',   ortg: 55,  drtg: 30,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Defense-first team that snuck into the field. Upset potential against Louisville if defense travels.' },
  'east-12': { id: 'east-12', region: 'East',    seed: 12, name: 'Northern Iowa',   ortg: 60,  drtg: 48,  ceiling: 'Round of 32',        profile: 'NO',        blurb: "Missouri Valley Conference rep. Classic 12-seed upset threat — don't sleep on them against St. John's." },
  'east-13': { id: 'east-13', region: 'East',    seed: 13, name: 'Cal Baptist',     ortg: 75,  drtg: 70,  ceiling: 'Round of 64',        profile: 'NO',        blurb: 'WAC champion. Cinderella story potential but limited path against Kansas.' },
  'east-14': { id: 'east-14', region: 'East',    seed: 14, name: 'North Dakota St', ortg: 90,  drtg: 85,  ceiling: 'Round of 64',        profile: 'NO',        blurb: 'Summit League champ. Strong team in their conference but massive step up in competition.' },
  'east-15': { id: 'east-15', region: 'East',    seed: 15, name: 'Furman',          ortg: 95,  drtg: 100, ceiling: 'Round of 64',        profile: 'NO',        blurb: 'SoCon champion. Historically 15-seeds win about 6% of games.' },
  'east-16': { id: 'east-16', region: 'East',    seed: 16, name: 'Siena',           ortg: 120, drtg: 115, ceiling: 'Round of 64',        profile: 'NO',        blurb: 'MAAC champion. Has virtually no shot against No. 1 Duke.' },

  // ── WEST ──────────────────────────────────────────────────────────────────
  'west-1':  { id: 'west-1',  region: 'West',    seed: 1,  name: 'Arizona',         ortg: 8,   drtg: 3,   ceiling: 'National Champion',  profile: 'YES',       blurb: 'Elite on both ends, No. 3 KenPom overall. Top defensive squad in the country and one of five teams that meets the championship formula.' },
  'west-2':  { id: 'west-2',  region: 'West',    seed: 2,  name: 'Purdue',          ortg: 2,   drtg: 37,  ceiling: 'Final Four',         profile: 'BORDERLINE',blurb: 'Explosive offense (No. 2 nationally) but defense is a concern. Won Big Ten championship over Michigan. High ceiling if defense shows up.' },
  'west-3':  { id: 'west-3',  region: 'West',    seed: 3,  name: 'Gonzaga',         ortg: 15,  drtg: 27,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'Classic Gonzaga — great offense, good but not elite defense. Historically underperforms seeding in March.' },
  'west-4':  { id: 'west-4',  region: 'West',    seed: 4,  name: 'Arkansas',        ortg: 5,   drtg: 46,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'One of the most dangerous offensive teams in the country but defense is a real vulnerability. Boom or bust.' },
  'west-5':  { id: 'west-5',  region: 'West',    seed: 5,  name: 'Wisconsin',       ortg: 32,  drtg: 36,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'Balanced Big Ten team, meets offensive thresholds for second weekend per KenPom. Steady but unspectacular.' },
  'west-6':  { id: 'west-6',  region: 'West',    seed: 6,  name: 'BYU',             ortg: 20,  drtg: 44,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'High-powered offense that meets the championship offensive threshold, but defense holds them back. Fun team to watch.' },
  'west-7':  { id: 'west-7',  region: 'West',    seed: 7,  name: 'Miami FL',        ortg: 38,  drtg: 35,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'Balanced ACC team with tournament experience. Quietly dangerous.' },
  'west-8':  { id: 'west-8',  region: 'West',    seed: 8,  name: 'Villanova',       ortg: 42,  drtg: 40,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Historically strong program that has underperformed recently. Capable upset team.' },
  'west-9':  { id: 'west-9',  region: 'West',    seed: 9,  name: 'Utah State',      ortg: 35,  drtg: 28,  ceiling: 'Sweet 16',           profile: 'BORDERLINE',blurb: 'Meets the Final Four offensive and defensive averages per KenPom — a sneaky dangerous team.' },
  'west-10': { id: 'west-10', region: 'West',    seed: 10, name: 'Missouri',        ortg: 50,  drtg: 55,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'SEC team with athletic talent. Upset potential against Miami FL.' },
  'west-11': { id: 'west-11', region: 'West',    seed: 11, name: 'Texas/NC State',  ortg: 45,  drtg: 50,  ceiling: 'Round of 64',        profile: 'NO',        blurb: 'First Four team. Last four into the field — significant underdog.' },
  'west-12': { id: 'west-12', region: 'West',    seed: 12, name: 'High Point',      ortg: 80,  drtg: 78,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Big South champion. Classic 12-seed with upset potential if Wisconsin comes out flat.' },
  'west-13': { id: 'west-13', region: 'West',    seed: 13, name: 'Hawaii',          ortg: 88,  drtg: 92,  ceiling: 'Round of 64',        profile: 'NO',        blurb: 'Big West champion. Long travel disadvantage but spirited team.' },
  'west-14': { id: 'west-14', region: 'West',    seed: 14, name: 'Kennesaw State',  ortg: 100, drtg: 95,  ceiling: 'Round of 64',        profile: 'NO',        blurb: 'ASUN champion. Will need a miracle against Gonzaga.' },
  'west-15': { id: 'west-15', region: 'West',    seed: 15, name: 'Queens',          ortg: 110, drtg: 108, ceiling: 'Round of 64',        profile: 'NO',        blurb: 'First year of NCAA Tournament eligibility. Historic underdog.' },
  'west-16': { id: 'west-16', region: 'West',    seed: 16, name: 'LIU',             ortg: 125, drtg: 120, ceiling: 'Round of 64',        profile: 'NO',        blurb: 'NEC champion. Enormous mountain to climb against Arizona.' },

  // ── MIDWEST ───────────────────────────────────────────────────────────────
  'midwest-1':  { id: 'midwest-1',  region: 'Midwest', seed: 1,  name: 'Michigan',        ortg: 4,   drtg: 2,   ceiling: 'National Champion',  profile: 'YES',       blurb: 'One of five teams meeting the full KenPom championship formula. Elite on both ends, No. 2 overall. Dropped from No. 1 overall after Big Ten title loss to Purdue.' },
  'midwest-2':  { id: 'midwest-2',  region: 'Midwest', seed: 2,  name: 'Iowa State',      ortg: 12,  drtg: 8,   ceiling: 'Final Four',         profile: 'YES',       blurb: 'Meets both the Final Four offensive and defensive KenPom averages. Dangerous and well-coached. Dark horse title contender.' },
  'midwest-3':  { id: 'midwest-3',  region: 'Midwest', seed: 3,  name: 'Virginia',        ortg: 48,  drtg: 16,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'Classic Virginia slow-tempo defense. Forces turnovers and controls pace. Can bore teams into submission.' },
  'midwest-4':  { id: 'midwest-4',  region: 'Midwest', seed: 4,  name: 'Alabama',         ortg: 11,  drtg: 42,  ceiling: 'Elite 8',            profile: 'NO',        blurb: 'Meets the offensive threshold for a national champion but defense is a liability. High ceiling if they can stop teams.' },
  'midwest-5':  { id: 'midwest-5',  region: 'Midwest', seed: 5,  name: 'Texas Tech',      ortg: 16,  drtg: 35,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'Strong offensive team but defensive metrics fall short of championship profile. Can go on a run with their offensive firepower.' },
  'midwest-6':  { id: 'midwest-6',  region: 'Midwest', seed: 6,  name: 'Tennessee',       ortg: 30,  drtg: 22,  ceiling: 'Elite 8',            profile: 'NO',        blurb: 'Balanced SEC team that meets the Sweet 16 thresholds on both ends. Capable of a deep run.' },
  'midwest-7':  { id: 'midwest-7',  region: 'Midwest', seed: 7,  name: 'Kentucky',        ortg: 26,  drtg: 29,  ceiling: 'Sweet 16',           profile: 'BORDERLINE',blurb: "Mark Pope's squad meets Sweet 16 KenPom averages on offense. Could be a surprise team in March." },
  'midwest-8':  { id: 'midwest-8',  region: 'Midwest', seed: 8,  name: 'Georgia',         ortg: 33,  drtg: 45,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Offense-leaning SEC team with athletic talent. Inconsistent but dangerous.' },
  'midwest-9':  { id: 'midwest-9',  region: 'Midwest', seed: 9,  name: 'Saint Louis',     ortg: 55,  drtg: 52,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'A-10 standout. Good program but major step up against Georgia.' },
  'midwest-10': { id: 'midwest-10', region: 'Midwest', seed: 10, name: 'Santa Clara',     ortg: 38,  drtg: 33,  ceiling: 'Sweet 16',           profile: 'BORDERLINE',blurb: 'Meets Final Four KenPom averages per some models. Sneaky dangerous against Kentucky.' },
  'midwest-11': { id: 'midwest-11', region: 'Midwest', seed: 11, name: 'SMU/Miami OH',    ortg: 50,  drtg: 55,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'First Four team. Miami OH had a 31-1 regular season record before MAC tournament loss. Plenty of motivation.' },
  'midwest-12': { id: 'midwest-12', region: 'Midwest', seed: 12, name: 'Akron',           ortg: 70,  drtg: 65,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'MAC champion. Solid mid-major with upset potential.' },
  'midwest-13': { id: 'midwest-13', region: 'Midwest', seed: 13, name: 'Hofstra',         ortg: 82,  drtg: 80,  ceiling: 'Round of 64',        profile: 'NO',        blurb: 'CAA champion. Big underdog against Alabama.' },
  'midwest-14': { id: 'midwest-14', region: 'Midwest', seed: 14, name: 'Wright State',    ortg: 95,  drtg: 90,  ceiling: 'Round of 64',        profile: 'NO',        blurb: 'Horizon League champion. Has the defensive numbers to be a nuisance for one game.' },
  'midwest-15': { id: 'midwest-15', region: 'Midwest', seed: 15, name: 'Tennessee State', ortg: 112, drtg: 118, ceiling: 'Round of 64',        profile: 'NO',        blurb: 'SWAC champion. Major underdog in every sense.' },
  'midwest-16': { id: 'midwest-16', region: 'Midwest', seed: 16, name: 'UMBC/Howard',     ortg: 128, drtg: 130, ceiling: 'Round of 64',        profile: 'NO',        blurb: 'First Four team. UMBC is historically famous for beating Virginia in 2018 — the first ever 16 over 1.' },

  // ── SOUTH ─────────────────────────────────────────────────────────────────
  'south-1':  { id: 'south-1',  region: 'South',   seed: 1,  name: 'Florida',         ortg: 7,   drtg: 9,   ceiling: 'National Champion',  profile: 'YES',       blurb: 'Reigning national champions and one of five teams meeting the full KenPom championship formula. Elite on both ends, playing with a target on their back.' },
  'south-2':  { id: 'south-2',  region: 'South',   seed: 2,  name: 'Houston',         ortg: 17,  drtg: 6,   ceiling: 'Final Four',         profile: 'YES',       blurb: 'Meets both Final Four KenPom averages. Defensive powerhouse that held Kansas to 47 points in the Big 12 tournament.' },
  'south-3':  { id: 'south-3',  region: 'South',   seed: 3,  name: 'Illinois',        ortg: 1,   drtg: 28,  ceiling: 'Elite 8',            profile: 'NO',        blurb: 'No. 1 offense in the entire country but defense falls short of championship threshold. Massive ceiling but vulnerable to teams who can score.' },
  'south-4':  { id: 'south-4',  region: 'South',   seed: 4,  name: 'Nebraska',        ortg: 55,  drtg: 18,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'The only purely defense-only team meeting any championship threshold. Best defensive team in Big Ten play, forced turnovers on nearly 20% of possessions. Pryce Sandfort (17.9 PPG) leads the offense.' },
  'south-5':  { id: 'south-5',  region: 'South',   seed: 5,  name: 'Vanderbilt',      ortg: 14,  drtg: 48,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: 'Strong offensive profile meets championship threshold on offense but defense is a real concern for a deep run.' },
  'south-6':  { id: 'south-6',  region: 'South',   seed: 6,  name: 'North Carolina',  ortg: 25,  drtg: 30,  ceiling: 'Sweet 16',           profile: 'BORDERLINE',blurb: 'Meets Sweet 16 KenPom averages on offense. Balanced team that could be a surprise in the South.' },
  'south-7':  { id: 'south-7',  region: 'South',   seed: 7,  name: "Saint Mary's",    ortg: 28,  drtg: 26,  ceiling: 'Sweet 16',           profile: 'NO',        blurb: "Balanced WCC team, meets the Sweet 16 averages on both ends. Don't sleep on them." },
  'south-8':  { id: 'south-8',  region: 'South',   seed: 8,  name: 'Clemson',         ortg: 35,  drtg: 20,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Top-20 defense and forces turnovers on 19% of ACC possessions. Won with depth over star power this season.' },
  'south-9':  { id: 'south-9',  region: 'South',   seed: 9,  name: 'Iowa',            ortg: 40,  drtg: 38,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Balanced Big Ten team. Could nick Clemson if their offense gets going.' },
  'south-10': { id: 'south-10', region: 'South',   seed: 10, name: 'Texas A&M',       ortg: 45,  drtg: 50,  ceiling: 'Round of 32',        profile: 'NO',        blurb: "SEC team with physical play. Dangerous if Saint Mary's underestimates them." },
  'south-11': { id: 'south-11', region: 'South',   seed: 11, name: 'VCU',             ortg: 55,  drtg: 45,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Classic VCU — athletic, pressing defense that causes chaos. Capable of beating UNC in the first round.' },
  'south-12': { id: 'south-12', region: 'South',   seed: 12, name: 'McNeese',         ortg: 68,  drtg: 72,  ceiling: 'Round of 32',        profile: 'NO',        blurb: 'Southland champion. Classic 12-seed upset threat against Vanderbilt.' },
  'south-13': { id: 'south-13', region: 'South',   seed: 13, name: 'Troy',            ortg: 85,  drtg: 82,  ceiling: 'Round of 64',        profile: 'NO',        blurb: 'Sun Belt champion. Big underdog against Nebraska.' },
  'south-14': { id: 'south-14', region: 'South',   seed: 14, name: 'Penn',            ortg: 92,  drtg: 88,  ceiling: 'Round of 64',        profile: 'NO',        blurb: 'Ivy League champion. Could make Illinois work for a half before the talent gap shows.' },
  'south-15': { id: 'south-15', region: 'South',   seed: 15, name: 'Idaho',           ortg: 108, drtg: 105, ceiling: 'Round of 64',        profile: 'NO',        blurb: 'Big Sky champion. Massive underdog against Houston.' },
  'south-16': { id: 'south-16', region: 'South',   seed: 16, name: 'Prairie View/Lehigh', ortg: 130, drtg: 135, ceiling: 'Round of 64',   profile: 'NO',        blurb: 'First Four team. SWAC or Patriot League champion. Playing for the honor of facing Florida.' },
}

// NCAA standard first-round seeding matchups
// Returns [topTeamId, bottomTeamId] pairs for a region
export const REGION_MATCHUPS = (region) => {
  const r = region.toLowerCase()
  return [
    [`${r}-1`, `${r}-16`],
    [`${r}-8`,  `${r}-9`],
    [`${r}-5`,  `${r}-12`],
    [`${r}-4`,  `${r}-13`],
    [`${r}-6`,  `${r}-11`],
    [`${r}-3`,  `${r}-14`],
    [`${r}-7`,  `${r}-10`],
    [`${r}-2`,  `${r}-15`],
  ]
}

export const REGIONS = ['East', 'West', 'Midwest', 'South']
