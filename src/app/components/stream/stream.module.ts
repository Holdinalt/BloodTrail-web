import { NgModule } from '@angular/core';
import {TwitchComponent} from "./twitch/twitch.component";
import { TrovoComponent } from './trovo/trovo.component';



@NgModule({
  declarations: [
    TwitchComponent,
    TrovoComponent
  ],
  exports: [
  ],
  imports: []
})
export class StreamModule { }
