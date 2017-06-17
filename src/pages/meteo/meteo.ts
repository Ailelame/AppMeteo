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
  	type;
  	latitude;
  	longitude;


  	constructor(public navCtrl: NavController, public navParams: NavParams, public meteoApi : MeteoApi) {
  		
  		this.ville=''
  		this.type=''
  		this.latitude=''
  		this.longitude=''

  		this.type=this.navParams.get('type')

  		if(this.type=='nom'){
			this.ville=this.navParams.get('data')
			this.meteoApi.getMeteoVille(this.ville);
  		}

  		if(this.type=='coord'){

  			this.latitude=this.navParams.get('dilatitude')
  			this.longitude=this.navParams.get('dilongitude')
  			console.log("la latitude au niveau de la réception par meteoPage est =>"+this.latitude)
  			console.log("la longitude au niveau de la réception par meteoPage est =>"+this.longitude)
  			this.meteoApi.getMeteoCoords(this.latitude,this.longitude)

  		}
	
	}

}
 