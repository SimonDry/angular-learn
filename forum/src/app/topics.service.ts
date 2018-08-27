import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./users.service";
import {Observable} from "rxjs";

export interface IComment {
  id: number;
  content: string;
  user?: User;
  anonymous?: boolean;
  tags?: Array<String>;
  score?:number;
}

export type Topic ={
  id?: number,
  title: string,
  content: string,
  comments: Array<IComment>,
  user: User,
  tags?: Array<String>
}

export interface Admin extends User {
  statement: string;
}
@Injectable({
  providedIn: 'root'
})
export class TopicsService{

  constructor(public http:HttpClient) { }

  allTopics:Topic[] = [];

  fetchTopics(){
    this.http.get<any[]>('http://localhost:8000/api/topics')
      .subscribe( (r:any[]) => {
        this.allTopics = r
      })
  }

  postComment(id:number,comment:IComment){
   // const commentJson=JSON.stringify(comment)
    console.log(this.http.post('http://localhost:8000/api/comments/topic/'+id,comment).subscribe(res=>{console.log(res)},err=>{console.log(err)}))
  }


}
