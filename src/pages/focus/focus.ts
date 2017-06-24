import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Provider 
import { MeteoApi } from '../../services/meteoapi.service';


@Component({
  selector: 'page-focus',
  templateUrl: 'focus.html',
})
export class FocusPage {

  	meteo : any ; 
  	hourly : any[] = [];
  	jour : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public meteoApi : MeteoApi) {
  		this.meteo=this.navParams.get('met')
  		this.jour = this.navParams.get('day')
  		console.log("la meteo reçu est : "+ this.meteo )

  		this.hourly=[]
  		let mainhourly = this.meteo['hourly_data']
  		//Le i sert à ajouter l'heure manuellement
  		let i = 0
		Object.keys(mainhourly).map(key=>{
			
			console.log("L'heure : " + i+'h')
			let heure = i+"h"
			mainhourly[key].heure = heure  
  			this.hourly.push(mainhourly[key])
  			console.log(mainhourly[key])
  			i++
  		})


  		
  }

}
