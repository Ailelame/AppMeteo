// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import 'rxjs/add/operator/map'
import { LoadingController } from 'ionic-angular/index';

@Injectable()
export class MeteoApi {

    public baseUrl: string = 'http://www.prevision-meteo.ch/services/json/';
    public result : string;
    public meteoAll : any;
    public objectMeteo : Object;
    public city_info : Object;
    public current_condition : Object;
    public j0: Object;
    public j1: Object;
    public j2: Object;
    public j3: Object;
    public j4: Object;
    public lat;
    public long;
    public forecastMeteo : any[] = [];
    public verif : boolean = false;


    constructor(public http: Http, public loadingCtrl : LoadingController) { }

    public getMeteoVille(ville) {

       let loading = this.loadingCtrl.create({
          spinner : 'bubbles',
          content: 'Chargement en cours...'
        });

      loading.present();

      this.baseUrl='http://www.prevision-meteo.ch/services/json/'
    	this.baseUrl=this.baseUrl+ville
      this.initObjects()
      console.log(ville)
    	this.http.get(this.baseUrl).
	      map(res => res.json()).
	      subscribe(data=>{    	
          console.log("La recherche d'une ville est passée")
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
    			if(this.city_info!=undefined){
              this.verif=true
          }
          loading.dismiss();

	    });
    }

      public getMeteoCoords(lat,long) {
        let loading = this.loadingCtrl.create({
          spinner : 'bubbles',
          content: 'Chargement en cours...'
        });

        loading.present();


        //transformation de la lat long en variable à 3 décimales
          let indexLat = lat.indexOf('.')
          indexLat = indexLat+4
          let latitude= lat.substring(0,indexLat)
          let indexLong = long.indexOf('.')
          indexLong = indexLong+4
          let longitude= long.substring(0,indexLong)

        //Création de l'URL
          let recherche = 'lat='+latitude+'lng='+longitude

        this.baseUrl='http://www.prevision-meteo.ch/services/json/'
        this.baseUrl=this.baseUrl+recherche
        console.log("l'url construite est "+this.baseUrl)
        this.initObjects()
        this.http.get(this.baseUrl).
          map(res => res.json()).
          subscribe(data=>{   
            console.log("La recherche d'une pos est passée")
           
            this.result=JSON.stringify(data);
            console.log("les infos après la demande http ==>"+data)
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
            if(this.city_info!=undefined){
              this.verif=true
            }
            loading.dismiss();

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
        this.verif=false
    }






}