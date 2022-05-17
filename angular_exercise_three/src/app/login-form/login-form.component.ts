import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  private fdmerUsername: string = 'FDMUser';
  private fdmerPassword: string = '1234';
  private loginResponse: string = '';
  username: string = '';
  password: string = '';

  constructor() {}

  getFdmerUsername(): string {
    return this.fdmerUsername;
  }

  setFdmerUsername(value: string): void {
    this.fdmerUsername = value;
  }

  getFdmerPassword(): string {
    return this.fdmerPassword;
  }

  setFdmerPassword(value: string): void {
    this.fdmerPassword = value;
  }

  getUsername(): string {
    return this.username;
  }

  setPassword(value: string): void {
    this.password = value;
  }

  getLoginResponse(): string {
    return this.loginResponse;
  }

  setLoginResponse(value: string): void {
    this.loginResponse = value;
  }

  ngOnInit(): void {}

  login(): string {
    if (
      this.username == this.fdmerUsername &&
      this.password == this.fdmerPassword
    ) {
      return (this.loginResponse = 'Welcome FDMUser!');
    } else {
      return (this.loginResponse = 'Wrong Username/Password');
    }
  }
}
