import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/converter/currency-converter.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { CurComponent } from './currency-converter/currency/cur.component';
import {FirebaseModule} from './firebase/firebase.module';

const appRoutes: Routes = [
  { path: '', component: CurComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FirebaseModule,
  ],
  declarations: [ AppComponent, CurrencyConverterComponent, FirebaseComponent, CurComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
