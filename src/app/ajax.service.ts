import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class AjaxService {
  private api = 'https://free.currencyconverterapi.com/api/v6';
  private key = 'b5030e77824a24891b50';

  constructor(private http: HttpClient) { }

  doConvert(currencyFrom, currencyTo) {
    return this.http.get(`${this.api}/convert?q=${currencyFrom}_${currencyTo}&compact=ultra&apiKey=${this.key}`);
  }

  getListCurrencies() {
    return this.http
      .get(`${this.api}/currencies?apiKey=${this.key}`)
      .pipe(map((data: {results: any}) => data.results));
  }

}
