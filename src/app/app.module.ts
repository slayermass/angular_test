import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/converter/currency-converter.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { CurComponent } from './currency-converter/currency/cur.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: CurComponent, pathMatch: 'full' },
  { path: 'firebase', component: FirebaseComponent },
];

@NgModule({
  imports:      [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: environment.firebase.apiKey,
      authDomain: environment.firebase.authDomain,
      databaseURL: environment.firebase.databaseURL,
      storageBucket: environment.firebase.storageBucket,
      messagingSenderId: environment.firebase.messagingSenderId,
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
],
  declarations: [ AppComponent, CurrencyConverterComponent, FirebaseComponent, CurComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
