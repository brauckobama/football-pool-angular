import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject, GameScore } from './inflscores';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getWeeklyGames(week: number): Observable<RootObject> {
    return this.http.get<RootObject>(`https://feeds.nfl.com/feeds-rs/scores/2019/REG/${week}.json`);
  }
}
