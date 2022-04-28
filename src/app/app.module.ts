import { ServiceWorkerModule } from '@angular/service-worker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestimonialsComponent } from './Home/testimonials/testimonials.component';
import { OurComponent } from './Home/our/our.component';
import { ServiceComponent } from './Home/our-service/our-service.component';
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
import { PartnersComponent } from './Home/partners/partners.component';
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
import { ConsultationComponent } from './Home/consultation/consultation.component';
import { environment } from '../environments/environment';

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
    ConsultationComponent,
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
  }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
 
  providers: [AppService, ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
