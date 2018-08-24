import {Component, Input, OnInit} from '@angular/core';
import {TabService} from "../tab.service";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input()selected:string;
  constructor(public service:TabService) {}

  ngOnInit() {
  }
  // toggle(view){
  //   this.display=view;
  //   console.log('changed to ', this.display);
  // }

  users(){
    this.service.updateTab('users')
  }
  topics(){
    this.service.updateTab('topics')
  }

  isTopics(){
    return this.service.selected === 'topics'
  }
  isUsers(){
    return this.service.selected === 'users'
  }
}
