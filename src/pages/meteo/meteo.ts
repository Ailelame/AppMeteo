import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MeteoApi } from '../../services/meteoapi.service';

//Page
import { FocusPage } from '../focus/focus';

@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html'
})



export class MeteoPage {
	ville;
  	type;
  	latitude;
  	longitude;
    cityinfos:any[];
    forecast:any[];



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

      goFucus(meteo,jour){
          console.log("l'id du jour est : "+meteo)
          this.navCtrl.push(FocusPage,{
            met : meteo,
            day : jour
          })
      }

}
 