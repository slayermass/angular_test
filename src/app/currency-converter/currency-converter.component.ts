import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ListCurrencies} from '../app.component';
import {AjaxService} from '../ajax.service';

export interface ChangeCurrency {
  key: string;
  value: string;
}
@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  @Input() listCurrencies: ListCurrencies[];
  @Input() currency1: string;
  @Input() currency2: string;

  @Output() changeCurrency = new EventEmitter<ChangeCurrency>();
  @Output() deletRow = new EventEmitter();

  amountFrom = 1;
  amountTo = 0;

  constructor(private ajax: AjaxService) {}

  onSubmit() {
    this.ajax.doConvert(this.currency1, this.currency2)
      .subscribe(data => {
        this.amountTo = data[`${this.currency1}_${this.currency2}`] * this.amountFrom;
        console.log(this.amountTo);
      });
  }

  onChange(key: string, value: string) {
    this.changeCurrency.emit({ key, value });
  }

  onDeleteRow() {
    this.deletRow.emit();
  }
}
