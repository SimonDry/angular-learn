import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  users = ['Jack', 'John', 'Jim', 'Jane']

  getName(){
    return "Gribouille"
  }
  condition(){
    return this.users.length > 4;
  }
  getContent(){
    return "No quote quote cot COT KAAAK ! ... needed."
  }
  getImpressiveStyle(){
    return "impressive"
  }
  clearUsers(){
    this.users = []
  }
  ngOnInit() {
  }

}
