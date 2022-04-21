import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueOfLegendsComponent } from './league-of-legends/league-of-legends.component';
import {ConfigurationManagerService} from "../../configuration-manager.service";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LeagueOfLegendsComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
    ],
  providers: [
    ConfigurationManagerService
  ]
})
export class GamesModule { }
