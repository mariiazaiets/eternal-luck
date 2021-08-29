import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConfig} from "../../app.config";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getData(){
    const myHeaders = new HttpHeaders().set('user-token', <string>localStorage.getItem('user'));
    console.log(myHeaders)
    return this.http.get(`${AppConfig.serverUrl}/api/profile`, {headers: myHeaders});
  }

  changeProfileInfo(username: string, age: string) {
    const myHeaders = new HttpHeaders().set('user-token', <string>localStorage.getItem('user'));
    const body = {username, age};
    return this.http.post(`${AppConfig.serverUrl}/api/profile/change-profile-info`, body, {headers: myHeaders});
  }
}
