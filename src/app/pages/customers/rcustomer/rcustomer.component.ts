// // import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-rcustomer',
//   imports: [CommonModule],
//   templateUrl: './rcustomer.component.html',
//   styleUrls: ['./rcustomer.component.css']
// })
// export class RcustomerComponent {
//   customers = [
//     { id: 1, name: 'John Doe', registrationDate: '2023-01-01' },
//     { id: 2, name: 'Jane Smith', registrationDate: '2023-02-15' },
//     { id: 3, name: 'Alice Johnson', registrationDate: '2023-03-10' }
//   ];

//   viewCustomer(customer: any): void {
//     alert(`Viewing customer: ${customer.name}`);
//   }
// }
import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
@Component({
  selector: 'app-rcustomer',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './rcustomer.component.html',
  styleUrls: ['./rcustomer.component.scss']
})
export class RcustomerComponent implements OnInit {
  customers: any[] = [];

  constructor(@Inject(CustomerService) private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        console.log("Fetched Customers:", data); // Debugging
        if (data.length > 0) {
          console.log("First Customer:", data[0]); // Log the first object
        }
        this.customers = data;
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }
}
