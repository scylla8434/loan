import { Component } from '@angular/core';
import { AemployeeComponent } from '../aemployee/aemployee.component';
import { DemployeeComponent } from '../demployee/demployee.component';
import { EdetailsComponent } from '../edetails/edetails.component';
import { ProfpicComponent } from '../profpic/profpic.component';
import { ElistComponent } from '../elist/elist.component';
import { EemployeeComponent } from '../eemployee/eemployee.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,AemployeeComponent,ElistComponent,EdetailsComponent,EemployeeComponent,ProfpicComponent],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  selectedAction: string = '';

  // Handles dropdown selection
  onActionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedAction = target.value;
  }
  }
