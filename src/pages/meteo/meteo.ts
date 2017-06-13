import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { MeteoApi } from '../../services/meteoapi.service';


@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html'
})



export class MeteoPage {
	ville;
  
  	constructor(public navCtrl: NavController, public navParams: NavParams, public meteoApi : MeteoApi) {
  		this.ville=this.navParams.get('data')
		this.meteoApi.getMeteo(this.ville);
	
	}

}
 