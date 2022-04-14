import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app-service';
// import { Entry } from 'contentful';
import { Entry } from 'contentful';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ayham',
  templateUrl: './ayham.component.html',
  styleUrls: ['./ayham.component.scss']
})
export class AyhamComponent implements OnInit {

  constructor(private router: Router, private appService: AppService, private translateService: TranslateService) { }
  isEnLang: boolean = false;
  @Input() islang: boolean = false;
  data: Entry<any>[] = [];
  ngOnInit(): void {
    this.detectLang()
  }
  getContentItems() {
    this.appService.getAyhams(this.isEnLang? "en-US" :"ar")
      .then(ayhams => this.data = ayhams)
  }
  goToDetailasPage(AyhamId: any) {
    this.router.navigate(['/ayham , AyhamId'])
  }
  ngOnChanges() {
    this.detectLang();
  }
  detectLang() {
    this.appService.currentLang.subscribe(res => {
      this.isEnLang = res == "en"
      this.getContentItems();
    }); 




  }
}
