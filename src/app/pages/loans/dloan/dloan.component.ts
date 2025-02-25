import { Component, inject } from '@angular/core';
import { LoanService } from '../../../services/loan.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-dloan',
  standalone: true,
   imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './dloan.component.html',
  styleUrls: ['./dloan.component.scss']
})
export class DloanComponent {
  private loanService = inject(LoanService);
  loanId = '';

  deleteLoan(): void {
    if (confirm(`Are you sure you want to delete loan ID ${this.loanId}?`)) {
      this.loanService.deleteLoan(Number(this.loanId)).subscribe({
        next: () => alert('Loan Deleted Successfully'),
        error: (err) => console.error('Error deleting loan:', err)
      });
    }
  }
}
