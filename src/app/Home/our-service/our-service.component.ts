import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../services/app-service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class ServiceComponent implements OnInit {
  isEnLang: boolean = false;
  @Input() islang: boolean = false;
  dataService: Entry<any>[] = [];
  data: any = []
  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit(): void {
    this.getData();
    this.isEnLang = this.islang;
    this.detectLang();

  }
  // ngOnChanges() {
  //   this.detectLang();
  // }
  getContentItems() {
    this.appService.getService(this.isEnLang ? "en-US" : "ar")
      .then(service => {
        this.dataService = service;
        // console.log(this.dataService)
      })
  }
  getData() {
    this.appService.getOurServiceDate().subscribe(res =>
      this.data = res
    )
  }

  detectLang() {
    this.appService.currentLang.subscribe(res => {
      this.isEnLang = res == "en"
      this.getContentItems();
    });
  }

  // detectLang() {
  //   this.isEnLang=!this.isEnLang;
  //   this.appService.currentLang.subscribe(res => {
  //   if(this.isEnLang ==false){
  //     this.translate.use('ar')
  //     document.getElementsByTagName("html")[0].dir = "rtl";
  //   }else {
  //     this.translate.use('en')
  //     document.getElementsByTagName("html")[0].dir = "ltr";

  //   }

  // });

}



