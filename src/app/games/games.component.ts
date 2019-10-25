import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';
import { IScores } from './iscores';

@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private games: GamesService) { }

  week: string;
  year: string;
  gamesJSON: IScores;

  onSelectChange(week: number) {
    this.games.getWeeklyGames(week).subscribe({
      next: games => this.gamesJSON = games,
    });
  }

  ngOnInit() {
    this.week = '7';
  }

}
