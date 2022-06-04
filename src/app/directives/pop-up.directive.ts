import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[PopUp]'
})
export class PopUpDirective implements AfterViewInit{

  popUpHTML: HTMLElement;
  @Input() popUpOpener?: HTMLElement
  @Input() popUpCloser1?: HTMLElement
  @Input() popUpCloser2?: HTMLElement

  ngAfterViewInit(): void {
    if(this.popUpHTML){
      this.popUpHTML.classList.add('overlay');
      this.popUpHTML.classList.add('hidden')
    }
    this.popUpCloser1?.addEventListener('click', () => this.hidePopUp())
    this.popUpCloser2?.addEventListener('click', () => this.hidePopUp())
    this.popUpOpener?.addEventListener('click', () => this.showPopUp())
  }

  constructor(private elemRef: ElementRef) {
    this.popUpHTML = elemRef.nativeElement as HTMLElement
  }

  showPopUp(){
    if(this.popUpHTML){
      this.popUpHTML.classList.remove('hidden')
      this.popUpHTML.classList.add('show')
      document.body.style.overflow = 'hidden'
    }

  }

  hidePopUp(){
    if(this.popUpHTML){
      this.popUpHTML.classList.remove('show')
      this.popUpHTML.classList.add('hidden')
      document.body.style.overflow = ''
    }

  }


}
