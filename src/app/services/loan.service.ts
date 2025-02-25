import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://your_colleague_ip:8080/api/loans'; // Update with correct API URL

  private http = inject(HttpClient);
  getAllLoans(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }
  getLoans(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getLoanById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createLoan(loanData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, loanData);
  }

  updateLoan(id: number, loanData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, loanData);
  }

  deleteLoan(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getRepaymentSchedule(loanId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${loanId}/schedule`);
  }
}
