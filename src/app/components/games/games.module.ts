import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueOfLegendsComponent } from './league-of-legends/league-of-legends.component';
import {ConfigurationManagerService} from "../../services/configuration-manager.service";
import {FormsModule} from "@angular/forms";
// import {SpoilerDirective} from "../../directives/spoiler.directive";


@NgModule({
  declarations: [
    LeagueOfLegendsComponent,
    // SpoilerDirective
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
