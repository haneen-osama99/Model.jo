import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../services/app-service';

@Component({
  selector: 'app-our',
  templateUrl: './our.component.html',
  styleUrls: ['./our.component.scss']
})
export class OurComponent implements OnInit {
  isEnLang: boolean = false ;
  data:any=[]
  @Input() islang: boolean = false;

  constructor(private translateService:TranslateService ,private appService:AppService) { }

  ngOnInit(): void {
  this.getData();
  this.isEnLang = this.islang;
  }
  ngOnChanges() {
    this.detectLang();
  }

  getData(){
    this.appService.getOurDate().subscribe(res => 
      this.data=res
      )
  }
  detectLang() {
    this.isEnLang=!this.isEnLang;
    this.appService.currentLang.subscribe(res => {
    
    if(this.isEnLang ==false){
      this.translateService.use('ar')
      document.getElementsByTagName("html")[0].dir = "rtl";
    }else {
      this.translateService.use('en')
      document.getElementsByTagName("html")[0].dir = "ltr";

    }
    
  });
}

}