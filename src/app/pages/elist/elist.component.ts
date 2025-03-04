import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elist',
  imports: [CommonModule],
  templateUrl: './elist.component.html',
  styleUrl: './elist.component.scss'
})
export class ElistComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

 
  // ✅ View employee details in a popup
  viewEmployee(employee: any) {
    console.log('Selected Employee:', employee); // Debugging Log
    this.employeeService.setSelectedEmployee(employee);
    this.router.navigate(['/dashboard/edetails']);
  }
  

  // ✅ Edit employee details
  editEmployee(employee: any) {
    this.employeeService.setSelectedEmployee(employee);
    this.router.navigate(['/dashboard/eemployee']); // Redirect to the edit component
  }
  
  // editEmployee(employee: any) {
  //   const updatedName = prompt('Edit Name:', employee.fullName);
  //   const updatedJobTitle = prompt('Edit Job Title:', employee.jobTitle);
  //   const updatedDepartment = prompt('Edit Department:', employee.department);
  //   const updatedDateOfJoining = prompt('Edit Date of Joining:', employee.dateOfJoining);
    
  //   if (updatedName && updatedJobTitle && updatedDepartment && updatedDateOfJoining) {
  //     employee.fullName = updatedName;
  //     employee.jobTitle = updatedJobTitle;
  //     employee.department = updatedDepartment;
  //     employee.dateOfJoining = updatedDateOfJoining;
  //     this.employeeService.updateEmployee(employee);
  //     this.employees = this.employeeService.getEmployees();
  //   }
  // }

  // ✅ Delete employee
  deleteEmployee(employeeId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this employee?');
    if (confirmDelete) {
      this.employeeService.deleteEmployee(employeeId);
      this.employees = this.employeeService.getEmployees();
    }
  }
}
