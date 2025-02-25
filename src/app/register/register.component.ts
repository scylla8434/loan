import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(form: NgForm) {
    if (form.valid && form.value.password === form.value.confirmPassword) {
      const user = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        password: form.value.password,
      };

      try {
        this.authService.register(user);
        alert('Registration successful! Please login.');
        this.router.navigate(['/login']);
      } catch (error: any) {
        this.errorMessage = error.message;
      }
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}