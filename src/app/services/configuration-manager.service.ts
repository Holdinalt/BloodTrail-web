import { Injectable } from '@angular/core';
import {MessageToChatCardModel} from "../models/message-to-chat-card.model";
import {MessagesBlockModel} from "../models/messages-block.model";
import {ServerHandlerService} from "./server-handler.service";
import {OptionModel} from "../models/option.model";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationManagerService {

  editedOptionsMap = new Map<string, string>();

  messagesBlocks = new Map<string, MessagesBlockModel>();

  constructor(private server: ServerHandlerService) {

    // temp
    this.messagesBlocks.set('league-of-legends',
        new MessagesBlockModel(
            [new MessageToChatCardModel(0, 'Cмерть', 'КАКУМЕР KEKWait'),
              new MessageToChatCardModel(1, 'Cоло убийство', 'Пентакилл'),
              new MessageToChatCardModel(2, 'Пентакилл', 'INHUMAN REACTION')
              //new MessageToChat(3, 'Кража дракона', 'Легчайший дрейк EZ')
            ],
          false,
          5000
        )
      );

  }

  getMessagesBlock(game: string): MessagesBlockModel{
    let block = this.messagesBlocks.get(game);

    if(block){
      return block;
    } else{
      return new MessagesBlockModel([new MessageToChatCardModel(0)]);
    }
  }

  loadOptions(): void{
    try {
      // делать
    }
    catch (e){
      console.log("Неудачная загрузка настроек", e)
    }
  }

  addNewEditOption(key: string, value: string): void{
    this.editedOptionsMap.set(key, value);
  }

  eraseEditedOption(key: string){
    this.editedOptionsMap.delete(key);
  }

  saveEditedOptions(){

    // TODO: must be Observable

    let optMap = new Map(this.editedOptionsMap);
    let options: OptionModel[] = []

    for (let key in optMap.keys()){
      // @ts-ignore
      options.push(new OptionModel(key, optMap.get(key)));
    }

    this.server.saveOptions(options);
  }

}
