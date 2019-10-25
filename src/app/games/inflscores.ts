export interface VisitorTeam {
  season: number;
  teamId: string;
  abbr: string;
  cityState: string;
  fullName: string;
  nick: string;
  teamType: string;
  conferenceAbbr: string;
  divisionAbbr: string;
}

export interface HomeTeam {
  season: number;
  teamId: string;
  abbr: string;
  cityState: string;
  fullName: string;
  nick: string;
  teamType: string;
  conferenceAbbr: string;
  divisionAbbr: string;
}

export interface Site {
  siteId: number;
  siteCity: string;
  siteFullname: string;
  siteState: string;
  roofType: string;
}

export interface GameSchedule {
  season: number;
  seasonType: string;
  week: number;
  gameId: number;
  gameKey: number;
  gameDate: string;
  gameTimeEastern: string;
  gameTimeLocal: string;
  isoTime: any;
  homeTeamId: string;
  visitorTeamId: string;
  homeTeamAbbr: string;
  visitorTeamAbbr: string;
  homeDisplayName: string;
  visitorDisplayName: string;
  homeNickname: string;
  visitorNickname: string;
  gameType: string;
  visitorTeam: VisitorTeam;
  homeTeam: HomeTeam;
  site: Site;
}

export interface VisitorTeamScore {
  pointTotal: number;
  pointQ1: number;
  pointQ2: number;
  pointQ3: number;
  pointQ4: number;
  pointOT: number;
  timeoutsRemaining: number;
}

export interface HomeTeamScore {
  pointTotal: number;
  pointQ1: number;
  pointQ2: number;
  pointQ3: number;
  pointQ4: number;
  pointOT: number;
  timeoutsRemaining: number;
}

export interface Score {
  time: string;
  down: number;
  yardsToGo: number;
  yardline?: any;
  yardlineSide?: any;
  yardlineNumber?: any;
  phase: string;
  phaseDescription: string;
  possessionTeamId: string;
  possessionTeamAbbr: string;
  redZone: boolean;
  alertPlayType?: any;
  visitorTeamScore: VisitorTeamScore;
  homeTeamScore: HomeTeamScore;
}

export interface GameScore {
  gameSchedule: GameSchedule;
  score: Score;
}

export interface RootObject {
  season: number;
  seasonType: string;
  week: number;
  gameScores: GameScore[];
}

