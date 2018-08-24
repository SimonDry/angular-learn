import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  selected = 'users';

  constructor() { }

  updateTab(selected){
    this.selected=selected;
  }
}
