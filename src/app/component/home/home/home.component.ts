import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  // Navigate to a specific feature
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  // logout() {
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }

  ngOnInit(): void {
    
  }

  
}
