import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.module";
import {StreamModule} from "./components/stream/stream.module";
import {GamesModule} from "./components/games/games.module";
import {NavPanelHandlerService} from "./services/nav-panel-handler.service";
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import {ServerHandlerService} from "./services/server-handler.service";
import {HttpClientModule} from "@angular/common/http";

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NavPanelHandlerService,
    ServerHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
