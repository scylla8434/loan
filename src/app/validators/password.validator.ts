import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  // Check if passwords match
  if (password !== confirmPassword) {
    return { passwordMismatch: true }; // Return an error object if passwords don't match
  }
  return null; // Return null if passwords match
}