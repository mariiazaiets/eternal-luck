import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CarouselOfGamesComponent } from './components/carousel-of-games/carousel-of-games.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AllGamesComponent } from './components/all-games/all-games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselOfGamesComponent,
    FooterComponent,
    LoginPageComponent,
    ProfilePageComponent,
    AllGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
