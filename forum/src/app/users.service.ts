import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
export type User = {
  name:string,
  email:string,
  id:number,
  admin?:boolean,
  statement?:string
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http:HttpClient) { }
  loggedUsers:User=undefined;
  allUsers:User[]=[];

  fetchUsers() {
    this.http.get<any[]>('http://localhost:8000/api/users')
      .subscribe((r: any[]) => {
        this.allUsers = r.map(user => mapListToUser(user))
      })
  }

}

function mapListToUser(user:any):User{
  return {
    name:user.name,
    email:user.email,
    id:user.id,
    admin:user.admin
  }
}
