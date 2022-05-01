import { Injectable } from '@angular/core';
import {MessageToChatCardModel} from "../models/cards/message-to-chat-card.model";
import {MessagesBlockModel} from "../models/blocks/messages-block.model";
import {ServerHandlerService} from "./server-handler.service";
import {OptionModel} from "../models/option.model";
import {PredictionBlockModel} from "../models/blocks/prediction-block.model";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationManagerService {

  editedOptionsMap = new Map<string, string>();

  messagesBlocks = new Map<string, MessagesBlockModel>();
  predictionBlocks = new Map<string, PredictionBlockModel>();

  constructor(private server: ServerHandlerService) {

    // temp // Переделать
    this.messagesBlocks.set('league-of-legends',
        new MessagesBlockModel(this,
            [new MessageToChatCardModel(0, 'Cмерть', 'КАКУМЕР KEKWait', true),
              new MessageToChatCardModel(1, 'Cоло убийство', 'Пентакилл', true),
              new MessageToChatCardModel(2, 'Пентакилл', 'INHUMAN REACTION', true)
              //new MessageToChat(3, 'Кража дракона', 'Легчайший дрейк EZ')
            ],
          true,
          5000
        )
      );


    let predModel = new PredictionBlockModel (this, 'LOL', true);
    predModel.addNewPredictionCard(0, 'Вин или Луз?', 'Матч закончится поражением или победой?', true);
    predModel.addNewPredictionCard(1, 'Убийства', 'Убийств будет больше #randomKills#?', true);
    predModel.addNewPredictionCard(2, 'Смерти', 'Смертей будет меньше #randomDeath#?', false)

    this.predictionBlocks.set('league-of-legends',predModel)



  }

  getMessagesBlock(game: string): MessagesBlockModel | undefined{
    let block = this.messagesBlocks.get(game);

    if(block){
      return block;
    } else{
      return undefined;
    }
  }

  getPredictionBlock(game: string): PredictionBlockModel | undefined{
    let block = this.predictionBlocks.get(game);

    if(block){
      return block;
    } else{
      return undefined;
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
    console.log('New option added ' + key + ' = ' + value);
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
