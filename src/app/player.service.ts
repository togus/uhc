import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from './player';
/*
const PLAYERS: Player[] = [
  {id: 1, nickname: 'Knirch', gamesPlayed: 15, kills: 7, deaths:15, wins:5, place: 1, description:'En bekymrad man'},
  {id: 2, nickname: 'plundra', gamesPlayed: 15, kills: 12, deaths:14, wins:1, place: 2, description:''},
  {id: 3, nickname: 'dalurka', gamesPlayed: 10, kills: 4, deaths:12, wins:3, place: 3, description:''},
  {id: 4, nickname: 'Schakkis', gamesPlayed: 10, kills: 6, deaths:13, wins:2, place: 4, description:'asd asd'},
  {id: 5, nickname: 'lollerlal', gamesPlayed: 14, kills: 3, deaths:11, wins:4, place: 5, description:''},
  {id: 1, nickname: 'Knirch', gamesPlayed: 15, kills: 7, deaths:15, wins:5, place: 6, description:''},
  {id: 2, nickname: 'plundra', gamesPlayed: 15, kills: 12, deaths:14, wins:1, place: 7, description:''},
  {id: 3, nickname: 'dalurka', gamesPlayed: 10, kills: 4, deaths:12, wins:3, place: 8, description:''},
  {id: 4, nickname: 'Schakkis', gamesPlayed: 10, kills: 6, deaths:13, wins:2, place: 9, description:'asd asd'},
  {id: 5, nickname: 'lollerlal', gamesPlayed: 14, kills: 3, deaths:11, wins:4, place: 10, description:''},
  {id: 1, nickname: 'Knirch', gamesPlayed: 15, kills: 7, deaths:15, wins:5, place: 11, description:''},
  {id: 2, nickname: 'plundra', gamesPlayed: 15, kills: 12, deaths:14, wins:1, place: 12, description:''},
  {id: 3, nickname: 'dalurka', gamesPlayed: 10, kills: 4, deaths:12, wins:3, place: 13, description:''},
  {id: 4, nickname: 'Schakkis', gamesPlayed: 10, kills: 6, deaths:13, wins:2, place: 14, description:'asd asd'},
  {id: 5, nickname: 'lollerlal', gamesPlayed: 14, kills: 3, deaths:11, wins:4, place: 15, description:''},
]
*/
@Injectable()
export class PlayerService {
  private playersURL = 'https://nodev.se/highscore.json';

  constructor(private http: Http) { }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.playersURL)
               .toPromise()
               .then(response => response.json() as Player[])
               .catch(this.handleError);

    //return Promise.resolve(PLAYERS);
  }

/*  getPlayersSlowly(): Promise<Player[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getPlayers()), 2000);
    });
  }
*/
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
