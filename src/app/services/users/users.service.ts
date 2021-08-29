import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConfig} from "../../app.config";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getData(){
    const myHeaders = new HttpHeaders().set('user-token', <string>localStorage.getItem('user'));
    console.log(myHeaders)
    return this.http.get(`${AppConfig.serverUrl}/api/users`, {headers: myHeaders});
  }

  addUserToFriends(email: string) {
    const myHeaders = new HttpHeaders().set('user-token', <string>localStorage.getItem('user'))
    const body = {email}
    return this.http.post(`${AppConfig.serverUrl}/api/users/friends`, body, {headers: myHeaders})
  }

  getUserFriends() {
    const myHeaders = new HttpHeaders().set('user-token', <string>localStorage.getItem('user'))
    console.log(myHeaders)
    return this.http.get(`${AppConfig.serverUrl}/api/users/friends`, {headers: myHeaders})
  }
}
