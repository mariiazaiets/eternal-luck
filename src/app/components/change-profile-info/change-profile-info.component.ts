import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../services/profile/profile.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-profile-info',
  templateUrl: './change-profile-info.component.html',
  styleUrls: ['./change-profile-info.component.css']
})
export class ChangeProfileInfoComponent implements OnInit {

  constructor(private profileService: ProfileService, private router : Router) { }

  ngOnInit(): void {
  }

  async saveUserInfo(username: string, age:string) {
    if (username && age) {
      this.profileService.changeProfileInfo(username, age).subscribe(
        (data: any) => {
          console.log('Data', data)

        },
        (error: any) => console.log(error)
      );
      await this.router.navigate(['/profile'])
    } else {
      window.alert('Please enter all data for change')
    }
  }

}
