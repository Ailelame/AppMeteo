import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { MeteoApi } from '../../services/meteoapi.service';
import { MeteoApiGlobal } from '../../models/meteoApi-global.model';


@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html'
})



export class MeteoPage {

	
	
	

  constructor(public navCtrl: NavController, public navParams: NavParams, public meteoApi : MeteoApi) {
  
	this.meteoApi.getMeteo();
	//this.meteoApi.getResult();
	}


}

  	/*



  	.then(meteoFetched => {
  		this.maMeteo = meteoFetched;
  
  		console.log(this.maMeteo);
  		this.maMeteo = JSON.parse(this.maMeteo);

  	});

	function retrieveJson() {
		let jsonData: string = this.maMeteo.getJsonString();
		this.jsonObject = JSON.parse(jsonData);
		let array = Array.from(this.jsonObject);

		console.log("l'array ==>"+ array);
	}
/*	this.obj=this.maMeteo.getResult();
	console.log("hahaaaaaa======>"+this.obj);
	/*
	let keys = Object.keys(this.maMeteo);
	console.log("test ===>" + keys);
}


}

/*

Angular js donc tu fais que du JS
Normalement quand tu reçois du Json en JavaScript c'est considéré comme une string
Donc tu fais JSON.parse(taVariableQuiContientTonJson) et là ça te fait un objet JS
Et tu peux utiliser la méthode Array.from pour le convertir en un tableau d'object
Sinon Object.values ()
*/