import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDYMdkUyYZLhPJkTkHgjH5Q0XKA_TDFAOw',
  authDomain: 'ionic-paycurve-assignment.firebaseapp.com',
  projectId: 'ionic-paycurve-assignment',
  storageBucket: 'ionic-paycurve-assignment.appspot.com',
  messagingSenderId: '639150367790',
  appId: '1:639150367790:web:20085d05d806617a32abbf'
};

// Initialize Firebase
initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
