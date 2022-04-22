import {HttpClient} from "@angular/common/http";
import {OptionModel} from "../models/option.model";
import {Injectable} from "@angular/core";

@Injectable()

export class ServerHandlerService{

  constructor(http: HttpClient) {
  }

  saveOptions(options: OptionModel[]){
    // some server things
  }
}
