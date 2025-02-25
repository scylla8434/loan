import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-ccustomer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ccustomer.component.html',
  styleUrls: ['./ccustomer.component.scss']
})
export class CcustomerComponent {
  customer = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: ''
  };
  
  message: string = '';

  constructor(@Inject(CustomerService) private customerService: CustomerService, private router: Router) {}

  // Create Customer Function
  createCustomer() {
    this.customerService.createCustomer(this.customer).subscribe({
      next: () => {
        this.message = 'Customer created successfully!';
        
        // Redirect after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/customer']);
        }, 2000);
      },
      error: (err) => {
        console.error('Error creating customer:', err);
        this.message = 'Error creating customer. Please try again.';
      }
    });
  }
}
