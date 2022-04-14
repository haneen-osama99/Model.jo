import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { HeroComponent } from './home/hero/hero.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { AyhamComponent } from './ayham/ayham.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"heroslider",
    component:HeroComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"ContactUs",
    component:ContactUsComponent
  },
  { path: '', redirectTo: '/ayham', pathMatch: 'full' },
  { path: 'ayham', component: AyhamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
