import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
export type Topic = {
  id:number,
  title:string,
  content:string
}
@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(public http:HttpClient) { }

  allTopics = [];

  fetchTopics(){
    this.http.get<any[]>('http://localhost:8000/api/topics')
      .subscribe( (r:any[]) => {
        this.allTopics = r.map( topic => mapAnyToTopics(topic))
      })
  }
}

function mapAnyToTopics(topic:any):Topic{
  return {
    id: topic.id,
    title: topic.title,
    content: topic.content
  }
}
