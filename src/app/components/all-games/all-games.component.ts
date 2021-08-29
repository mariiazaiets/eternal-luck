import {Component, OnInit} from '@angular/core';
import {GamesService} from '../../services/games/games.service';
import {Games} from '../../models/games'

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css'],
  providers: [GamesService]
})
export class AllGamesComponent implements OnInit {
  games: Games[]=[];
  error: any;
  searchText = '';

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getData().subscribe((data:any) => {
      console.log(data)
        this.games = data.map((game: {id: string; title: string; description: string; imgUrl: string; price: string;}) =>
          new Games(game.id, game.title, game.description, game.imgUrl, game.price))
    },
    (error: { message: any; }) => {this.error = error.message; console.log(error)}
    );
  }

  async addGameToLibrary(id: string) {
    console.log(id)
    this.gamesService.addGameToLibrary(id).subscribe(
      (data: any) => {
        window.alert(JSON.stringify(data.message));
        console.log('Data', data);
      },
        (error: any) => console.log(error)
    );
  }
}




