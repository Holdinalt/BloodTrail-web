import {CardModel} from "./card.model";
import {ConfigurationManagerService} from "../../services/configuration-manager.service";

export class MessageToChatCardModel extends CardModel{

  _message = "";

  //TODO cfg

  constructor(private cfg: ConfigurationManagerService,
              private game: string,
              _id: number,
              _name?: string,
              _message?: string,
              _required?: boolean) {

    super();

    this.id = _id;

    if(_name){
      this.name = _name;
    }

    if(_message){
      this._message = _message;
    }

    if(_required){
      this._required = _required;
    }
  }

  override toggle(): void{
    this.required = !this.required;
  }

  public override set required(b: boolean){
    this._required = b;
    this.cfg.addNewEditOption('gameMessage' + this.game + 'Card' + this.id + 'Required', String(b))
  }

  public override get required(){
    return this._required
  }

  public set message(mess: string){
    this._message = mess;
    this.cfg.addNewEditOption('gameMessage' + this.game + 'Card' + this.id + 'Message', mess)
  }

  public get message(){
    return this._message
  }

}
