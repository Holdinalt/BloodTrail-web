import {NavbarPieceModel, NavOption} from "../models/navbar-piece.model";

export class NavPanelHandlerService {

  navbar: NavbarPieceModel[] = [new NavbarPieceModel('', [new NavOption('', '', '')])];

  constructor() {

    this.navbar = [];

    this.addToNavbar(new NavbarPieceModel('Стрим', [
      new NavOption('Twitch', 'Настройки интеграции с Twitch','stream/twitch', 'assets/icons/twitch-icon.svg'),
      new NavOption('Trovo','Настройки интеграции с Trovo', 'stream/trovo', 'assets/icons/trovo-icon.svg')
    ]));
    this.addToNavbar(new NavbarPieceModel('Музыка', [
      new NavOption('Spotify', 'Настройка интеграции музыки со Spotify','music/spotify', 'assets/icons/spotify-icon.svg'),
      // new NavOption('Яндекс Музыка', 'music/yandexmusic', 'assets/icons/yandex-music-icon.svg'),
      // new NavOption('YouTube', 'Настройка интеграции музыки с YouTube.', 'music/youtube', 'assets/icons/youtube.svg')
    ]));
    this.addToNavbar(new NavbarPieceModel('Игры', [
      new NavOption('League of Legends', 'Настройка интеграции с LoL', 'game/league-of-legends', 'assets/icons/league-of-legends-icon.svg'),
      // new NavOption('Teamfight Tactics', 'Настройка интеграции с TfT','game/tft', 'assets/icons/tft-icon.svg')
    ]))
    this.addToNavbar(new NavbarPieceModel('Подключения', [
      new NavOption('DonationAlerts', 'Настройка интеграции с DonationAlerts','connections/donationalerts', 'assets/icons/donation-alerts-icon.svg')
    ]))

  }

  addToNavbar(piece: NavbarPieceModel): void{
    this.navbar.push(piece);
  }

  getNavbarPieces(): NavbarPieceModel[]{
    return this.navbar;
  }

}
