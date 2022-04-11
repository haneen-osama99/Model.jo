import { Component, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../services/app-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent {

  isEnLang: boolean = true;

  constructor(private translate: TranslateService, private appService: AppService) { }

  ngOnInit(): void {
  }
  changeLang(e: any) {
    console.log(e.target.value);
    this.translate.use(e.target.value);
  }
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
}
