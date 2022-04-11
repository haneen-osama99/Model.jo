import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/services/app-service';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
data :any=[];
isEnLang: boolean = false;
  @Input() islang: boolean = true;
    constructor(public router:Router,
      private appService:AppService,
          private translate: TranslateService
      ) { }

  ngOnInit(): void {
    this.getAbout();
  }
  ngOnChanges() {
    this.detectLang();
  }
  detectLang(){
    this.isEnLang = !this.isEnLang;
    this.appService.currentLang.subscribe((res: any) => {
      if (this.isEnLang == false) {
        this.translate.use('ar')
        document.getElementsByTagName("html")[0].dir = "rtl";
      } else {
        this.translate.use('en')
      }
    });
  }
getAbout(){
  this.appService.getabout().subscribe (res =>
    this.data =res
   //  console.log(res)
     )
}
}
