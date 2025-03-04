import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], // Add styling
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(form: NgForm): void {
    if (form.invalid) {
      console.error('Form is invalid.');
      return;
    }

    const { email, password } = form.value;
    const isLoggedIn = this.authService.login(email, password);

    if (!isLoggedIn) {
      console.error('Login failed. Invalid email or password.');
    }
  }
}