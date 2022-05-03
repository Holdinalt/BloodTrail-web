import {MessageToChatCardModel} from "../cards/message-to-chat-card.model";
import {BlockModel} from "./block.model";
import {ConfigurationManagerService} from "../../services/configuration-manager.service";

export class MessagesBlockModel extends BlockModel{

  _delay = 0;

  messages: MessageToChatCardModel[] = [];

  constructor(private cfg: ConfigurationManagerService,
              private game: string,
              _required?: boolean,
              _delay?: number,
              _name?: string) {

    super()

    this.name = "Сообщения в чат"

    if(_required){
      this._required = _required;
    }

    if(_name){
      this.name = _name;
    }

    if(_delay){
      this._delay = _delay;
    }

  }

  public addNewMessageCard(id: number, name?: string, message?: string, required?: boolean){
    this.messages?.push(new MessageToChatCardModel(
      this.cfg, this.game, id, name, message, required
    ))
  }

  public override set required(b: boolean){
    this._required = b;
    this.cfg.addNewEditOption('gameMessage' + this.game + 'Block' + 'Required', String(b));
  }

  public override get required(){
    return this._required;
  }

  public set delay(delay: number){
    this._delay = delay;
    this.cfg.addNewEditOption('gameMessage' + this.game + 'Block' + 'Delay', String(delay));
  }

  public get delay(){
    return this._delay;
  }
}
