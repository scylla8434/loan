import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentDate: string = new Date().toLocaleDateString();
  sessionName: string = 'Guest'; // Default to 'Guest'

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loadSessionUser();
  }

  // ✅ Load the logged-in user's first and last name from localStorage
  loadSessionUser() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.firstName && currentUser.lastName) {
      this.sessionName = `${currentUser.firstName} ${currentUser.lastName}`;
    } else {
      console.warn('⚠ No logged-in user found.');
    }
  }

  // ✅ Logout function
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
