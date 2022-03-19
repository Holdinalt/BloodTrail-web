import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NavbarPiece, NavOption} from "../../models/navbarPiece";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() navChanged = new EventEmitter<string>();
  navbar: NavbarPiece[] = [new NavbarPiece('', [new NavOption('', '')])];
  altMenu: NavOption[] = [new NavOption('', '')];
  nowSelector: string = '';

  constructor() {}

  ngOnInit(): void {

    this.navbar = [];

    this.addToNavbar(new NavbarPiece('Стримы', [
      new NavOption('Twitch', 'stream/twitch'),
      new NavOption('Trovo', 'stream/trovo')
    ]));
    this.addToNavbar(new NavbarPiece('Музыка', [
      new NavOption('Spotify', 'music/spotify')
    ]));
    this.addToNavbar(new NavbarPiece('Игры', [
      new NavOption('League of Legends', 'game/lol')
    ]))

  }

  addToNavbar(piece: NavbarPiece): void{
    this.navbar.push(piece);
  }

  showAltMenu(id: number): void{
    this.altMenu = this.navbar[id].options;
  }
}
