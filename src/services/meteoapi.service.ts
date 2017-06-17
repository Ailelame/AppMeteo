// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';



@Injectable()
export class MeteoApi {

    public baseUrl: string = 'http://www.prevision-meteo.ch/services/json/';
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
    lat;
    long;
    forecastMeteo : any[] = [];


    constructor(public http: Http) { }

    public getMeteoVille(ville) {
        this.baseUrl='http://www.prevision-meteo.ch/services/json/'
    	this.baseUrl=this.baseUrl+ville
        this.initObjects()
        console.log(ville)
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

      public getMeteoCoords(lat,long) {
          let indexLat = lat.indexOf('.')
          console.log("l'index lat de la , est "+indexLat)
          indexLat = indexLat+4
             console.log("le nouveau est "+ indexLat) 
          let latitude= lat.substring(0,indexLat)

          console.log("la latitude envoyée est =>"+latitude)


          let indexLong = long.indexOf('.')
          console.log("l'index lat de la , est "+indexLong)

          indexLong = indexLong+4
          let longitude= long.substring(0,indexLong)
          console.log("la latitude envoyée est =>"+longitude)

          let recherche = 'lat='+latitude+'lng='+longitude

        this.baseUrl='http://www.prevision-meteo.ch/services/json/'
        this.baseUrl=this.baseUrl+recherche
        console.log("l'url construite est "+this.baseUrl)
        this.initObjects()
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

    initObjects(){
        this.objectMeteo=[]
        this.city_info=[]
        this.current_condition=[]
        this.j0=[]
        this.j1=[]
        this.j2=[]
        this.j3=[]
        this.j4=[]
        this.forecastMeteo=[]

    }






}