import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AjaxService } from './ajax.service';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, CurrencyConverterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AjaxService]
})
export class AppModule { }
