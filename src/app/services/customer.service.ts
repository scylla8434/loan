import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://172.16.1.145:8080/api/customers'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}
//fetch all customers
  getCustomers(): Observable<any[]> { 
    return this.http.get<any[]>(`${this.apiUrl}/getAllCustomers`);
  }
  
  
  // Fetch a single customer by ID
  getCustomerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getCustomer/${id}`);
  }

  // Update customer details by ID
  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateCustomer/${id}`, customer);
  }

  // Delete customer by ID
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteCustomer/${id}`);
  }
  // Create a new customer
  createCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/createCustomer`, customerData);
  }
  
}
