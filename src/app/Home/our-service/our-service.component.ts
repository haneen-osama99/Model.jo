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

  getContentItems() {
    this.appService.getService(this.isEnLang ? "en-US" : "ar")
      .then(service => {
        this.dataService = service;
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
}




