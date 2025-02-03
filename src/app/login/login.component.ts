import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {
  signupObj = { userName: '', password: '' };
  loginObj = { userName: '', password: '' };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic goes here
  }

  onSignup(): void {
    
    console.log("Signup button clicked");
  }

  onLogin(): void {
    // Logic for Login action
    console.log("Login button clicked");
  }
  
}
