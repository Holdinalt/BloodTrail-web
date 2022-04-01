import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.module";
import {StreamModule} from "./components/stream/stream.module";
import {OptionsService} from "./options.service";
import {GamesModule} from "./components/games/games.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    StreamModule,
    GamesModule,
    AppRoutingModule
  ],
  providers: [OptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
