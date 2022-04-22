import { Component, OnInit } from '@angular/core';
import {NavPanelHandlerService} from "../../services/nav-panel-handler.service";
import {NavbarPieceModel} from "../../models/navbar-piece.model";

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  nav?: NavbarPieceModel[]

  constructor(public navPanelHandlerService: NavPanelHandlerService) {
    this.nav = navPanelHandlerService.getNavbarPieces();
  }

  ngOnInit(): void {
  }

}
