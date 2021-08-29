import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eternal luck';

  static getData() {
    const authorizedUser = localStorage.getItem('user');

    if (authorizedUser === null) {
      return  {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    } else {
      return  {
        path: '',
        redirectTo: '/games',
        pathMatch: 'full'
      }
    }
  }
}
