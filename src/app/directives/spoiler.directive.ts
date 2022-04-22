// import {Directive, ElementRef, Input, OnInit} from '@angular/core';
//
// @Directive({
//   selector: '[spoiler]'
// })
// export class SpoilerDirective implements OnInit{
//
//   @Input() isHidden = false;
//
//   constructor(private elementRef: ElementRef) {
//
//   }
//
//   ngOnInit(): void {
//     this.beSpoiler(this.elementRef.nativeElement);
//   }
//
//   beSpoiler(elem: HTMLElement){
//     if(this.isHidden){
//       this.hideSpoiler(elem);
//     } else{
//       this.showSpoiler(elem);
//     }
//   }
//
//   hideSpoiler(elem: HTMLElement){
//     elem.classList.remove("opened")
//     elem.classList.add("closed")
//     elem.style.height = "0";
//   }
//
//   showSpoiler(elem: HTMLElement){
//     elem.classList.remove("closed");
//     elem.classList.add("opened");
//     elem.style.marginBottom = "inherit";
//   }
//
// }
