import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueOfLegendsComponent } from './league-of-legends/league-of-legends.component';
import {ConfigurationManagerService} from "../../services/configuration-manager.service";
import {FormsModule} from "@angular/forms";
import {SpoilerControlDirective} from "../../directives/spoiler/spoiler-control.directive";
import {SpoilerToggleDirective} from "../../directives/spoiler/spoiler-toggle.directive";
import {PopUpDirective} from "../../directives/pop-up.directive";


@NgModule({
  declarations: [
    LeagueOfLegendsComponent,
    SpoilerControlDirective,
    SpoilerToggleDirective,
    PopUpDirective
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
