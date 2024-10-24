import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StorageService } from '../_services/storage.service';

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

  // @ViewChild('usernameInputLogin')
  // usernameInputLoginRef!: ElementRef;
  // @ViewChild('passwordInputLogin') 
  // passwordInputLoginRef! : ElementRef;
  
  constructor(private storageService: StorageService) {


  }

  ngOnInit(): void {

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
    }

    console.log('ngOnInit trigger');

  }

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
