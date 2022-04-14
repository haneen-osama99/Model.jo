import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createClient, Entry } from 'contentful';
import { BehaviorSubject } from "rxjs";
import { environment } from "../../../src/environments/environment"
@Injectable({
    providedIn: 'root'
})

export class AppService {
    currentLang = new BehaviorSubject<string>("en");
    private client = createClient({
        space: environment.contentful.spaceId,
        accessToken: environment.contentful.token,
    });

    constructor(private http: HttpClient) { }
    getOurServiceDate() {
        return this.http.get("./assets/data/data-json/service.json");
    }
    getOurDate() {
        return this.http.get("./assets/data/data-json/our.json");
    }
    getHero() {
        return this.http.get('./assets/data/data-json/hero.json')
    }
    getabout() {
        return this.http.get('./assets/data/data-json/aboutus.json')

    }
    getPartners() {
        return this.http.get("./assets/data/data-json/partners.json");
    }
    getTest() {
        return this.http.get("./assets/data/data-json/testimonials.json");
    }

    getAyhams(locale: string): Promise<Entry<any>[]> {
        return this.client.getEntries({
          content_type: 'ayham',
          locale: locale
                }        )
        .then(res => res.items);
      }

      getOur(locale: string): Promise<Entry<any>[]> {
        return this.client.getEntries({
          content_type: 'our',
          locale: locale
                }        )
        .then(res => res.items);
      }

  getService(locale: string): Promise<Entry<any>[]> {
        return this.client.getEntries({
          content_type: 'service',
          locale: locale
                }        )
        .then(res => res.items);
      }

}
