import {Component, OnInit} from '@angular/core';

type Ingredient = {
  name: string,
  done: boolean
}

@Component({
  selector: 'app-reciepe',
  templateUrl: './reciepe.component.html',
  styleUrls: ['./reciepe.component.css']
})
export class ReciepeComponent implements OnInit {

  ingredients: Ingredient[] = [
    {name: 'flour', done: false},
    {name: 'milk', done: false},
    {name: 'egg', done: false},
    {name: 'sugar', done: false},
    {name: 'salt', done: false},
    {name: 'rum', done: false},
    {name: 'butter', done: false}
  ];

  // done = []
  constructor() {
  }

  toggle(i: Ingredient) {
    i.done = !i.done
  }

  isDone(i: Ingredient) {
    return i.done;
  }

  ngOnInit() {
  }

}
