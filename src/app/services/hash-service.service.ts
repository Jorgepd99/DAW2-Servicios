import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashServiceService {

  constructor() { }

  hash(message: String, option: String): String {
    switch(option) {
      case 'Pasar a mayúsculas':
        return message.toUpperCase();
        break;
      case 'Tamaño del texto':
        return "El texto introducido tiene " + message.length.toString() + " caracteres";
        break;
      case 'Pasar a minúsculas':
        return message.toLowerCase();
        break;

      case 'Los diez primeros caracteres':
        return message.substring(0,10);
        break;
        case 'Los diez últimos caracteres':
          return message.substring(message.length-10,message.length+1);
          break;
      case '':
        return "Seleccione una opción";
        break;
      default:
        return "Algoritmo no reconocido";
    }
    return "";
  }
}
