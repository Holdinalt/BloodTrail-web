import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';
import {SpoilerModel} from "./spoiler.model";

@Directive({
  selector: '[spoilerToggle]'
})
export class SpoilerToggleDirective implements AfterViewInit{

  constructor(private element: ElementRef) { }

  @Input() isHidden = false;
  @Input() ContentRef? :HTMLElement;

  ngAfterViewInit(): void {
    if(this.isHidden){
      this.toggleSpoiler();
    }
  }

  @HostListener('click') toggleSpoiler(){

    if(this.ContentRef){

      if(this.ContentRef.classList.contains("closed")){
        SpoilerModel.showSpoiler(this.ContentRef);
      }else {
        SpoilerModel.hideSpoiler(this.ContentRef);
      }

    }

    if(this.ContentRef?.classList.contains("closed")){
      SpoilerModel.closeSpoilerImg(this.element.nativeElement)
    }else{
      SpoilerModel.openSpoilerImg(this.element.nativeElement)
    }

  }

}
