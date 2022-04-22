import {CardModel} from "./card.model";

export class MessageToChatCardModel extends CardModel{

  constructor(public id: number, _name?: string, _message?: string) {

    super();

    if(_name){
      this.name = _name;
    }

    if(_message){
      this.message = _message;
    }
  }

  turnOnOff(): void{
    this.required = !this.required;
  }
}
