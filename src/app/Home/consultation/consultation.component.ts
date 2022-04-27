import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Entry } from 'contentful';
import { AppService } from 'src/app/services/app-service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  isEnLang: boolean = false;
  @Input() islang: boolean = false;
  dataService: Entry<any>[] = [];
  data: any = []
  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit(): void {
    this.isEnLang = this.islang;
    this.detectLang();
  }
  getContentItems() {
    this.appService.getConsultation(this.isEnLang ? "en-US" : "ar")
      .then(service => {
        this.dataService = service;
      })
  }
 

  detectLang() {
    this.appService.currentLang.subscribe(res => {
      this.isEnLang = res == "en"
      this.getContentItems();
    });
  }
}
