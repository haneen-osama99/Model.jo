import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Entry } from 'contentful';
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
  @Input() islang: boolean = false;
  hero : any =[]
  constructor(
    public router:Router,
    private appService :AppService,
    private translate: TranslateService
   ) { }
   
  ngOnInit(): void {
    this.getHero();
    this.isEnLang = this.islang;
    this.detectLang();    
  }
 
  detectLang(){
    this.appService.currentLang.subscribe(res =>{
      this.isEnLang = res == "en";
      // console.log("hh"+res)
      this.getContentful();
    })
  }
  getHero(){
    this.appService.getHero().subscribe (res=>
     this.data =res
      )
  }
  getContentful(){
    this.appService.getHeroSection(this.isEnLang? "en-US": "ar")
    .then(herosection => this.hero=herosection);
  
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
