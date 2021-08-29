import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// App components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselOfGamesComponent } from './components/carousel-of-games/carousel-of-games.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { LibraryComponent } from './components/library/library.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ChangeProfileInfoComponent } from './components/change-profile-info/change-profile-info.component';
import { AllUsersComponent } from './components/all-users/all-users/all-users.component';

//App pipes
import { FilterPipe } from './pipes/filter.pipe';

//App guard
import {AuthGuard} from "./guards/auth.guard";

// Firebase services and environment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselOfGamesComponent,
    FooterComponent,
    LoginPageComponent,
    ProfilePageComponent,
    AllGamesComponent,
    LibraryComponent,
    FilterPipe,
    FriendsComponent,
    ChangeProfileInfoComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'eternal-luck'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
