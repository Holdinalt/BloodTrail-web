import { Component, OnInit } from '@angular/core';
import {ConfigurationManagerService} from "../../../configuration-manager.service";
import {MessageToChat} from "../../../models/message-to-chat.model";
import {MessagesBlockModel} from "../../../models/messages-block.model";

@Component({
  selector: 'app-league-of-legends',
  templateUrl: './league-of-legends.component.html',
  styleUrls: ['./league-of-legends.component.css']
})
export class LeagueOfLegendsComponent implements OnInit {

  public messagesBlock: MessagesBlockModel = new MessagesBlockModel([new MessageToChat(0)]);

  constructor(configurationManagerService: ConfigurationManagerService) {
    this.messagesBlock = configurationManagerService.getMessagesBlock('league-of-legends');
    console.log('yaej')
  }

  ngOnInit(): void {
  }


  toggleSpoiler(checkBox: HTMLElement, elem: HTMLElement, event: Event){
    // @ts-ignore
    if(!checkBox.checked){
      elem.classList.remove("closed");
      elem.classList.add("opened");
      elem.style.marginBottom = "inherit";

    } else{
      elem.classList.remove("opened")
      elem.classList.add("closed")
      elem.style.marginBottom = String(-elem.offsetHeight) + "px";

    }
    // @ts-ignore
    checkBox.checked = !checkBox.checked;
    this.toggleSpoilerImg(event.target as HTMLElement);

  }

  toggleSpoilerImg(img: HTMLElement){
    if(img.style.transform){
      img.style.transform = '';
    } else{
      img.style.transform = 'rotate(' + 180 + 'deg)';
    }
  }

}
