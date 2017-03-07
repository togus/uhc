import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from './player';

@Injectable()
export class PlayerService {
  private playersURL = 'https://nodev.se/data/hs2017.json';

  constructor(private http: Http) { }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.playersURL)
               .toPromise()
               .then(response => response.json().highscore as Player[])
               .catch(this.handleError);
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
