import {Component, Input, OnInit} from '@angular/core';
import {User} from "../users.service";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() name: string
  @Input() admin: boolean
  @Input() user:User


  constructor() {
  }

  ngOnInit() {
  }

}
