import { Injectable } from '@angular/core';
import {MessageToChat} from "./models/message-to-chat.model";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationManagerService {

  messagesToChat = new Map<string, MessageToChat[]>();

  constructor() {


    // temp
    this.messagesToChat.set('league-of-legends',
      [
        new MessageToChat(0, 'Cмерть', 'КАКУМЕР KEKWait'),
        new MessageToChat(1, 'Cоло убийство', 'Пентакилл'),
        new MessageToChat(2, 'Пентакилл', 'INHUMAN REACTION'),
        //new MessageToChat(3, 'Кража дракона', 'Легчайший дрейк EZ')
      ]);

  }

  getMessagesToChat(game: string): MessageToChat[]{
    if(this.messagesToChat.has(game)){
      // @ts-ignore
      return this.messagesToChat.get(game);
    } else{
      return [];
    }
  }

  setConfiguration(key: string, option: string): void{
    //Server things
  }
}
