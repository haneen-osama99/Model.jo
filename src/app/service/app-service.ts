import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  currentLang = new BehaviorSubject<string>("ar");
  constructor(private http:HttpClient) { 

  }
  getHero(){
    return this.http.get('./assets/data/data-json/hero.json')
  }
  getabout(){
    return this.http.get('./assets/data/data-json/aboutus.json')

  }
}
