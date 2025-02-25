import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { Component } from '@angular/core';
import { DloanComponent } from '../dloan/dloan.component';
import { UloanComponent } from '../uloan/uloan.component';
import { RloanComponent } from '../rloan/rloan.component';
import { CloanComponent } from '../cloan/cloan.component';
@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent {
 
  selectedAction: string = '';
  selectedComponent: any = null;

  onSelectAction(event: Event): void {
    const action = (event.target as HTMLSelectElement).value;
    this.selectedAction = action;

    switch (action) {
      case 'read':
        this.selectedComponent = RloanComponent;
        break;
      case 'update':
        this.selectedComponent = UloanComponent;
        break;
      case 'delete':
        this.selectedComponent = DloanComponent;
        break;
      case 'create':
        this.selectedComponent = CloanComponent;
        break;
      default:
        this.selectedComponent = null;
    }
  }
}


