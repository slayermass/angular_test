import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

}
