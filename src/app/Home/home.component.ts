import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../service/app-service';


@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent implements OnInit {
  isEnLang: boolean = true;
  constructor(public router: Router,
    private translate: TranslateService,
     private appService :AppService,

    ) { }

  ngOnInit(): void {
  }
  // changeLangage(lang: string) {
  //   let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
  //   htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
  //   this.translate.setDefaultLang(lang);
  //   this.translate.use(lang);
  // }
  detectLang() {
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
  changeLang(e: any) {
    console.log(e.target.value);
    this.translate.use(e.target.value);
  }
}
