import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app-service';
import { Entry } from 'contentful';
@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
data :any=[];
isEnLang: boolean = false;
  @Input() islang: boolean = true;
  aboutus : Entry<any>[]=[]
    constructor(public router:Router,
      private appService:AppService,
          private translate: TranslateService
      ) { }

  ngOnInit(): void {
    this.getAbout();
    this.detectLang();
    this.isEnLang = this.islang;
  }

  
  detectLang(){
    this.appService.currentLang.subscribe(res =>{
      this.isEnLang = res == "en";
      console.log("hh"+res)
      this.getContentful();
    })
  }

getAbout(){
  this.appService.getabout().subscribe (res =>
    this.data =res
     )
}
getContentful(){
  this.appService.getAboutUs(this.isEnLang? "en-US": "ar")
  .then(aboutus => this.aboutus=aboutus);

}
}
