import { HomeComponent } from './Home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Home/contact-us/contact-us.component';
import { HeroComponent } from './Home/hero/hero.component';
import { AboutusComponent } from './Home/aboutus/aboutus.component';
import { CourseListComponent } from './course-list/course-list.component';

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
  {
    path:'' , redirectTo: '/courses' , pathMatch:'full'
  },
  {
    path:'courses' , component: CourseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
