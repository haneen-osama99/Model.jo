import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  isEnLang: boolean = true;
  data: any = []
  @Input() islang: boolean = true;

  constructor(public router: Router,
    private translate: TranslateService,
    private appService: AppService,

  ) { }

  ngOnInit(): void {
    this.detectLang();
  }

  detectLang() {
    // this.isEnLang = !this.isEnLang;
    // this.appService.currentLang.subscribe((res: any) => {
    //   if (this.isEnLang == false) {
    //     this.translate.use('ar')
    //     document.getElementsByTagName("html")[0].dir = "rtl";
    //   } else {
    //     this.translate.use('en')
    //   }
    // });
    this.appService.currentLang.subscribe(res => this.isEnLang = res == "en")
  }

  changeLang(lang: any) {
    this.translate.use(lang);
    this.appService.currentLang.next(lang);
    document.getElementsByTagName("html")[0].dir = lang == "en" ? "ltr" : "rtl"
  }

 go(){
    alert("hello")
  }
}
