import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from 'src/app/service/app-service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
data :any =[];
isEnLang: boolean = true;
  @Input() islang: boolean = true
  appService: any;

  constructor(
    public router:Router,
    private appservice :AppService,
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
    this.appservice.getHero().subscribe (res=>
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

  
  // OnLangugeChange(){
  //   this.translate.onLangChange.subscribe(res =>{
  //     console.log(res);
  //   })
  // }
  // changeLanguge(e:any){

  //   console.log(e.target.value);
  //   this.translate.use(e.target.value);
  // }
//   detectLang() {

//     this.isEnLang=!this.isEnLang;
//     this.appService.currentLang.subscribe((res: any) => {
//     debugger
//     if(this.isEnLang ==false){
//       this.translate.use('ar')
//       document.getElementsByTagName("html")[0].dir = "rtl";
//     }else {
//       this.translate.use('en')
//     }
    
//   });
// }
  }
