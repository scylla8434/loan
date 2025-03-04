import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: any[] = [];
  private selectedEmployee: any = null;

  constructor() {
    this.loadEmployees();
  }

  // ✅ Load employees from sessionStorage
  private loadEmployees(): void {
    try {
      const savedEmployees = sessionStorage.getItem('employees');
      if (savedEmployees) {
        this.employees = JSON.parse(savedEmployees);
        console.log('✅ Loaded employees from sessionStorage:', this.employees);
        alert('✅ Employees loaded from sessionStorage.');
      } else {
        console.warn('⚠ No employees found in sessionStorage.');
        alert('⚠ No employees found in sessionStorag.');
      }
    } catch (error) {
      console.error('❌ Error parsing employees from sessionStorage:', error);
      this.employees = [];
    }
  }

  // ✅ Add a new employee
  addEmployee(employee: any): void {
    try {
      employee.id = employee.id || Date.now();
      this.employees.push(employee);
      this.saveEmployees();
      console.log('✅ Employee added:', employee);
      alert(`✅ Success: Employee ${employee.fullName} added!`);
    } catch (error) {
      console.error('❌ Error adding employee:', error);
      alert('❌ Error: Unable to add employee.');
    }
  }

  // ✅ Get all employees
  getEmployees(): any[] {
    return this.employees;
  }

  // ✅ Update employee details
  updateEmployee(updatedEmployee: any): void {
    try {
      const index = this.employees.findIndex((emp) => emp.id === updatedEmployee.id);
      if (index !== -1) {
        this.employees[index] = updatedEmployee;
        this.saveEmployees();
        console.log('✅ Employee updated:', updatedEmployee);
        alert(`✅ Success: Employee ${updatedEmployee.fullName} updated!`);
      } else {
        throw new Error('Employee not found');
      }
    } catch (error) {
      console.error('❌ Error updating employee:', updatedEmployee, error);
      alert('❌ Error: Unable to update employee.');
    }
  }

  // ✅ Set and get selected employee
  setSelectedEmployee(employee: any): void {
    try {
      if (!employee) {
        throw new Error('Cannot set undefined employee');
      }
      this.selectedEmployee = employee;
      sessionStorage.setItem('selectedEmployee', JSON.stringify(employee));
      console.log('✅ Selected Employee:', this.selectedEmployee);
      this.selectedEmployee = employee;
    } catch (error) {
      console.error('❌ Error selecting employee:', error);
      alert('❌ Error: Unable to select employee.');
    }
  }

  getSelectedEmployee() {
    // Retrieve from sessionStorage and parse it back to an object
    const storedEmployee = sessionStorage.getItem('selectedEmployee');

    if (storedEmployee) {
      this.selectedEmployee = JSON.parse(storedEmployee);
    } else {
      this.selectedEmployee = null;
    }

    console.log('Retrieved Employee:', this.selectedEmployee); // Debugging
    return this.selectedEmployee;
  }

  // ✅ Delete an employee
  deleteEmployee(employeeId: number): void {
    try {
      const employee = this.employees.find((emp) => emp.id === employeeId);
      if (!employee) {
        throw new Error('Employee not found');
      }

      this.employees = this.employees.filter((emp) => emp.id !== employeeId);
      this.saveEmployees();
      console.log(`🗑 Employee ${employee.fullName} (ID: ${employeeId}) deleted.`);
      alert(`🗑 Success: Employee ${employee.fullName} deleted!`);
    } catch (error) {
      console.error('❌ Error deleting employee:', error);
      alert('❌ Error: Unable to delete employee.');
    }
  }

  // ✅ Save to session storage
  private saveEmployees(): void {
    try {
      sessionStorage.setItem('employees', JSON.stringify(this.employees));
    } catch (error) {
      console.error('❌ Error saving employees to sessionStorage:', error);
      alert('❌ Error: Unable to save employees.');
    }
  }

  // ✅ Convert image file to Base64
  convertImageToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => {
        console.error('❌ Error converting image to Base64:', error);
        alert('❌ Error: Unable to convert image.');
        reject(error);
      };
    });
  }

  // ✅ Update employee profile picture
  updateProfilePicture(employeeId: number, base64Image: string): void {
    try {
      const employee = this.employees.find((emp) => emp.id === employeeId);
      if (employee) {
        employee.profilePicture = base64Image;
        this.saveEmployees();
        console.log('✅ Profile picture updated for employee:', employee);
        alert(`✅ Success: Profile picture updated for ${employee.fullName}!`);
      } else {
        throw new Error('Employee not found');
      }
    } catch (error) {
      console.error('❌ Error updating profile picture:', error);
      alert('❌ Error: Unable to update profile picture.');
    }
  }
}
