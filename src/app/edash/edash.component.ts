import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-edash',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './edash.component.html',
  styleUrls: ['./edash.component.scss']
})
export class EdashComponent {
  currentDate: string = new Date().toLocaleDateString();
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout(); // Call the logout method from AuthService
    this.router.navigate(['/login']); // Redirect to the login page
  }
}