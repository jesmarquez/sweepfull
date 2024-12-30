import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { last } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  matchPasswords = false;
  errorMessage = '';

  constructor(private router: Router, private authService: AuthService) {

  }
  onSignIn() {
    this.router.navigate(['signin']);
  }

  onSubmit(formSubmitted: NgForm) {
    // console.log(formSubmitted);

    if (formSubmitted.invalid) {
      console.log('it is invalid');
      return;
    }

    const firstName = formSubmitted.form.value.firstName;
    const lastName = formSubmitted.form.value.lastName;
    const passwordFirstTime = formSubmitted.form.value.password;
    const passwordSecondTime = formSubmitted.form.value.repassword;
    const email = formSubmitted.controls['email'].value;


    this.matchPasswords = (passwordFirstTime === passwordSecondTime) ? true : false;

    if (!this.matchPasswords) {
      return;
    }
    
    
    console.log(firstName, lastName, email, passwordFirstTime, passwordSecondTime);

    this.authService.register(firstName, lastName, email, passwordFirstTime).subscribe({
      next: data => {
        console.log(data);

      }, error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
        
      }
    })
    // this.router.navigate(['/dashboard']);
    
  //  formSubmitted.form.reset();
    
  }
}
