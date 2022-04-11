import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurComponent } from './home/our/our.component';
import { PartnersComponent } from './home/partners/partners.component';
import { ServiceComponent } from './home/our-service/our-service.component';
import { AppService } from './services/app-service';
// import { AppService } from './services/app-service';


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    PartnersComponent,
    ContactUsComponent,
    HomeComponent,
    ServiceComponent,
    OurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule ,
  
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
