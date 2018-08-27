import {Component, OnInit} from '@angular/core';
import {Topic, TopicsService} from "../topics.service";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  constructor(public service: TopicsService) {
    this.service.fetchTopics()
  }

  extended: number=-1;
  ngOnInit() {
  }

  extendedTopic(topic: Topic) {
    return this.extended == topic.id
  }

  toggleExtension(topic: Topic) {
    // console.log(topic.id)
    if (this.extended === topic.id) {
      this.extended = -1;
    } else {
      this.extended = topic.id
    }
      this.formDisplay=-1;
  }

  formDisplay:number=-1;
  displayForm(id){
    this.formDisplay = id;
  }
  formDisplayed(id){
    return this.formDisplay===id;
  }
  }
