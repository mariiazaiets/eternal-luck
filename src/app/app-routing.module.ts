import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { ProfilePageComponent } from "./components/profile-page/profile-page.component";
import { AllGamesComponent } from "./components/all-games/all-games.component";
import { LibraryComponent } from "./components/library/library.component";
import { ChangeProfileInfoComponent } from "./components/change-profile-info/change-profile-info.component";
import { AuthGuard } from "./guards/auth.guard";
import { FriendsComponent } from "./components/friends/friends.component";
import { AllUsersComponent } from "./components/all-users/all-users/all-users.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  AppComponent.getData(),
  {path: 'login', component: LoginPageComponent},
  {path: 'profile', canActivate: [ AuthGuard ], component: ProfilePageComponent},
  {path: 'games', canActivate: [ AuthGuard ], component: AllGamesComponent},
  {path: 'games/library', canActivate: [ AuthGuard ], component: LibraryComponent},
  {path: 'profile/change-profile-info', canActivate: [ AuthGuard ], component: ChangeProfileInfoComponent},
  {path: 'users', canActivate: [ AuthGuard ], component: AllUsersComponent},
  {path: 'users/friends', canActivate: [ AuthGuard ], component: FriendsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
