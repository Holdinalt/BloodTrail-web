import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.module";
import {StreamModule} from "./components/stream/stream.module";
import {OptionsService} from "./options.service";
import {GamesModule} from "./components/games/games.module";
import {NavPanelHandlerService} from "./nav-panel-handler.service";
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    StreamModule,
    GamesModule,
    AppRoutingModule
  ],
  providers: [
    OptionsService,
    NavPanelHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
