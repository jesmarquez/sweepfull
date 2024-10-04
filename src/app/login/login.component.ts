import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null
  }



  // @ViewChild('usernameInputLogin')
  // usernameInputLoginRef!: ElementRef;
  // @ViewChild('passwordInputLogin') 
  // passwordInputLoginRef! : ElementRef;
  
  onLogin() {
    // const username = this.usernameInputLoginRef.nativeElement.value;
    // const password = this.passwordInputLoginRef.nativeElement.value;

    // console.log(username, password);
    console.log('onLogin');


  }

  onSubmit(): void {
    const { username, password } = this.form;

    console.log({ username, password });
    console.log('onSubmit');
  }
}
