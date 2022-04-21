import {MessageToChat} from "./message-to-chat.model";

export class MessagesBlockModel {

  name = 'Сообщения в чат'
  delay?: number;
  required = true;

  messages: MessageToChat[]

  constructor(_messages: MessageToChat[], _required?: boolean,_delay?: number, _name?: string) {

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
