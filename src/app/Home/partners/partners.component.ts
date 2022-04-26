import { AppService } from './../../services/app-service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners: any = [];
  data: any = [];
  constructor(private appService: AppService, private conetentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.getPartner();
    this.Partners();
  }

  Partners() {
    this.conetentfulService.getPartner()
      .then((partner: any) => {
        this.partners = partner;
        console.log(partner)
      });
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
    margin: 10,
    navText: ["", ""],
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


