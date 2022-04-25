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
  status: boolean = false;

  constructor(public router: Router,
    private translate: TranslateService,
    private appService: AppService,

  ) { }

  ngOnInit(): void {
    this.detectLang();
  }

  detectLang() {
    this.appService.currentLang.subscribe(res => this.isEnLang = res == "en")
  }

  changeLang(lang: any) {
  
    this.translate.use(lang);
    this.appService.currentLang.next(lang);
    document.getElementsByTagName("html")[0].dir = lang == "en" ? "ltr" : "rtl";
    

  }

  openNavBar(){
    this.status = !this.status;  
  }
}
