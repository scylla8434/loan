import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorMessage: string | null = null; // To store error messages

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(form: NgForm) {
    if (form.valid && form.value.password === form.value.confirmPassword) {
      const user = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        password: form.value.password,
      };

      this.authService.register(user).subscribe({
        next: () => {
          alert('Registration successful! Please login.');
          this.router.navigate(['/login']); // Redirect to login page
        },
        error: (error) => {
          // Handle backend errors
          if (error.error && error.error.message) {
            this.errorMessage = error.error.message; // Display backend error message
          } else {
            this.errorMessage = 'Registration failed. Please try again.'; // Generic error message
          }
          console.error('Registration failed', error);
        },
      });
    } else {
      this.errorMessage = 'Please fill out the form correctly.'; // Form validation error
    }
  }
}