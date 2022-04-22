import {Component} from '@angular/core';
import {NavbarPieceModel, NavOption} from "../../models/navbar-piece.model";
import {NavPanelHandlerService} from "../../services/nav-panel-handler.service";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  navbar: NavbarPieceModel[] = [new NavbarPieceModel('', [new NavOption('', '', '')])];

  constructor(private navPanelHandlerService: NavPanelHandlerService) {

    this.navbar = navPanelHandlerService.getNavbarPieces();

  }

  // showAltMenu(id: number): void{
  //   this.altMenu = this.navbar[id].options;
  // }
}
