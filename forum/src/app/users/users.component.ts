import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public service:UsersService) {
    this.service.fetchUsers();
  }

  logUser(username){
    this.service.loggedUsers = username ;
  }
  isLogged(username){
    return this.service.loggedUsers;
  }
  ngOnInit() {
  }

}
