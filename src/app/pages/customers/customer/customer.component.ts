import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { Component } from '@angular/core';
import { RcustomerComponent } from '../rcustomer/rcustomer.component';
import { UcustomerComponent } from '../ucustomer/ucustomer.component';
import { DcustomerComponent } from '../dcustomer/dcustomer.component';
import { CcustomerComponent } from '../ccustomer/ccustomer.component';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  selectedAction: string = '';
  selectedComponent: any = null;

  onSelectAction(event: Event): void {
    const action = (event.target as HTMLSelectElement).value;
    this.selectedAction = action;

    switch (action) {
      case 'read':
        this.selectedComponent = RcustomerComponent;
        break;
      case 'update':
        this.selectedComponent = UcustomerComponent;
        break;
       case 'delete':
         this.selectedComponent = DcustomerComponent;
        break;
      case 'create':
        this.selectedComponent = CcustomerComponent;
        break;
      default:
        this.selectedComponent = null;
    }
  }
}