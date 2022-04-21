import { Injectable } from '@angular/core';
import {MessageToChat} from "./models/message-to-chat.model";
import {MessagesBlockModel} from "./models/messages-block.model";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationManagerService {

  messagesBlocks = new Map<string, MessagesBlockModel>();

  constructor() {

    // temp
    this.messagesBlocks.set('league-of-legends',
        new MessagesBlockModel(
            [new MessageToChat(0, 'Cмерть', 'КАКУМЕР KEKWait'),
              new MessageToChat(1, 'Cоло убийство', 'Пентакилл'),
              new MessageToChat(2, 'Пентакилл', 'INHUMAN REACTION')
              //new MessageToChat(3, 'Кража дракона', 'Легчайший дрейк EZ')
            ]
        )
      );

  }

  getMessagesBlock(game: string): MessagesBlockModel{
    let block = this.messagesBlocks.get(game);

    if(block){
      return block;
    } else{
      return new MessagesBlockModel([new MessageToChat(0)]);
    }
  }

  setConfiguration(key: string, option: string): void{
    //Server things
  }
}
