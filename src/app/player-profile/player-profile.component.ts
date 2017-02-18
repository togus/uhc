import { Component, OnInit, Input } from '@angular/core';
import { Player} from '../player';


@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  @Input()
  player: Player;
  
  constructor() { }

  ngOnInit() {
  }

}
