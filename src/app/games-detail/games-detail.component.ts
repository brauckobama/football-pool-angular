import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameScore } from '../games/inflscores';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.css']
})
export class GamesDetailComponent implements OnInit {

  constructor() { }

  @Input() game: GameScore;

  imgURLHome: string;
  imgURLVisitor: string;

  ngOnInit() {
    this.imgURLHome = 'assets/' + this.game.gameSchedule.homeNickname + '.png';
    this.imgURLVisitor = 'assets/' + this.game.gameSchedule.visitorNickname + '.png';
  }

}
