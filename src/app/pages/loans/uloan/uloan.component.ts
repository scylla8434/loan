import { Component, inject, NgModule } from '@angular/core';
import { LoanService } from '../../../services/loan.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uloan',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './uloan.component.html',
  styleUrls: ['./uloan.component.scss']
})
export class UloanComponent {
  loanForm: FormGroup;
  private loanService = inject(LoanService);
  private fb = inject(FormBuilder);

  constructor() {
    this.loanForm = this.fb.group({
      id: '',
      amount: '',
      interestRate: '',
      durationMonths: ''
    });
  }

  updateLoan(): void {
    const loanId = this.loanForm.value.id;
    this.loanService.updateLoan(loanId, this.loanForm.value).subscribe({
      next: () => alert('Loan Updated Successfully'),
      error: (err) => console.error('Error updating loan:', err)
    });
  }
}
