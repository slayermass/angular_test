import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {AjaxData} from './interfaces/AjaxData';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  private api = 'https://free.currencyconverterapi.com/api/v6';

  constructor(private http: HttpClient) { }

  doConvert(currencyFrom, currencyTo) {
    return this.http.get(`${this.api}/convert?q=${currencyFrom}_${currencyTo}&compact=ultra&apiKey=${environment.apiKey}`);
  }

  getListCurrencies() {
    return this.http
      .get(`${this.api}/currencies?apiKey=${environment.apiKey}`)
      .pipe(map((data: {results: AjaxData}) => data.results))
      .pipe(map((data: AjaxData) => {
        const arr = [];

        // в удобную структуру
        Object.entries(data).map(([, value]) => {
          arr.push({
            currencyName: value.currencyName,
            currencySymbol: value.currencySymbol,
            id: value.id,
          });
        });

        return arr;
      }));
  }

}
