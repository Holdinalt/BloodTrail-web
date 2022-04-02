export class MessageToChat{
  name = 'null';
  message = 'no message';
  required = true;


  constructor(public id: number, _name?: string, _message?: string) {
    if(_name){
      this.name = _name;
    }

    if(_message){
      this.message = _message;
    }
  }

  turnOnOff(): void{
    this.required = !this.required;
  }
}
