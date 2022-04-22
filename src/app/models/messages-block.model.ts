import {MessageToChatCardModel} from "./message-to-chat-card.model";
import {BlockModel} from "./block.model";

export class MessagesBlockModel extends BlockModel{

  delay?: number;

  messages: MessageToChatCardModel[]

  constructor(_messages: MessageToChatCardModel[], _required?: boolean,_delay?: number, _name?: string) {

    super()

    this.messages = _messages;

    if(_required){
      this.required = _required;
    }

    if(_name){
      this.name = _name;
    }

    if(_delay){
      this.delay = _delay;
    }

  }
}
