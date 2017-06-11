import { CityInfo } from './meteoApi-city_info.model';
/*  import { CurrentCondition } from './meteoApi-currentCondition.model';
import { Forecast0 } from './meteoApi-forecast0.model';
import { Forecast1 } from './meteoApi-forecast1.model';
import { Forecast2 } from './meteoApi-forecast2.model';
import { Forecast3 } from './meteoApi-forecast3.model';
import { Forecast4 } from './meteoApi-forecast4.model';*/


export class MeteoApiGlobal{
	
	city_info : CityInfo[];
/*	current_condition : CurrentCondition;
	fcst_day_0: Forecast0[];
	fcst_day_1: Forecast1[];
	fcst_day_2: Forecast2[];
	fcst_day_3: Forecast3[];
	fcst_day_4: Forecast4[];*/
      getResult(){
  	return this.city_info['name'];
  		}

}