import { Routes, RouterLink } from '@angular/router'; // Importing necessary modules from Angular router
import { LoginComponent } from './login/login.component'; // Importing LoginComponent
import { RegisterComponent } from './register/register.component'; // Importing RegisterComponent
import { DashboardComponent } from './dashboard/dashboard.component'; // Importing DashboardComponent
import { HomeComponent } from './pages/home/home.component'; // Importing HomeComponent
import { EdashComponent } from './edash/edash.component'; // Importing EdashComponent
import { EmployeeComponent } from './pages/employee/employee.component'; // Importing EmployeeComponent
import { AemployeeComponent } from './pages/aemployee/aemployee.component'; // Importing AemployeeComponent
import { ElistComponent } from './pages/elist/elist.component'; // Importing ElistComponent
import { EdetailsComponent } from './pages/edetails/edetails.component'; // Importing EdetailsComponent
import { EemployeeComponent } from './pages/eemployee/eemployee.component'; // Importing EemployeeComponent
import { ProfpicComponent } from './pages/profpic/profpic.component'; // Importing ProfpicComponent
import { AuthGuard } from './guards/auth.guard'; // Importing AuthGuard for route protection

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route to login
  { path: 'login', component: LoginComponent }, // Route for login page
  { path: 'register', component: RegisterComponent }, // Route for register page
  { path: 'edash', component: EdashComponent }, // Route for edash page
  {
    path: 'dashboard',
    component: DashboardComponent,  // Route for dashboard page
    canActivate: [AuthGuard], // Protecting the dashboard route with AuthGuard
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default child route to home
      { path: 'home', component: HomeComponent }, // Route for home page
      { path: 'employee', component: EmployeeComponent }, // Route for employee page
      { path: 'aemployee', component: AemployeeComponent }, // Route for aemployee page
      { path: 'elist', component: ElistComponent }, // Route for elist page
      { path: 'edetails', component: EdetailsComponent }, // Route for edetails page
      { path: 'eemployee', component: EemployeeComponent }, // Route for eemployee page
      { path: 'profpic', component: ProfpicComponent } // Route for profpic page
    ],
  },
];