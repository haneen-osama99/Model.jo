
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
    
  

    getAboutUs(locale:string ,query?: object) {
        return this.client.getEntries(Object.assign({
            content_type: 'aboutus',
            locale :locale
        },query))
            .then(res => res.items);
    }
    getHeroSection(locale:string ,query?: object) {
        return this.client.getEntries(Object.assign({
            content_type: 'hero',
            locale :locale
        },query))
            .then(res => res.items);
    }
    // getTest(locale: string, query?:object){
    //     return this.client.getEntries(Object.assign({
    //       content_type:'testimonials', locale: locale},
    //       query))
    //       .then(res => res.items)
    //     // return this.client.getEntries({content_type: "testimonials", locale: "ar"})
    //     }
    // retrieves 
    // getAboutus(aboutusId: any,locale) {
    //     const promise = this.client.getEntry(aboutusId)
    //     return Observable.fromPromise(promise).map((entry: { fields: any; }) => entry.fields)
    //     // return this.client.getEntries(Object.assign ({
    //     //     content_type :'aboutus'
    // locale: ''
    //     // },{'sys.id' :aboutusId} ))
    //     // .then (res => res.items[0]);
    // }
    markdownToHtml(md: string) {
        return marked(md)
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

function marked(md: string) {
    throw new Error("Function not implemented.");
}

