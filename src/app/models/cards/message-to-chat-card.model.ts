import {CardModel} from "./card.model";

export class MessageToChatCardModel extends CardModel{

  message = "";

  //TODO cfg

  constructor(_id: number, _name?: string, _message?: string, _required?: boolean) {

    super();

    this.id = _id;

    if(_name){
      this.name = _name;
    }

    if(_message){
      this.message = _message;
    }

    if(_required){
      this.required = _required;
    }
  }

  override toggle(): void{
    this.required = !this.required;
  }

  public override set required(b: boolean){
    this._required = b;
  }

  public override get required(){
    return this._required;
  }
}
