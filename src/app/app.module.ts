import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PartnersComponent } from './home/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    PartnersComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
