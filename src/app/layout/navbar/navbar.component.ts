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

    this.addToNavbar(new NavbarPiece('Стрим', [
      new NavOption('Twitch', 'stream/twitch', 'assets/icons/twitch-icon.svg'),
      new NavOption('Trovo', 'stream/trovo', 'assets/icons/trovo-icon.svg')
    ]));
    this.addToNavbar(new NavbarPiece('Музыка', [
      new NavOption('Spotify', 'music/spotify', 'assets/icons/spotify-icon.svg'),
      // new NavOption('Яндекс Музыка', 'music/yandexmusic'),
      // new NavOption('YouTube', 'music/youtube', 'assets/icons/youtube.svg')
    ]));
    this.addToNavbar(new NavbarPiece('Игры', [
      new NavOption('League of Legends', 'game/lol', 'assets/icons/league-of-legends-icon.svg'),
      // new NavOption('Teamfight Tactics', 'game/tft', 'assets/icons/tft-icon.svg')
    ]))
    this.addToNavbar(new NavbarPiece('Подключения', [
      new NavOption('DonationAlerts', 'connections/donationalerts', 'assets/icons/')
    ]))

  }

  addToNavbar(piece: NavbarPiece): void{
    this.navbar.push(piece);
  }

  showAltMenu(id: number): void{
    this.altMenu = this.navbar[id].options;
  }
}
