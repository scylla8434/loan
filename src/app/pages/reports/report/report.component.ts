import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  selectedReport: string = 'allCustomers'; // Default tab
  reports: { [key: string]: any[] } = {
    allCustomers: [],
    pendingLoans: [],
    paidLoans: [],
    totalLoans: [],
  };



  filterReport(type: string) {
    this.selectedReport = type;
  }

  downloadReport(format: string) {
    console.log(`Downloading ${this.selectedReport} report as ${format}`);
  }
}