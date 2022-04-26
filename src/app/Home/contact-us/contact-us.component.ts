import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { AppService } from 'src/app/services/app-service';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contact_us: any = [];
  falinkedin = faLinkedinIn;
  faTwitter = faTwitter;
  faFacebook = faFacebookF;
  isEnLang: boolean = false;
  modelUrl = new BehaviorSubject("");

  constructor(private conetentfulService: ContentfulService, private appService: AppService) { }

  ngOnInit(): void {
    this.detectLang();
  }
  detectLang() {
    this.appService.currentLang.subscribe(res => {
      this.isEnLang = res == "en";
      // console.log(res)
      this.getLocFromContentful();
    })
  }

  getLocFromContentful() {
    this.conetentfulService.getContactUs(this.isEnLang ? "en-US" : "ar")
      .then((contact_us: any) => {
        this.contact_us = contact_us;
        console.log(this.contact_us[0].fields.modelUrl)
        this.modelUrl.next(this.contact_us[0].fields.modelUrl)

      });

    // this.modelUrl.subscribe(res => this.createURL())
  }

  // i: number = 0;
  // createURL() {
  // console.log( this.contact_us)
  // return this.contact_us[0].fields.modelUrl;
  // }
}
