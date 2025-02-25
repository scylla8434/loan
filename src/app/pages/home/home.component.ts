import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  totalLoans = 1000;
  pendingLoans = 400; 
  paidLoans = 600;

  constructor(private router: Router) {}

  navigateTo(route: string) {
    console.log('Navigating to:', route); // Debugging log
    this.router.navigate([route]);
  }
}