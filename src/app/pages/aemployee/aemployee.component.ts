import { Component } from '@angular/core'; // Importing Component from Angular core
import { EmployeeService } from '../../services/employee.service'; // Importing EmployeeService
import { CommonModule } from '@angular/common'; // Importing CommonModule
import { FormsModule } from '@angular/forms'; // Importing FormsModule

@Component({
  selector: 'app-aemployee', // Defining the selector for the component
  imports: [CommonModule, FormsModule], // Importing necessary modules
  templateUrl: './aemployee.component.html', // Path to the component's HTML template
  styleUrl: './aemployee.component.scss' // Path to the component's SCSS file
})
export class AemployeeComponent {
  employee: any = {
    fullName: '',
    jobTitle: '',
    department: '',
    dateOfJoining: '',
    profilePicture: ''
  };
  router: any;

  constructor(private employeeService: EmployeeService) {}

  // Handle file upload and convert to Base64
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.employee.profilePicture = reader.result as string;
        console.log('Base64 Image:', this.employee.profilePicture);
      };
      reader.readAsDataURL(file);
    }
  }

  // Add Employee
  addEmployee() {
    if (!this.employee.fullName || !this.employee.jobTitle || !this.employee.department || !this.employee.dateOfJoining) {
      console.error('All fields are required!');
      return;
    }

    this.employeeService.addEmployee(this.employee);
    console.log('Employee added successfully:', this.employee);
    this.router.navigate(['/dashboard/employee']); // Redirect to the list after update

    // Reset form
    this.employee = {
      fullName: '',
      jobTitle: '',
      department: '',
      dateOfJoining: '',
      profilePicture: ''
    };
  }
}
