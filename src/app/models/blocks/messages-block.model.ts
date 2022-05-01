import {MessageToChatCardModel} from "../cards/message-to-chat-card.model";
import {BlockModel} from "./block.model";
import {ConfigurationManagerService} from "../../services/configuration-manager.service";

export class MessagesBlockModel extends BlockModel{

  delay?: number;

  messages: MessageToChatCardModel[]

  // TODO cfg

  constructor(cfg: ConfigurationManagerService, _messages: MessageToChatCardModel[], _required?: boolean, _delay?: number, _name?: string) {

    super()

    this.name = "Сообщения в чат"

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

  public override set required(b: boolean){
    this._required = b;
  }

  public override get required(){
    return this._required;
  }
}
