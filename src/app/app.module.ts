import { AppService } from './services/app-service';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './Home/contact-us/contact-us.component';
import { HomeComponent } from './Home/home.component';
import { PartnersComponent } from './Home/partners/partners.component';
import { HttpClientModule } from '@angular/common/http';
import { TestimonialsComponent } from './Home/testimonials/testimonials.component';

export function creatTranslate(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PartnersComponent,
    ContactUsComponent,
    HomeComponent,
    TestimonialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: creatTranslate,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
