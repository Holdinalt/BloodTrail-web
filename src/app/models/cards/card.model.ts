export abstract class CardModel{
  id = -1;
  name = 'Not Stated';
  protected _required = false;

  toggle(): void{
    this._required = !this._required;
  }

  public set required(b: boolean){
    this._required = b;
  }

  public get required(){
    return this._required
  }
}
