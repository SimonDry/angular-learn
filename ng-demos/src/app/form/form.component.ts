import { Component, OnInit } from '@angular/core';
type Ingredient = {
  name: string,
  good: boolean
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ingredients: Ingredient[] = [
    {name: 'flour', good: false},
    {name: 'milk', good: true},
    {name: 'egg', good: true},
    {name: 'sugar', good: false},
    {name: 'salt', good: false},
    {name: 'rum', good: true},
    {name: 'butter', good: false}
  ];
  selectedIngredient = undefined;
  options = [2,50,56,75];
  selectedOptions = 50;
  backedField = "";
  constructor() { }
  checked = false;
  user = "Gribouille";

  formData = {
    age:12,
    email:"joe@pata.tor"
  };

  ngOnInit() {
  }
  isGribouille(){
    return this.user=="Gribouille"?"Checked":"";
  }
  getTypeOf(){
    return typeof this.selectedOptions;
  }
  onChange(){
    alert('You have change the ingredient to '+this.selectedIngredient.name)
  }
  onSubmit(){
    console.log(this.formData)
  }
  isValid(){
    return this.formData.age>0
      && this.formData.age<18
      && this.formData.email.includes('@')
  }
}
