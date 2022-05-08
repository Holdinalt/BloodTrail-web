import { Component} from '@angular/core';
import {ConfigurationManagerService} from "../../services/configuration-manager.service";

@Component({
  selector: 'app-changes-conformer',
  templateUrl: './changes-conformer.component.html',
  styleUrls: ['./changes-conformer.component.css']
})
export class ChangesConformerComponent{

  required = false;

  constructor(private cfg: ConfigurationManagerService) {


    this.cfg.notifierAboutChanges.subscribe(x=> {
      if(x){
        this.showConformer();
      } else {
        this.hideConformer();
      }
    })


  }

  public showConformer(){
    this.required = true;
  }

  private hideConformer(){
    this.required = false;
  }

  public saveChanges(){
    this.cfg.saveEditedOptions();
    this.hideConformer();
  }

  public clearChanges(){
    this.cfg.deleteEditedOptions();
    this.hideConformer();
  }

}
