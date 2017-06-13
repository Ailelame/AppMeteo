import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MeteoPage } from '../pages/meteo/meteo';

import { HttpModule } from '@angular/http';
import { MeteoApi } from '../services/meteoapi.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MeteoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MeteoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MeteoApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
