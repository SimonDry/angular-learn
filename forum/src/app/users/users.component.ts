import { Component, OnInit } from '@angular/core';
import {User, UsersService} from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public service:UsersService) {
    this.service.fetchUsers();
  }

  logUser(user:User){
    this.service.loggedUsers = user ;
  }
  isLogged(){
    return this.service.loggedUsers;
  }
  ngOnInit() {
  }

}
