import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from 'src/app/services/app-service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
data :any =[];
isEnLang: boolean = false;
  @Input() islang: boolean = false
  constructor(
    public router:Router,
    private appService :AppService,
     private translate: TranslateService
   ) { }
   
  ngOnInit(): void {
    this.getHero();
    this.isEnLang = this.islang;
  }
  ngOnChanges() {
    this.detectLang();
  }
  detectLang(){
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
  getHero(){
    this.appService.getHero().subscribe (res=>
     this.data =res
    //  console.log(res)
      )
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    rtl:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  
  
  }
