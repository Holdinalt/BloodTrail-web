import {CardModel} from "./card.model";
import {ConfigurationManagerService} from "../../services/configuration-manager.service";

export class PredictionCardModel extends CardModel{

  description = "";

  constructor(private cfg: ConfigurationManagerService,
              private game: string,
              _id: number,
              _name?: string,
              _description?: string,
              _required?: boolean
  ) {

    super();

    this.id = _id;

    if(_name){
      this.name = _name;
    }

    if(_description){
      this.description = _description;
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
    this.cfg.addNewEditOption('gamePrediction' + this.game + 'Card' + this.id + 'Required', String(b))
  }

  public override get required(){
    return this._required
  }
}
