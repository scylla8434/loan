import { Component, inject } from '@angular/core';
import { LoanService } from '../../../services/loan.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-rschedule',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './rschedule.component.html',
  styleUrls: ['./rschedule.component.scss']
})
export class RscheduleComponent {
  loanId: string = '';
  schedule: any[] = [];
  private loanService = inject(LoanService);

  fetchSchedule(): void {
    if (!this.loanId) {
      alert('Please enter a valid Loan ID');
      return;
    }
    
    this.loanService.getRepaymentSchedule(Number(this.loanId)).subscribe({
      next: (data) => this.schedule = data,
      error: (err) => console.error('Error fetching repayment schedule:', err)
    });
  }
}
