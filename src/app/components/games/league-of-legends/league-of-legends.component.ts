import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ConfigurationManagerService} from "../../../services/configuration-manager.service";
import {MessageToChatCardModel} from "../../../models/message-to-chat-card.model";
import {MessagesBlockModel} from "../../../models/messages-block.model";
// import {SpoilerDirective} from "../../../directives/spoiler.directive";

@Component({
  selector: 'app-league-of-legends',
  templateUrl: './league-of-legends.component.html',
  styleUrls: ['./league-of-legends.component.css']
})
export class LeagueOfLegendsComponent implements AfterViewInit{

  // @ts-ignore
  @ViewChild('chatMessagesSpoilerContent') chatMessagesSpoilerContent: ElementRef;
  // @ts-ignore
  @ViewChild('chatMessagesSpoilerControl') chatMessagesSpoilerControl: ElementRef;

  public messagesBlock: MessagesBlockModel = new MessagesBlockModel([new MessageToChatCardModel(0)]);

  constructor(configurationManagerService: ConfigurationManagerService) {
    this.messagesBlock = configurationManagerService.getMessagesBlock('league-of-legends');
  }

  ngAfterViewInit(): void {

    console.log(this.messagesBlock.required)

    if (!this.messagesBlock.required) {
      this.toggleSpoiler(this.chatMessagesSpoilerContent.nativeElement, this.chatMessagesSpoilerControl.nativeElement)
    }

  }


  toggleSpoiler(elem: HTMLElement, control: HTMLElement){
    console.log(this.messagesBlock.required)
    // @ts-ignore
    if(elem.classList.contains("closed")){
      elem.classList.remove("closed");
      elem.classList.add("opened");
      elem.style.marginBottom = "inherit";
      // elem.style.height = "inherit";

    } else{
      elem.classList.remove("opened")
      elem.classList.add("closed")
      elem.style.marginBottom = String(-elem.offsetHeight) + "px";
      // elem.style.height = "0";

    }
    this.toggleSpoilerImg(control);
  }


  toggleSpoilerImg(img: HTMLElement){
    if(img.style.transform){
      img.style.transform = '';
    } else{
      img.style.transform = 'rotate(' + 180 + 'deg)';
    }
  }

  toggleBlock(block: MessagesBlockModel, content: HTMLElement, spoilerControl: HTMLElement){

    if(
      !content.classList.contains("closed") && block.required ||
      content.classList.contains("closed") && !block.required
    ){
      this.toggleSpoiler(content, spoilerControl);
    }

    block.required = !block.required;
  }
}
