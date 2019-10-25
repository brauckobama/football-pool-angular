export interface IScores {
  season: number;
  seasonType: string;
  week: number;
  gameScores?: (GameScoresEntity)[] | null;
}
export interface GameScoresEntity {
  gameSchedule: GameSchedule;
  score?: Score | null;
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
  isoTime: number;
  homeTeamId: string;
  visitorTeamId: string;
  homeTeamAbbr: string;
  visitorTeamAbbr: string;
  homeDisplayName: string;
  visitorDisplayName: string;
  homeNickname: string;
  visitorNickname: string;
  gameType: string;
  visitorTeam: VisitorTeamOrHomeTeam;
  homeTeam: VisitorTeamOrHomeTeam;
  site: Site;
}
export interface VisitorTeamOrHomeTeam {
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
  siteState?: string | null;
  roofType: string;
}
export interface Score {
  time: string;
  down: number;
  yardsToGo: number;
  yardline: string;
  yardlineSide: string;
  yardlineNumber: number;
  phase: string;
  phaseDescription: string;
  possessionTeamId: string;
  possessionTeamAbbr: string;
  redZone: boolean;
  alertPlayType?: null;
  visitorTeamScore: VisitorTeamScoreOrHomeTeamScore;
  homeTeamScore: VisitorTeamScoreOrHomeTeamScore;
}
export interface VisitorTeamScoreOrHomeTeamScore {
  pointTotal: number;
  pointQ1: number;
  pointQ2: number;
  pointQ3: number;
  pointQ4: number;
  pointOT: number;
  timeoutsRemaining: number;
}
