export class SpoilerModel{

  static hideSpoiler(elem: HTMLElement){
    elem.classList.remove("opened")
    elem.classList.add("closed")
    elem.style.marginBottom = String(-elem.offsetHeight) + "px";
  }

  static showSpoiler(elem: HTMLElement){
    elem.classList.remove("closed");
    elem.classList.add("opened");
    elem.style.marginBottom = "inherit";
  }

  static toggleSpoilerImg(img: HTMLElement){
    if(img.style.transform){
      this.openSpoilerImg(img)
    } else{
      this.closeSpoilerImg(img)
    }
  }

  static closeSpoilerImg(img: HTMLElement){
    img.style.transform = 'rotate(' + 180 + 'deg)';
  }

  static openSpoilerImg(img: HTMLElement){
    img.style.transform = '';
  }
}
