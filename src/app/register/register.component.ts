import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'], // Add styling
})
export class RegisterComponent {
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(form: NgForm): void {
    if (form.invalid) {
      this.errorMessage = 'Please fill out all required fields correctly.';
      console.error('Form is invalid.');
      return;
    }

    if (form.value.password !== form.value.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      console.error('Passwords do not match.');
      return;
    }

    const user = form.value;
    const isRegistered = this.authService.register(user);

    if (!isRegistered) {
      this.errorMessage = 'Registration failed. User with this email already exists.';
    }
  }
}