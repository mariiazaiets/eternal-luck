import {Component, OnInit} from '@angular/core';
import {GamesService} from "../../services/games/games.service";
import {Games} from "../../models/games";
import {Router} from "@angular/router";
import {AppConfig} from "../../app.config";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  providers: [GamesService]
})
export class LibraryComponent implements OnInit {
  games: Games[]=[];
  error: any;
  public href: string = "";

  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit(): void {
    this.gamesService.getUserGames().subscribe((data:any) => {
        console.log(data)
        this.games = data.map((game: {id: string; title: string; description: string; imgUrl: string; price: string;}) =>
          new Games(game.id, game.title, game.description, game.imgUrl, game.price));
      },
      (error: { message: any; }) => {this.error = error.message; console.log(error)}
    );
  }

  downloadGame() {
    window.alert('This game is download to your device.')
  }

  shareRef() {
    this.href = this.router.url;
    window.alert(`You can share the current link of your game: ${AppConfig.serverUrl}${this.router.url}`)
  }
}
