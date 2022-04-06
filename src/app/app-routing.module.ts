import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:"/" , component:HomeComponent} ,
  // {path:"/" , component:ContactUsComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
