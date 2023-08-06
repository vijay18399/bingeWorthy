import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any; // User details object

  constructor(private authService: AuthService) {}

  ngOnInit(): void {


      this.authService.getUserDetails().subscribe(
        (response: any) => {
          this.user = response; // Assign the received user details to the 'user' variable
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
  deleteAccount(){

  }
}
