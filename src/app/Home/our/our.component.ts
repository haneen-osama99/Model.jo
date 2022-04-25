import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Entry } from 'contentful';
import { AppService } from '../../services/app-service';

@Component({
  selector: 'app-our',
  templateUrl: './our.component.html',
  styleUrls: ['./our.component.scss']
})
export class OurComponent implements OnInit {
  isEnLang: boolean = false ;
  data:any=[]
  dataOur: Entry<any>[] = [];
  @Input() islang: boolean = false;

  constructor(private translateService:TranslateService ,private appService:AppService) { }

  ngOnInit(): void {
  this.detectLang()
  this.isEnLang = this.islang;
  }

  getContentItems() {
    this.appService.getOur(this.isEnLang? "en-US" :"ar")
      .then(ours => this.dataOur = ours)
  }

  detectLang() {
    this.appService.currentLang.subscribe(res => {
      this.isEnLang = res == "en"
      this.getContentItems();
    }); 
}

}