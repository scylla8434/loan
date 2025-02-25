import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-ucustomer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ucustomer.component.html',
  styleUrls: ['./ucustomer.component.scss']
})
export class UcustomerComponent {
  customerId: number | null = null;
  customer: any = null;
  showPopup: boolean = false;

  constructor(private customerService: CustomerService) {}

  // Fetch customer by ID
  fetchCustomer() {
    if (!this.customerId) {
      alert('Please enter a valid ID.');
      return;
    }
    this.customerService.getCustomerById(this.customerId).subscribe({
      next: (data) => {
        if (data) {
          this.customer = data;
        } else {
          alert('Customer not found');
        }
      },
      error: () => alert('Error fetching customer data')
    });
  }

  // Open the update popup
  openUpdatePopup() {
    this.showPopup = true;
  }

  // Close the update popup
  closePopup() {
    this.showPopup = false;
  }

  // Submit updated details
  updateCustomer() {
    if (!this.customer || !this.customer.id) {
      alert('No customer selected for update.');
      return;
    }
    this.customerService.updateCustomer(this.customer.id, this.customer).subscribe({
      next: () => {
        alert('Customer updated successfully!');
        this.closePopup();
      },
      error: () => alert('Error updating customer')
    });
  }
}
