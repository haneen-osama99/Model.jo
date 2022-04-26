
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { OurComponent } from './home/our/our.component';
import { ServiceComponent } from './home/our-service/our-service.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PartnersComponent } from './home/partners/partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule} from '@angular/common/http';
import { OwlModule } from 'ngx-owl-carousel';
import { AppService } from './services/app-service';
import {ContentfulService} from './services/contentful.service';
import {NgPipesModule} from 'ngx-pipes';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { LocalstorageService } from './services/localstorage.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SafePipe } from './safe.pipe';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    HeroComponent,
    PartnersComponent,
    ContactUsComponent,
    HomeComponent,
    TestimonialsComponent,
    ServiceComponent,
    OurComponent,
    ContactUsComponent,
    SafePipe,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule ,
    OwlModule,
    NgxIndexedDBModule,
    NgPipesModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage:'en'
  })

  ],
 
  providers: [AppService, ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
