import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { RootObject, GameScore } from './inflscores';

@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private games: GamesService) { }

  week: string;
  year: string;
  indexOutput: number;
  gamesJSON: GameScore[];

  onSelectChange(week: number) {
    this.games.getWeeklyGames(week).subscribe({
      next: games => this.gamesJSON = games.gameScores,
    });
  }

  ngOnInit() {
    this.week = '8';

    this.games.getWeeklyGames(parseInt(this.week)).subscribe({
      next: games => this.gamesJSON = games.gameScores,
    });
  }

}
