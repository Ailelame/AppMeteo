// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import { Observable } from 'rxjs/Observable';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { MeteoApiGlobal } from '../models/meteoApi-global.model';

// Models
// Importez vos models ici

@Injectable()
export class MeteoApi {

    public baseUrl: string = 'http://www.prevision-meteo.ch/services/json/lille';
    public result : string;
    public meteoAll : any;
    public objectMeteo : Object;
    public city_info : Object;
    public current_condition : Object;

    


    constructor(public http: Http) { }

    public getMeteo() {

    	

    	this.http.get(this.baseUrl).
	      map(res => res.json()).
	      subscribe(data=>{
	      //	console.log("ohé ===>",JSON.stringify(data));
	     	 

	      	this.result=JSON.stringify(data);
	      //	console.log(this.result)

			this.objectMeteo = JSON.parse(this.result);
		//	console.log('l"objet =>', this.objectMeteo)
		
			this.city_info =this.objectMeteo['city_info']
			this.current_condition =this.objectMeteo['current_condition']

	//		console.log('l\'objet =>', this.objectMeteo['city_info'])

	//		console.log('city_info', this.city_info)


			this.getResult();

			

			




	    });
    	
    	//console.table('result ===>' + this.result); 
    
    

    }
    getResult(){
    	console.log("object Meteo =>",this.objectMeteo)
    	console.log("city_info =>",this.city_info)
    	console.log("current condition ==>",this.current_condition)
    	console.log("what about elevation => " , this.city_info['elevation'])
    }


	getObj(string){
		return this.objectMeteo = JSON.parse(string);


    	}








}

/*    return new Promise(resolve => {

      this.http.get('https://randomuser.me/api/?results=10')
        .map(res => res.json())
        .subscribe(data => {
          this.data1 = data.results;
          resolve(this.data1);
});



	       for(let i = 0; i < count; i++) {
	        	
	        this.pushInArray(data.keys);
	   	}
	    	Object.keys(data).forEach(function (key) {
			  let obj = data[key];
		//	  this.result.push(obj);
			  console.log(obj);
			});


	      	 var count = Object.keys(data).length;
 			 console.log(count);
	       

		



*/

