import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Entry } from 'contentful';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppService } from 'src/app/services/app-service';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  data: any = [];
  active = 0;
  isEnLang: boolean = false;
  // @Input() islang: boolean = false;

  constructor(private appService: AppService, private translate: TranslateService,
    private conetentfulService: ContentfulService) { }

  tests: any = [];
  ngOnInit(): void {
    this.gettest();
    // this.isEnLang = this.islang;
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
  detectLang() {
    this.appService.currentLang.subscribe(res => {
      this.isEnLang = res == "en";
      // console.log(res)
      this.contentful();
      // this.isEnLang = !this.isEnLang;
      // this.appService.currentLang.subscribe((res: any) => {
      //   if (this.isEnLang == false) {
      //     this.translate.use('ar')
      //     document.getElementsByTagName("html")[0].dir = "rtl";
      //   } else {
      //     this.translate.use('en')
      //   }
      // });
    })
  }

  contentful() {
    this.conetentfulService.getTest(this.isEnLang ? "en-US" : "ar")
      .then(tests => { this.tests = tests; console.log(tests) });
  }
}

