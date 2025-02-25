// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USERS_KEY = 'users';

  constructor(private router: Router) {}

  // Register a new user
  register(user: any) {
    const users = this.getUsers();
    const userExists = users.some((u: any) => u.email === user.email);

    if (userExists) {
      throw new Error('User with this email already exists.');
    }

    users.push(user);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    return { message: 'Registration successful!' };
  }

  // Login a user
  login(credentials: any) {
    const users = this.getUsers();
    const user = users.find(
      (u: any) =>
        u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/dashboard']); // Redirect to dashboard or any other page
      return { message: 'Login successful!' };
    } else {
      throw new Error('Invalid email or password.');
    }
  }

  // Check if a user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  // Logout the current user
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  // Get all users from localStorage
  private getUsers(): any[] {
    const usersJson = localStorage.getItem(this.USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
  }
}