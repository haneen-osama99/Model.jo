import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from 'src/app/services/app-service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, OnChanges {
  data: any = [];
  active = 0;
  isEnLang: boolean = false;
  @Input() islang: boolean = false;

  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit(): void {
    this.gettest();
    this.isEnLang = this.islang;
  }

  ngOnChanges() {
    this.detectLang();
  }

  gettest() {
    this.appService.getTest().subscribe(res => {
      this.data = res
    }
    )
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navText: ["", ""],
    navSpeed: 700,
    rtl: true,
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

  showItem(value: number) {
    this.active = value;
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
}

