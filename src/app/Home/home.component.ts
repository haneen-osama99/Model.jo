import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss' ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService ,private translate:TranslateService) { }
  isEnlang: boolean = true;

  ngOnInit(): void {
    // document.getElementsByTagName("html")[0].dir = "rtl";
  }
  detectLang() {

    this.isEnlang=!this.isEnlang;
    this.appService.currentLang.subscribe(res => {
      debugger
    if(this.isEnlang ==false){
      this.translate.use('ar')
      document.getElementsByTagName("html")[0].dir = "rtl";
    }else {
      this.translate.use('en')
      document.getElementsByTagName("html")[0].dir = "ltr";
    }
    
  });
}}
