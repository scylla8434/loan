import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-dcustomer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dcustomer.component.html',
  styleUrls: ['./dcustomer.component.scss']
})
export class DcustomerComponent {
  id: number | null = null;
  customer: any = null;
  message: string = '';

  constructor(@Inject(CustomerService) private customerService: CustomerService) {}

  // Fetch customer by ID
  searchCustomer() {
    if (!this.id) {
      this.message = 'Please enter a customer ID.';
      return;
    }

    this.customerService.getCustomerById(this.id).subscribe({
      next: (data) => {
        if (data) {
          this.customer = data;
          this.message = ''; // Clear message
        } else {
          this.message = 'Customer not found.';
          this.customer = null;
        }
      },
      error: (err) => {
        console.error('Error fetching customer:', err);
        this.message = 'Error fetching customer.';
        this.customer = null;
      }
    });
  }

  // Delete customer by ID with confirmation
  deleteCustomer() {
    if (!this.customer || !this.customer.id) {
      this.message = 'No customer selected for deletion.';
      return;
    }

    if (confirm(`Are you sure you want to delete customer ${this.customer.firstName} (ID: ${this.customer.id})?`)) {
      this.customerService.deleteCustomer(this.customer.id).subscribe({
        next: () => {
          this.message = `Customer ${this.customer.firstName} deleted successfully!`;
          this.customer = null; // Clear the selected customer
          this.id = null; // Reset ID input
        },
        error: (err) => {
          console.error('Error deleting customer:', err);
          this.message = 'Error deleting customer.';
        }
      });
    }
  }
}
