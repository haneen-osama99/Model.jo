import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient ({
    space: environment.contentful.spaceId ,
    accessToken: environment.contentful.token,
  });

  getCourses(query?:object):Promise <Entry<any>[]>{
    return this.client.getEntries(Object.assign({
      content_type:'course',},
      query))
      .then(res => res.items)
    }

    getCourse(courseId: any):Promise<Entry<any>>{
      return this.client.getEntries(Object.assign({
        content_type :'course'
      }, { 'sys.id' : courseId}))
      .then(res => res.items[0]);
    }

    getPartner(query?:object):Promise <Entry<any>[]>{
      return this.client.getEntries(Object.assign({
        content_type:'img'},
        query))
        .then(res => res.items)
      }

    getTest(locale: string, query?:object){
      return this.client.getEntries(Object.assign({
        content_type:'testimonials', locale: locale},
        query))
        .then(res => res.items)
      }
  }