import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IScores } from './iscores';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getWeeklyGames(week: number): Observable<IScores> {
    return this.http.get<IScores>(`https://feeds.nfl.com/feeds-rs/scores/2019/REG/${week}.json`);
  }
}
