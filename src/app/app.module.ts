import { AppService } from './service/app-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './Home/aboutus/aboutus.component';
import { HomeComponent } from './Home/home.component';
import { HeroComponent } from './Home/hero/hero.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactUsComponent } from './Home/contact-us/contact-us.component';
import { PartnersComponent } from './Home/partners/partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule} from '@angular/common/http';
import { OwlModule } from 'ngx-owl-carousel';

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
    ContactUsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule ,
    OwlModule, 
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage:'en'
  })

  ],
 
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
