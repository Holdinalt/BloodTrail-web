import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueOfLegendsComponent } from './league-of-legends/league-of-legends.component';
import {ConfigurationManagerService} from "../../configuration-manager.service";


@NgModule({
  declarations: [
    LeagueOfLegendsComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ConfigurationManagerService
  ]
})
export class GamesModule { }
