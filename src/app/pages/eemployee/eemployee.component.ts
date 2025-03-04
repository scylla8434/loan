import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eemployee', // Defines the component's selector
  imports: [CommonModule, FormsModule], // Imports necessary Angular modules
  templateUrl: './eemployee.component.html', // Path to the component's HTML template
  styleUrl: './eemployee.component.scss' // Path to the component's SCSS styles
})
export class EemployeeComponent implements OnInit {
  employee: any = {}; // Initializes an empty employee object

  // Handles file selection and converts the selected image to base64
  onFileSelected(event: any) {
    const file = event.target.files[0]; // Gets the selected file from the event
    if (file) { // Checks if a file is selected
      this.employeeService.convertImageToBase64(file).then((base64) => { // Converts the file to base64
        this.employee.profilePicture = base64; // Sets the employee's profile picture to the base64 string
      });
    }
  }

  constructor(private employeeService: EmployeeService, private router: Router) {} // Injects the EmployeeService and Router

  // Initializes the component and retrieves the selected employee data
  ngOnInit() {
    this.employee = this.employeeService.getSelectedEmployee(); // Gets the selected employee data from the service
  }

  // Updates the employee data and navigates to the employee list
  updateEmployee() {
    this.employeeService.updateEmployee(this.employee); // Updates the employee data in the service
    this.router.navigate(['/elist']); // Redirects to the employee list after update
  }

  // Cancels the edit and navigates to the employee list
  cancelEdit() {
    this.router.navigate(['/elist']); // Redirects to the employee list
  }
}
