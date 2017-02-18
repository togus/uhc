import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [PlayerService]
})
export class StatisticsComponent implements OnInit {
  players: Player[];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().then(players => this.players = players);
  }

}
