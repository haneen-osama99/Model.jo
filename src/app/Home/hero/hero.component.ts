import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(
    public router:Router,
    private translate:TranslateService
    ) { }

  ngOnInit(): void {
    this.OnLangugeChange();
  }

  OnLangugeChange(){
    this.translate.onLangChange.subscribe(res =>{
      console.log(res);
    })
  }
  changeLanguge(e:any){
    console.log(e.target.value);
    this.translate.use(e.target.value);
  }
}
