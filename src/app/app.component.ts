import { LocalstorageService } from './services/localstorage.service';
import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal.jo';


  constructor(public localStorage: LocalstorageService, private updates: SwUpdate) {
    updates.available.subscribe(res => updates.activateUpdate().then(() => document.location.reload()))
  }
  
  add() {
    let txtvalue = (<HTMLInputElement>document.getElementById("txtvalue")).value;
    this.localStorage.add("myName", txtvalue).then(res => {
      if (res) {
        alert("insert successfully")
      }
    })
  }
}
