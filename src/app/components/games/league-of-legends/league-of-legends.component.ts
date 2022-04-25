import {Component} from '@angular/core';
import {ConfigurationManagerService} from "../../../services/configuration-manager.service";
import {MessageToChatCardModel} from "../../../models/message-to-chat-card.model";
import {MessagesBlockModel} from "../../../models/messages-block.model";


@Component({
  selector: 'app-league-of-legends',
  templateUrl: './league-of-legends.component.html',
  styleUrls: ['./league-of-legends.component.css']
})
export class LeagueOfLegendsComponent{

  public messagesBlock: MessagesBlockModel = new MessagesBlockModel([new MessageToChatCardModel(0)]);

  constructor(configurationManagerService: ConfigurationManagerService) {
    this.messagesBlock = configurationManagerService.getMessagesBlock('league-of-legends');
  }

}
