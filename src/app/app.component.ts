import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSearchbar: boolean = true;
  showNavBar:boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url)
        this.showSearchbar = event.url != '/search';
        this.showNavBar = !(event.url == '/signin' || event.url == '/signup');
      }

    });
  }
  isLoggedIn(): boolean {
    return true
    // return this.authService.isLoggedIn();
  }

  logout(): void {
    // this.authService.logout();
    this.router.navigate([''])
  }
}
