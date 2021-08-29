import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UsersService} from "../../services/users/users.service";


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  users: User[]=[];
  error: any;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUserFriends().subscribe((data:any) => {
        console.log(data)
        this.users = data.map((user: {friendId: string; username: string; email: string; age: string;}) =>
          new User(user.friendId, user.username, user.email, user.age))
      },
      (error: { message: any; }) => {this.error = error.message; console.log(error)}
    );
  }
}
