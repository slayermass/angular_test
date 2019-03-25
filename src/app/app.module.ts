import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/converter/currency-converter.component';
import { TestComponent } from './test/test.component';
import { CurComponent } from './currency-converter/cur/cur.component';

const appRoutes: Routes = [
  { path: '', component: CurComponent, pathMatch: 'full' },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, CurrencyConverterComponent, TestComponent, CurComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
