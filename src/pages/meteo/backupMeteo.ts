/*import { Component } from '@angular/core';
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

	maMeteo : MeteoApiGlobal = new MeteoApiGlobal();
	premierObjet : any;
	jsonObject: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http, public meteoApi : MeteoApi) {
  	this.meteoApi.getMeteo()
  	.then(meteoFetched => {
  		this.maMeteo = meteoFetched;
  		console.log(this.maMeteo);
  	});
	function retrieveJson() {
		let jsonData: string = this.maMeteo.getJsonString();
		this.jsonObject = JSON.parse(jsonData);
	}
	console.log(this.jsonObject);
	
}

}
*/