import {Component, Input, OnInit} from '@angular/core';
import {IComment, Topic, TopicsService} from "../topics.service";
import {User, UsersService} from "../users.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Input() topic:Topic;
  @Input() newContent:string;
  constructor(public service:TopicsService,public userService:UsersService) { }

  ngOnInit() {
  }

  //POST /api/comments/topic/{topic.id}

  addNewComment(topic:Topic,content:string){
console.log("user",this.userService.loggedUsers);
    console.log("usermail",this.userService.loggedUsers.email);
console.log("username",this.userService.loggedUsers.name)
    console.log(this.newContent)



    this.service.postComment(topic.id,{
      id:-1,
      content:this.newContent,
      user: this.userService.loggedUsers
    })
  }

}
