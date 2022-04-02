import { Component, OnInit } from '@angular/core';
import {ConfigurationManagerService} from "../../../configuration-manager.service";
import {MessageToChat} from "../../../models/message-to-chat.model";

@Component({
  selector: 'app-league-of-legends',
  templateUrl: './league-of-legends.component.html',
  styleUrls: ['./league-of-legends.component.css']
})
export class LeagueOfLegendsComponent implements OnInit {

  public messagesToChat: MessageToChat[] = [];

  constructor(configurationManagerService: ConfigurationManagerService) {
    this.messagesToChat = configurationManagerService.getMessagesToChat('league-of-legends');
  }

  ngOnInit(): void {
  }

}
