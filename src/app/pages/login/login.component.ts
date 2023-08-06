import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  errorMessage :string='';
  constructor(private authService: AuthService,private router: Router) {}

  login() {
    this.authService.login(this.loginData)
      .subscribe(
        (response:any) => {
          // Handle successful login
          console.log('Login successful');
          const token = response.token; // Assuming the token is returned in the response
          this.authService.storeToken(token);
          this.router.navigate(['profile'])
          // Redirect or perform any additional actions
        },
        (error:any) => {
          // Handle login error
          this.errorMessage= error.error;
          console.error('Login failed', error);
        }
      );
  }
}
