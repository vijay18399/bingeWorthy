import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm: FormGroup;
  errorMessage :string='';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formControls() {
    return this.signUpForm['controls'];;
  }

  signUp() {
    if (this.signUpForm.invalid) {
      return;
    }

    const firstName = this.signUpForm.value.firstName;
    const lastName = this.signUpForm.value.lastName;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;

    this.authService.signUp(firstName, lastName, email, password)
      .subscribe(
        (response:any) => {
          // Handle successful sign-up
          const token = response.token; // Assuming the token is returned in the response
          this.authService.storeToken(token);
          this.router.navigate(['profile'])
        },
        (error:any) => {
          // Handle sign-up error
          this.errorMessage= error.error;
          console.error('Sign-up failed', error);
        }
      );
  }
}
