import { AppService } from './../../services/app-service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  data: any = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getPartner();
  }

  getPartner() {
    this.appService.getPartners().subscribe(res =>
      this.data = res,
    )
  }
  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    rtl: true,
    margin:10,
    navText: ["",""],
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

}


