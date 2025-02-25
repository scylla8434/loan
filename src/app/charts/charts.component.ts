import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartType } from 'chart.js';


@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule], // Import NgChartsModule
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent { barChartData: ChartConfiguration<'bar'>['data'] = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    { data: [10, 20, 30, 40, 50], label: 'Sales' }
  ]
};
barChartOptions: ChartConfiguration<'bar'>['options'] = { responsive: true };
barChartType: ChartType = 'bar';

lineChartData: ChartConfiguration<'line'>['data'] = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    { data: [3, 7, 4, 8], label: 'Revenue' }
  ]
};
lineChartOptions: ChartConfiguration<'line'>['options'] = { responsive: true };
lineChartType: ChartType = 'line';

pieChartData: ChartConfiguration<'pie'>['data'] = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    { data: [30, 50, 20] }
  ]
};
pieChartOptions: ChartConfiguration<'pie'>['options'] = { responsive: true };
pieChartType: ChartType = 'pie';
}
