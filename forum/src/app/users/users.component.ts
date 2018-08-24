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

  logUser(user){
    this.service.loggedUsers.push(user)
  }
  isLogged(user){
    return this.service.loggedUsers.includes(user)
  }
  ngOnInit() {
  }

}
