import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TwitchComponent} from "./components/stream/twitch/twitch.component";
import {TrovoComponent} from "./components/stream/trovo/trovo.component";
import {LeagueOfLegendsComponent} from "./components/games/league-of-legends/league-of-legends.component";
import {ControlPanelComponent} from "./components/control-panel/control-panel.component";

const appRoutes: Routes = [
  {path: 'stream/twitch', component: TwitchComponent},
  {path: 'stream/trovo', component: TrovoComponent},
  {path: 'game/league-of-legends', component: LeagueOfLegendsComponent},
  {path: 'panel', component: ControlPanelComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
