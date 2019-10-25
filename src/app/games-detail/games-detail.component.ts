import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameScore } from '../games/inflscores';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.css']
})
export class GamesDetailComponent implements OnInit {

  constructor() { }

  @Input() index: number;
  @Output() indexOut = new EventEmitter<number>();
  @Input() game: GameScore;

  sendIndex() {
    this.indexOut.emit(this.index);
  }

  ngOnInit() {

  }

}
