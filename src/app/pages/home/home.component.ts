import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { NgApexchartsModule } from "ng-apexcharts"; // Import module

@Component({
  selector: 'app-home',
  imports: [NgApexchartsModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    chartOptions: {
      series: ApexAxisChartSeries;
      chart: ApexChart;
      xaxis: ApexXAxis;
      title: ApexTitleSubtitle;
    };
  
    pieChartOptions: {
      series: number[];
      chart: ApexChart;
      labels: string[];
      responsive: any;
    };
  
    constructor() {
      this.chartOptions = {
        series: [
          {
            name: "Employees",
            data: [10, 20, 30, 40, 50,30,20,45,22,11,5,67,] // Sample data
          }
        ],
        chart: {
          type: "bar",
          height: 350
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May","June","July","Aug","Sep","Oct","Nov","Dec"]
        },
        title: {
          text: "Employee Performance"
        }
      };
  
      this.pieChartOptions = {
        series: [44, 55, 13, 33],
        chart: {
          type: "pie",
          height: 350
        },
        labels: ["HR", "Finance", "IT", "Sales"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    }
  }