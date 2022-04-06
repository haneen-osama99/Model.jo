import { HomeComponent } from './Home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './Home/hero/hero.component';
import { AboutusComponent } from './Home/aboutus/aboutus.component';

const routes: Routes = [
  {
    path:"/",
    component:HomeComponent
  },
  {
    path:"heroslider",
    component:HeroComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
