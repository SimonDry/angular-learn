import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  selected = 'topics';

  constructor() { }

  updateTab(selected){
    this.selected=selected;
  }
}
