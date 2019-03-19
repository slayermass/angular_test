import { Component, OnInit } from '@angular/core';
import { AjaxService } from './ajax.service';
import {LocalStorageService} from './local-storage.service';
import {ChangeCurrency} from './currency-converter/currency-converter.component';

export interface ListCurrencies {
  currencyName: string;
  id: string;
  currencySymbol: string;
}

interface Test {
  [id: string]: {
    currencyName: string;
    currencySymbol: string;
    id: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  listCurrencies: ListCurrencies[] = [];
  components = [
    {
      currency1: 'USD',
      currency2: 'RUB',
    }, {
      currency1: 'EUR',
      currency2: 'RUB',
    }
  ];

  private localStorageKey = 'app-components';

  constructor(private ajax: AjaxService, private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.components = this.localStorage.getItem(this.localStorageKey);

    this.ajax.getListCurrencies().subscribe((data: Test) => {
      const arr: ListCurrencies[] = [];

      // в удобную структуру
      Object.entries(data).map(([_, value]) => {
        arr.push({
          currencyName: value.currencyName,
          currencySymbol: value.currencySymbol,
          id: value.id,
        });
      });

      this.listCurrencies = arr;
    });
  }

  addComponent() {
    this.components.push({
      currency1: '',
      currency2: '',
    });

    this.localStorage.setItem(this.localStorageKey, this.components);
  }

  onChangeCurrency({index, key, value}: ChangeCurrency) {
    const components = [...this.components];
    components[index][key] = value;

    this.localStorage.setItem(this.localStorageKey, components);
  }
}
