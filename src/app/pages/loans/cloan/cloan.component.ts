import { Component, inject } from '@angular/core';
import { LoanService } from '../../../services/loan.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-cloan',
  standalone: true,
   imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './cloan.component.html',
  styleUrls: ['./cloan.component.scss']
})
export class CloanComponent {
  loanForm: FormGroup;
  private loanService = inject(LoanService);
  private fb = inject(FormBuilder);

  constructor() {
    this.loanForm = this.fb.group({
      customerEmail: '',
      amount: '',
      interestRate: '',
      durationMonths: ''
    });
  }

  submitLoan(): void {
    this.loanService.createLoan(this.loanForm.value).subscribe({
      next: () => alert('Loan Created Successfully'),
      error: (err) => console.error('Error creating loan:', err)
    });
  }
}
