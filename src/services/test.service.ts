import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class HttpProvider {

	result : Object;

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getJsonData(){
    return this.http.get('http://www.prevision-meteo.ch/services/json/lille').map(res => res.json()).subscribe(res => this.result = res);
  }








}




/*






// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';


// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { MeteoApiGlobal } from '../models/meteoApi-global.model';

// Models
// Importez vos models ici

@Injectable()
export class MeteoApi {

    public baseUrl: string = 'http://www.prevision-meteo.ch/services/json/lille';
    result:Object;
    
    constructor(public http: Http) { }

   
    

   public getMeteo() : Promise<MeteoApiGlobal> {


        const url = `${this.baseUrl}`;


        
        return this.http.get(url)
        .toPromise()
        .then(response => 
            	response.json() as MeteoApiGlobal)
        .catch(error => console.log('Une erreur est survenue ' + error))

}
		    

  


    public getCount(obj) {
    	var num = obj.lenght;
    	return num;

    }

*/