import { Routes, RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RscheduleComponent } from './pages/loans/rschedule/rschedule.component';
import { CcustomerComponent } from './pages/customers/ccustomer/ccustomer.component';
import { UcustomerComponent } from './pages/customers/ucustomer/ucustomer.component';
import { DcustomerComponent } from './pages/customers/dcustomer/dcustomer.component';
import { RcustomerComponent } from './pages/customers/rcustomer/rcustomer.component';
import { HomeComponent } from './pages/home/home.component';
import { CloanComponent } from './pages/loans/cloan/cloan.component';
import { UloanComponent } from './pages/loans/uloan/uloan.component';
import {RloanComponent } from './pages/loans/rloan/rloan.component';
import { DloanComponent } from './pages/loans/dloan/dloan.component';
import { LoanComponent } from './pages/loans/loan/loan.component';
import { CustomerComponent } from './pages/customers/customer/customer.component';
import { AuthGuard } from './guards/auth.guard';
import { ReportComponent } from './pages/reports/report/report.component';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route to login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,  canActivate: [AuthGuard],// Layout component as the parent
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'customer',component: CustomerComponent },
      { path: 'uloan', component: UloanComponent },
  { path: 'dloan', component: DloanComponent },
  { path: 'cloan', component: CloanComponent },
  { path: 'rloan', component: RloanComponent },
  { path: 'ccustomer', component: CcustomerComponent },
  { path: 'ucustomer', component: UcustomerComponent },
  { path: 'dcustomer', component: DcustomerComponent },
  { path: 'rcustomer', component: RcustomerComponent },
  { path: 'rschedule', component: RscheduleComponent },
  { path: 'report', component: ReportComponent},
  { path: 'loan', component: LoanComponent },
      //{ path: 'loan', loadComponent: () => import('./pages/loan/loan.component').then(m => m.LoanComponent) },
    ],
  },
];