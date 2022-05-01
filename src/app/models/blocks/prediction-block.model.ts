import {BlockModel} from "./block.model";
import {PredictionCardModel} from "../cards/prediction-card.model";
import {ConfigurationManagerService} from "../../services/configuration-manager.service";

export class PredictionBlockModel extends BlockModel{

  public cards: PredictionCardModel[] = [];

  constructor(private cfg: ConfigurationManagerService, private game: string, _required?: boolean, _name?: string) {
    super();

    this.name = "Предсказания";

    if(_required){
      this._required = _required;
    }

    if(_name){
      this.name = _name;
    }
  }

  public addNewPredictionCard(id: number, name: string, description: string, required: boolean){
    this.cards?.push(new PredictionCardModel(
      this.cfg, this.game, id, name, description, required
    ))
  }

  public override set required(b: boolean){
    this._required = b;
    this.cfg.addNewEditOption('gamePrediction' + this.game + 'Block' + 'Required', String(b))
  }

  public override get required(){
    return this._required;
  }

}
