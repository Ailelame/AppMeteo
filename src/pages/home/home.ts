import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeteoPage } from '../meteo/meteo';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  unInput : any = 'Charleville';
  latitude: any;
  longitude: any;

  changerDePage(){
     let ville = this.unInput.charAt(0).toUpperCase()+ this.unInput.slice(1);
     console.log(ville)

  	this.navCtrl.push(MeteoPage, {
      type : 'nom',
  		data : ville
  	});
  }

  getGeoloc(){

    this.geolocation.getCurrentPosition().then((resp) => {
         
         this.latitude=JSON.stringify(resp.coords.latitude)
         this.longitude=JSON.stringify(resp.coords.longitude)

          this.navCtrl.push(MeteoPage, {

          type: 'coord',
          dilatitude: this.latitude,
          dilongitude: this.longitude

        
            }  )

    }).catch((error) => {
      console.log('Error getting location', error);
    });



   

  }
}
