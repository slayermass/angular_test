import { Component, OnInit } from '@angular/core';
import { AjaxService } from './ajax.service';
import {LocalStorageService} from './local-storage.service';
import {ChangeCurrency} from './currency-converter/currency-converter.component';
import {ListCurrencies} from './interfaces/ListCurrencies';
import {CurrencyComponentData} from './interfaces/CurrencyComponentData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  listCurrencies: ListCurrencies[] = [];
  components: CurrencyComponentData[] = [
    {
      currency1: 'USD',
      currency2: 'RUB',
    }, {
      currency1: 'EUR',
      currency2: 'RUB',
    }
  ];

  private localStorageKey = 'app-components';

  constructor(private ajax: AjaxService) {}

  ngOnInit(): void {
    const storedComponents = LocalStorageService.getItem(this.localStorageKey);

    // если есть сохраненные данные - использовать их
    if (storedComponents && storedComponents.length) {
      this.components = storedComponents;
    }

    this.ajax.getListCurrencies().subscribe((data: ListCurrencies[]) => {
      this.listCurrencies = data;
    });
  }

  addComponent() {
    this.components.push({
      currency1: '',
      currency2: '',
    });

    LocalStorageService.setItem(this.localStorageKey, this.components);
  }

  onChangeCurrency(index: number, {key, value}: ChangeCurrency) {
    const components = [...this.components];
    components[index][key] = value;

    LocalStorageService.setItem(this.localStorageKey, components);
  }

  onDeleteRow(index) {
    this.components.splice(index, 1);

    LocalStorageService.setItem(this.localStorageKey, this.components);
  }
}
