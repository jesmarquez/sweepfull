import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { last } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  matchPasswords = false;
  constructor(private router: Router) {

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

    this.matchPasswords = (passwordFirstTime === passwordSecondTime) ? true : false;

    if (!this.matchPasswords) {
      return;
    }
    
    this.router.navigate(['/dashboard']);
    

    // console.log(formSubmitted.form);
    // console.log(firstName, lastName);
    formSubmitted.form.reset();
    
  }
}
