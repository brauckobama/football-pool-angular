import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  week: string;

  ngOnInit() {
    this.week = '7';
  }

}
