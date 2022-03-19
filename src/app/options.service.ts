
export class OptionsService {

  optionsMap: Map<string, string> = new Map();

  constructor() {}

  loadOptions(): void{
    try {
      // делать
    }
    catch (e){
      console.log("Неудачная загрузка настроек", e)
    }
  }

  SaveOption(key: string, value: string): void{
    try {
      // сервер
      this.optionsMap.set(key, value);
    }
    catch (e){
      console.log("Неудачное сохранение настройки", e)
    }

  }
}
