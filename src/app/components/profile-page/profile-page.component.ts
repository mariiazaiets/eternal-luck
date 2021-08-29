import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../services/profile/profile.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [ProfileService]
})
export class ProfilePageComponent implements OnInit {
  user: User[]=[];
  error: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getData().subscribe((data:any) => {
        console.log(data)
        this.user = data.map((user: {userId: string; username: string; email: string; age: string;}) =>
          new User(user.userId, user.username, user.email, user.age))
      },
      (error: { message: any; }) => {this.error = error.message; console.log(error)}
    );
  }
}
