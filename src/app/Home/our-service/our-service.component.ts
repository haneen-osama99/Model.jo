import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OurComponent } from '../our/our.component';
import { AppService } from '../../services/app-service';

@Component({
  selector: 'app-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class ServiceComponent implements OnInit {
  isEnLang: boolean = false;
  @Input() islang: boolean = false;

  data:any=[]
  constructor(private appService: AppService ,private translate:TranslateService) { }

  ngOnInit(): void {
    this.getData();
    this.isEnLang = this.islang;
  }
  ngOnChanges() {
    this.detectLang();
  }
  detectLang() {
    this.isEnLang=!this.isEnLang;
    this.appService.currentLang.subscribe(res => {
    if(this.isEnLang ==false){
      this.translate.use('ar')
      document.getElementsByTagName("html")[0].dir = "rtl";
    }else {
      this.translate.use('en')
      document.getElementsByTagName("html")[0].dir = "ltr";

    }
    
  });
    
  }
  getData(){
    this.appService.getOurServiceDate().subscribe(res => 
      this.data=res
      )
  }

}
