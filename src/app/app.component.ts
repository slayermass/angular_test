import { Component, OnInit } from '@angular/core';
import { AjaxService } from './ajax.service';

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

  constructor(private ajax: AjaxService) {}

  ngOnInit(): void {
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
}
