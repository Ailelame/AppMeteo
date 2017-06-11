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

  unInput : any;


  changerDePage(){
  	this.navCtrl.push(MeteoPage, {
  		data : this.unInput
  	});
  }

  
  
}
