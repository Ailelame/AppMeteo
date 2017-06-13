import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeteoPage } from '../meteo/meteo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  unInput : any = 'Charleville';


  changerDePage(){
     let ville = this.unInput.charAt(0).toUpperCase()+ this.unInput.slice(1);
     console.log(ville)

  	this.navCtrl.push(MeteoPage, {

  		data : ville
  	});
  }

  
  
}
