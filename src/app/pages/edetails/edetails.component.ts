import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edetails',
imports: [CommonModule],
  templateUrl: './edetails.component.html',
  styleUrl: './edetails.component.scss'
})
export class EdetailsComponent implements OnInit {
  employee: any = null;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.employee = this.employeeService.getSelectedEmployee();
    console.log('Retrieved Employee:', this.employee);
    if (!this.employee) {
      alert('No employee selected!');
      this.router.navigate(['/employee']);
    }
  }

  closePopup() {
    this.router.navigate(['/dashboard/employee']);
  }
}

