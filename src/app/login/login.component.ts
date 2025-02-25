
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(form: NgForm) {
    if (form.valid) {
      const credentials = {
        email: form.value.email,
        password: form.value.password,
      };

      try {
        this.authService.login(credentials);
      } catch (error: any) {
        this.errorMessage = error.message;
      }
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}