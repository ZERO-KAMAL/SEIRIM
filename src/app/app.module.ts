import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalSvgSpriteComponent } from './global-svg-sprite/global-svg-sprite.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BannerComponent } from './pages/home-page/banner/banner.component';
import { InquireComponent } from './pages/home-page/inquire/inquire.component';
import { AboutComponent } from './pages/home-page/about/about.component';
import { WhatWeOfferComponent } from './pages/home-page/what-we-offer/what-we-offer.component';
import { CaseStudyComponent } from './pages/home-page/case-study/case-study.component';
import { BlogComponent } from './pages/home-page/blog/blog.component';
import { AppLoadingComponent } from './components/app-loading/app-loading.component';
import { TabComponent } from './common/tab/tab.component';
import { AccordinComponent } from './common/accordin/accordin.component';
import { MarketingCaseStudyComponent } from './pages/home-page/case-study/marketing-case-study/marketing-case-study.component';
import { DevelopmentCaseStudyComponent } from './pages/home-page/case-study/development-case-study/development-case-study.component';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GlobalSvgSpriteComponent,
    HomePageComponent,
    BannerComponent,
    InquireComponent,
    AboutComponent,
    WhatWeOfferComponent,
    CaseStudyComponent,
    BlogComponent,
    AppLoadingComponent,
    TabComponent,
    AccordinComponent,
    MarketingCaseStudyComponent,
    DevelopmentCaseStudyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
