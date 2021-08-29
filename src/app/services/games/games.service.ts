import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConfig} from "../../app.config";

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  constructor(private http: HttpClient) { }

  getData(){
    const myHeaders = new HttpHeaders().set('user-token', <string>localStorage.getItem('user'))
    console.log(myHeaders)
    return this.http.get(`${AppConfig.serverUrl}/api/games`, {headers: myHeaders})
  }

  addGameToLibrary(gameId: string) {
    const myHeaders = new HttpHeaders().set('user-token', <string>localStorage.getItem('user'))
    const body = {gameId}
    return this.http.post(`${AppConfig.serverUrl}/api/games/library`, body, {headers: myHeaders})
  }

  getUserGames() {
    const myHeaders = new HttpHeaders().set('user-token', <string>localStorage.getItem('user'))
    console.log(myHeaders)
    return this.http.get(`${AppConfig.serverUrl}/api/games/library`, {headers: myHeaders})
  }
}
