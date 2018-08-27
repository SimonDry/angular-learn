import {Component, Input, OnInit} from '@angular/core';
import {IComment, Topic, TopicsService} from "../topics.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Input() topic:Topic;
  @Input() newContent:string;
  constructor(public service:TopicsService) { }

  ngOnInit() {
  }

  //POST /api/comments/topic/{topic.id}

  addNewComment(topic:Topic,content:IComment){

    console.log(this.newContent)
    this.service.postComment(topic.id,content)
  }

}
