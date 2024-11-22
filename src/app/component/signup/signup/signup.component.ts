import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../../services/data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;

  constructor( 
   // private service:DataService, private router:Router
     //private fb: FormBuilder,
     ) { 
   
   }
   
  onSignup() {
    if (this.password !== this.confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp!');
      return;
    }

    const signupData = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    // this.service.register(signupData).subscribe({
    //   next: () => {
    //     alert('Đăng ký thành công!');
    //     this.router.navigate(['/login']);
    //   },
    //   error: (err) => {
    //     alert(err.error.message || 'Đăng ký thất bại!');
    //   },
    // });
  }
  

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordField = document.getElementById('password') as HTMLInputElement;
    passwordField.type = this.isPasswordVisible ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibility() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    const confirmPasswordField = document.getElementById('confirmPassword') as HTMLInputElement;
    confirmPasswordField.type = this.isConfirmPasswordVisible ? 'text' : 'password';
  }

  //signupForm :FormGroup;

  

  ngOnInit(): void {
    // this.signupForm = this.fb.group({
    //   userName: [null, Validators.required],
    //   passWord: [null, Validators.required],
    //   email: [null, Validators.required],
    
    // });
  }

  // onSubmit() {
  //   if (this.signupForm.valid) {
  //     console.log('Form Data:', this.signupForm.value);
  //   }
  // }

  // onCancel() {
  //   this.signupForm.reset();
  // }
}
