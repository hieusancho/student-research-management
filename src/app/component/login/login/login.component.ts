import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // username = '';
  // password = '';

  // onLogin() {
  //   if (this.username && this.password) {
  //     // Handle login logic here (e.g., API call)
  //     console.log('Login Info:', {
  //       username: this.username,
  //       password: this.password
  //     });
  //     alert('Đăng nhập thành công!');
  //   } else {
  //     alert('Vui lòng nhập đầy đủ thông tin!');
  //   }
  // }

  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  isPasswordVisible: boolean = false;

  constructor(
    //private service: DataService, private router: Router
    ) {}

  onLogin() {
    // const loginData = {
    //   username: this.username,
    //   password: this.password,
    // };

    // this.service.login(loginData).subscribe({
    //   next: (response: any) => {
    //     alert('Đăng nhập thành công!');
    //     localStorage.setItem('token', response.token);
    //     this.router.navigate(['/home']);
    //   },
    //   error: (err) => {
    //     alert(err.error.message || 'Đăng nhập thất bại!');
    //   },
    // });
  }



  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordField = document.getElementById('password') as HTMLInputElement;
    passwordField.type = this.isPasswordVisible ? 'text' : 'password';
  }
}
