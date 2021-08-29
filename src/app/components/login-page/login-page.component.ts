import { Component, OnInit } from '@angular/core'
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import firebase from "firebase";
import auth = firebase.auth;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  socialAuth = false;

  constructor(private afAuth: AngularFireAuth, private router : Router) { }

  ngOnInit() {
    if (environment.socialAuthEnabled) {
      this.socialAuth = true;
    }
  }

  async login(email: string, password: string) {
    if (email && password) {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(
          async (success) => {
            window.localStorage.setItem('user', <string>await success.user?.getIdToken())
            await this.router.navigate(['/games'])
          }).catch(err => {
        window.alert(err)
      })
    } else {
      window.alert('Please enter email and password.')
      await this.router.navigate(['/login'])
    }
  }

  async loginWithGoogle() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(
        async (success) => {
          window.localStorage.setItem('user', <string>await success.user?.getIdToken());
          await this.router.navigate(['/games']);
        }).catch(err => {
      window.alert(err)
    })
  }
}
