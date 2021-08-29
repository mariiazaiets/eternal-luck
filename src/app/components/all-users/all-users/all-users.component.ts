import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {UsersService} from "../../../services/users/users.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[]=[];
  error: any;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getData().subscribe((data:any) => {
        console.log(data)
        this.users = data.map((user: {userId: string; username: string; email: string; age: string;}) =>
          new User(user.userId, user.username, user.email, user.age))
      },
      (error: { message: any; }) => {this.error = error.message; console.log(error)}
    );
  }

  async addUserToFriends(email: string) {
    console.log(email)
    this.usersService.addUserToFriends(email).subscribe(
      (data: any) => {
        window.alert(JSON.stringify(data.message));
        console.log('Data', data);
      },
      (error: any) => console.log(error)
    )
  }
}
