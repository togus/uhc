import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  providers: [PlayerService]
})
export class LeaderboardComponent implements OnInit {
  players: Player[];
  selectedPlayer: Player;
  placeStrings: String[] = [
  'Leader', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'
  ];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    //this.getPlayers()
    this.getPlayers()
  }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }

  getPlayerByPlacement(place: number): Player {
    for (let player of this.players) {
      if (player.place == place) {
        return player;
      } 
    }
    throw("No such place in top ten list");
  }

/*  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }*/
}
