import { LocalstorageService } from './services/localstorage.service';
import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal.jo';


  constructor(public localStorage: LocalstorageService) {
  }

  add(){
    let txtvalue = (<HTMLInputElement>document.getElementById("txtvalue")).value;
    console.log(txtvalue);
    // debugger
    this.localStorage.add("myName", txtvalue).then(res=>{
      if(res){
        alert("insert successfully")
      }
    })
  }
  get() {

  }
  delete() {

  }

}
