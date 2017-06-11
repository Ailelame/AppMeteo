import { Injectable, Pipe } from '@angular/core';

@Pipe({
	name:'JsonObjectToArray'
})

@Injectable()

export class JsonObjectToArray {
	
	transform(obj: any) {
    let result = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
      }
    }
    return result;
  }
}



