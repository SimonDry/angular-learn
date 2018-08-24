import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./users.service";
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
  title: string;
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
        this.allTopics = r.map( topic => this.mapAnyToTopics(topic))
      })
  }
  mapAnyToTopics(topic:any):Topic{
    return {
      id: topic.id,
      title: topic.title,
      content: topic.content,
      comments: topic.comments,
      user: topic.user,
      tags:topic.tags
    }
}


}
