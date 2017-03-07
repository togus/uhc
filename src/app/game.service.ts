import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Game } from './game';

@Injectable()
export class GameService {
  private gameListURL = 'https://nodev.se/data/hs2017.json'
  private gameBaseURL = 'https://nodev.se/data/'

  constructor(private http: Http) { }

  getGamesList() {
    return this.http.get(this.gameListURL)
               .toPromise()
               .then(response => response.json().games as String[])
               .catch(this.handleError);
  }

  getGameData(game: String) {
    return this.http.get(this.gameBaseURL+game+'.json')
               .toPromise()
               .then(response => response.json() as Game)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
