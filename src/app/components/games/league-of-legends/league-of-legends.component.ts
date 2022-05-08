import {Component} from '@angular/core';
import {ConfigurationManagerService} from "../../../services/configuration-manager.service";
import {MessagesBlockModel} from "../../../models/blocks/messages-block.model";
import {PredictionBlockModel} from "../../../models/blocks/prediction-block.model";


@Component({
  selector: 'app-league-of-legends',
  templateUrl: './league-of-legends.component.html',
  styleUrls: ['./league-of-legends.component.css']
})
export class LeagueOfLegendsComponent{

  public messagesBlock?: MessagesBlockModel;
  public predictionBlock?: PredictionBlockModel;

  constructor(configurationManagerService: ConfigurationManagerService) {
    this.messagesBlock = configurationManagerService.getMessagesBlock('league-of-legends');
    this.predictionBlock = configurationManagerService.getPredictionBlock('league-of-legends');
    console.log(this.messagesBlock)

    configurationManagerService.notifierUpdate.subscribe(x=>{
      if(x){
        this.messagesBlock = configurationManagerService.getMessagesBlock('league-of-legends');
        this.predictionBlock = configurationManagerService.getPredictionBlock('league-of-legends');
        console.log('updated')
        console.log(this.messagesBlock)
      }
    })
  }

}
