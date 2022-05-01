
export abstract class BlockModel{
  name = 'Not Stated'
  _required = false;

  toggle(): void{
    this.required = !this.required;
  }

  public set required(b: boolean){
    this._required = b;
  }

  public get required(){
    return this._required;
  }
}
