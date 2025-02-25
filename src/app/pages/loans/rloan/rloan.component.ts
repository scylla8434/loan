import { Component, OnInit, inject } from '@angular/core';
import { LoanService } from '../../../services/loan.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-rloan',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './rloan.component.html',
  styleUrls: ['./rloan.component.scss']
})
export class RloanComponent implements OnInit {
viewSchedule(arg0: any) {
throw new Error('Method not implemented.');
}
  loans: any[] = [];

  private loanService = inject(LoanService);

  ngOnInit(): void {
    this.loanService.getLoans().subscribe({
      next: (data) => this.loans = data,
      error: (err) => console.error('Error fetching loans:', err)
    });
  }
}
