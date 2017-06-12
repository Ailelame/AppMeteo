// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

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
    public j0: Object;
    j1: Object;
    j2: Object;
    j3: Object;
    j4: Object;
    
    forecastMeteo : any[] = [];


    constructor(public http: Http) { }

    public getMeteo() {
    	

    	this.http.get(this.baseUrl).
	      map(res => res.json()).
	      subscribe(data=>{    	 
	      	this.result=JSON.stringify(data);
			this.objectMeteo = JSON.parse(this.result);
			this.city_info =this.objectMeteo['city_info']
			this.current_condition =this.objectMeteo['current_condition']
			this.j0 = this.objectMeteo['fcst_day_0'];
			this.j1 = this.objectMeteo['fcst_day_1'];
			this.j2 = this.objectMeteo['fcst_day_2'];
			this.j3 = this.objectMeteo['fcst_day_3'];
			this.j4 = this.objectMeteo['fcst_day_4'];

			this.transformMeteoToUsable()
			this.myObjects()
			


	    });
    }



	getObj(string){
		return this.objectMeteo = JSON.parse(string);


    	}

    transformMeteoToUsable(){
		
		this.forecastMeteo.push(this.j0);
		this.forecastMeteo.push(this.j1);
		this.forecastMeteo.push(this.j2);
		this.forecastMeteo.push(this.j3);
		this.forecastMeteo.push(this.j4);

	

    }

    myObjects(){
    		console.log('l\'objet city_info =>', this.objectMeteo['city_info'])
            console.log('l\'objet current_condition =>', this.objectMeteo['current_condition'])
            console.log('l\'objet forecast aujourd\'hui =>', this.objectMeteo['fcst_day_0'])
            console.log('l\'objet forecast demain =>', this.objectMeteo['fcst_day_1'])
            console.log('l\'objet forecast j+2 =>', this.objectMeteo['fcst_day_2'])
            console.log('l\'objet forecast j+3 =>', this.objectMeteo['fcst_day_3'])
            console.log('l\'objet forecast j+4 =>', this.objectMeteo['fcst_day_4'])
    }






}