import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-profpic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profpic.component.html',
  styleUrl: './profpic.component.scss',
})
export class ProfpicComponent  implements OnInit {
  selectedFile: File | null = null;
  previewUrl: string | null = null; // To display the selected image preview
  employee: any = null;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.employee = this.employeeService.getSelectedEmployee();
    if (!this.employee) {
      console.warn('⚠ No employee selected for profile picture upload.');
      this.router.navigate(['/employee/list']);
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.convertToBase64(file); // Convert the image to Base64
    }
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.previewUrl = e.target.result; // Set the preview URL
      if (this.employee) {
        this.employee.profilePicture = this.previewUrl; // Update the employee's profile picture
        this.employeeService.updateEmployee(this.employee); // Save the updated employee
        console.log('✅ Profile picture updated successfully.');
      } else {
        console.error('❌ No employee selected to update profile picture.');
      }
    };
    reader.readAsDataURL(file); // Read the file as a Data URL (Base64)
  }

  onSubmit(): void {
    if (!this.selectedFile || !this.employee) {
      console.error('❌ No file or employee selected.');
      return;
    }
    this.router.navigate(['/employee/list']); // Navigate back to the employee list
  }

  onCancel(): void {
    this.router.navigate(['/employee/list']);
  }
}

