import { Injectable } from '@angular/core';
import {MessagesBlockModel} from "../models/blocks/messages-block.model";
import {ServerHandlerService} from "./server-handler.service";
import {OptionModel} from "../models/option.model";
import {PredictionBlockModel} from "../models/blocks/prediction-block.model";
import {ChangesConformerComponent} from "../layout/changes-conformer/changes-conformer.component";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationManagerService {

  editedOptionsMap = new Map<string, string>();

  messagesBlocks = new Map<string, MessagesBlockModel>();
  predictionBlocks = new Map<string, PredictionBlockModel>()

  private rollbackMessagesBocks?: Map<string, MessagesBlockModel>;
  private rollbackPredictionBlocks?: Map<string, PredictionBlockModel>;

  notifierAboutChanges = new Subject();
  notifierUpdate = new Subject();

  constructor(
    private server: ServerHandlerService,
              ) {

    // temp // Переделать

    let messModel = new MessagesBlockModel(this, 'LOL', true, 5000);
    messModel.addNewMessageCard(0, 'Cмерть', 'КАКУМЕР KEKWait', true);
    messModel.addNewMessageCard(1, 'Cоло убийство', 'Пентакилл', true);
    messModel.addNewMessageCard(2, 'Пентакилл', 'INHUMAN REACTION', true);

    this.messagesBlocks.set('league-of-legends', messModel)


    let predModel = new PredictionBlockModel (this, 'LOL', true);
    predModel.addNewPredictionCard(0, 'Вин или Луз?', 'Матч закончится поражением или победой?', true);
    predModel.addNewPredictionCard(1, 'Убийства', 'Убийств будет больше #randomKills#?', true);
    predModel.addNewPredictionCard(2, 'Смерти', 'Смертей будет меньше #randomDeath#?', false)

    this.predictionBlocks.set('league-of-legends',predModel)

    // this.createRollBack();
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

  // TODO доделать роллбеки
  // createRollBack(){
  //   this.rollbackMessagesBocks = new Map<string, MessagesBlockModel>(this.messagesBlocks);
  //   this.rollbackPredictionBlocks = new Map<string, PredictionBlockModel>(this.predictionBlocks);
  // }

  rollBack(){
    // if(this.rollbackMessagesBocks){
    //   this.messagesBlocks = this.rollbackMessagesBocks;
    //   this.rollbackMessagesBocks = undefined;
    //   console.log(this.messagesBlocks)
    // }
    //
    // if(this.rollbackPredictionBlocks){
    //   this.predictionBlocks = this.rollbackPredictionBlocks
    //   this.rollbackPredictionBlocks = undefined;
    // }

    this.loadOptions();

    this.notifierUpdate.next(true);
  }

  addNewEditOption(key: string, value: string): void{
    console.log('New option added ' + key + ' = ' + value);
    this.editedOptionsMap.set(key, value);
    this.notifierAboutChanges.next(true);
  }

  eraseEditedOption(key: string){
    this.editedOptionsMap.delete(key);
    // if(this.editedOptionsMap.)
  }

  deleteEditedOptions(){
    console.log('rollback')
    this.editedOptionsMap.clear();
    this.rollBack();
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
