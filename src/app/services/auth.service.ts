import { Injectable } from '@angular/core'; // Importing Injectable decorator from Angular core
import { Router } from '@angular/router'; // Importing Router service from Angular router

@Injectable({
  providedIn: 'root', // Making this service available throughout the application
})
export class AuthService {
  private readonly STORAGE_KEY = 'users'; // Key for storing users in localStorage
  private readonly CURRENT_USER_KEY = 'currentUser'; // Key for storing the current user in localStorage

  constructor(private router: Router) {} // Injecting the Router service

  // Register a new user
  register(user: any): boolean {
    const users = this.getUsers(); // Get the list of registered users
    const userExists = users.some((u: any) => u.email === user.email); // Check if the user already exists

    if (userExists) {
      console.error('User already exists with this email.'); // Log an error if user exists
      return false; // Return false indicating registration failed
    }

    users.push(user); // Add the new user to the list
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users)); // Save the updated user list to localStorage
    console.log('User registered successfully:', user); // Log the successful registration

    // Redirect based on role
    if (user.role === 'ADMIN') {
      this.router.navigate(['/dashboard']); // Redirect admin to dashboard
    } else if (user.role === 'EMPLOYEE') {
      this.router.navigate(['/edash']); // Redirect employee to employee dashboard
    }

    return true; // Return true indicating registration succeeded
  }

  // Login a user
  login(email: string, password: string): boolean {
    const users = this.getUsers(); // Get the list of registered users
    const user = users.find((u: any) => u.email === email && u.password === password); // Find the user with matching email and password

    if (user) {
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user)); // Save the current user to localStorage
      console.log('User logged in successfully:', user); // Log the successful login

      // Redirect based on role
      if (user.role === 'ADMIN') {
        this.router.navigate(['/dashboard']); // Redirect admin to dashboard
      } else if (user.role === 'EMPLOYEE') {
        this.router.navigate(['/edash']); // Redirect employee to employee dashboard
      }

      return true; // Return true indicating login succeeded
    } else {
      console.error('Invalid email or password.'); // Log an error if login failed
      return false; // Return false indicating login failed
    }
  }

  // Logout the current user
  logout(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY); // Remove the current user from localStorage
    this.router.navigate(['/login']); // Redirect to login page
    console.log('User logged out.'); // Log the successful logout
  }

  // Check if a user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.CURRENT_USER_KEY); // Return true if a user is logged in, otherwise false
  }

  // Get the current user
  getCurrentUser(): any {
    const user = localStorage.getItem(this.CURRENT_USER_KEY); // Get the current user from localStorage
    return user ? JSON.parse(user) : null; // Return the parsed user object or null if no user is logged in
  }

  // Get all registered users
  private getUsers(): any[] {
    const users = localStorage.getItem(this.STORAGE_KEY); // Get the list of users from localStorage
    return users ? JSON.parse(users) : []; // Return the parsed user list or an empty array if no users are registered
  }
}
