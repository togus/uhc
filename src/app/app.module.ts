import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PlayerService } from './player.service';
import { PlayersComponent } from './players/players.component';
import { FooterComponent } from './footer/footer.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [{
      path: 'players',
      component: PlayersComponent
    },{
      path: 'leaderboard',
      component: LeaderboardComponent
    },{
      path: 'statistics',
      component: StatisticsComponent
    },{
      path: 'games',
      component: GamesComponent
    },{
      path: '',
      redirectTo: '/leaderboard',
      pathMatch: 'full'
    },];

@NgModule({
  declarations: [
    AppComponent,
    PlayerProfileComponent,
    LeaderboardComponent,
    PlayersComponent,
    FooterComponent,
    StatisticsComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

