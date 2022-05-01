import {Directive, HostListener, Input} from '@angular/core';
import {SpoilerModel} from "./spoiler.model";
import {BlockModel} from "../../models/blocks/block.model";

@Directive({
  selector: '[spoilerControl]'
})
export class SpoilerControlDirective{


  @Input() ContentRef? :HTMLElement;
  @Input() ToggleRef? :HTMLElement;
  @Input() Block? :BlockModel;

  @HostListener('click') toggleSpoiler(){
    if(this.ContentRef && this.Block){

      this.Block.toggle();
      // console.log(this.Block)

      if(this.Block?.required){
        SpoilerModel.showSpoiler(this.ContentRef);
        if(this.ToggleRef){
          SpoilerModel.openSpoilerImg(this.ToggleRef)
        }
      } else{
        SpoilerModel.hideSpoiler(this.ContentRef);
        if(this.ToggleRef){
          SpoilerModel.closeSpoilerImg(this.ToggleRef)
        }
      }
    }
  }


}
