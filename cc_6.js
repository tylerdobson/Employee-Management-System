// cc_6.js
// Coding Challenge 6 — Employee Management System

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${super.describe()} They manage a team of ${this.teamSize} people.`;
  }
}

class Company {
  constructor(companyName) {
    this.companyName = companyName;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log(`--- ${this.companyName} Employee Roster ---`);
    for (const employee of this.employees) {
      console.log(employee.describe());
    }
  }
}

const employee1 = new Employee("Alice Johnson", "Accounting");
const employee2 = new Employee("Bob Rivera", "IT Support");
const employee3 = new Employee("Carol Chen", "Marketing");
const manager1 = new Manager("Dave Thompson", "Engineering", 8);
const manager2 = new Manager("Erin Walsh", "Sales", 5);

const company = new Company("Sunshine State Solutions");

company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(employee3);
company.addEmployee(manager1);
company.addEmployee(manager2);

company.listEmployees();
