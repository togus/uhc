import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GameService]
})
export class GamesComponent implements OnInit {
  gameList: String[];
  selectedGame: Game;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGameList()
  }

  getGameList(): void {
    this.gameService.getGamesList().then(games => this.gameList = games);
  }

  onSelect(game: String): void {
    this.gameService.getGameData(game).then(gme => this.selectedGame = gme);  

  } 
}
