import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null
  }

  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  errorMessage = '';

  // @ViewChild('usernameInputLogin')
  // usernameInputLoginRef!: ElementRef;
  // @ViewChild('passwordInputLogin') 
  // passwordInputLoginRef! : ElementRef;
  
  constructor(private storageService: StorageService, 
    private router: Router,
    private authService: AuthService) {


  }

  ngOnInit(): void {

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }

    console.log(this.isLoggedIn ? 'user authenticated' : 'no user' );

  }

  onLogin() {
    // const username = this.usernameInputLoginRef.nativeElement.value;
    // const password = this.passwordInputLoginRef.nativeElement.value;

    const { username, password } = this.form;
    // console.log({ username, password });
    
    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoggedIn = true;
        this.isLoginFailed = false;
        
        this.router.navigate(['/dashboard']);
        
        console.log('user logged');
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
    
  }

  onSubmit(): void {
    const { username, password } = this.form;

    console.log({ username, password });
    console.log('onSubmit');
  }

  onSignup() {
    this.router.navigate(['signup']);

  }
}
