# Coding Challenge 06 — Employee Management System

A simple employee management system written in JavaScript (`cc_6.js`) using
ES6 class syntax to model employees, managers, and a company roster.

## What `cc_6.js` does
- **`Employee`** — base class with `name` and `department`, and a `describe()`
  method that returns a formatted summary of the employee.
- **`Manager`** — subclass that `extends Employee`, calls `super(name, department)`,
  adds `teamSize`, and overrides `describe()` to include team details.
- **`Company`** — holds an `employees` array with `addEmployee(employee)` to add
  people and `listEmployees()` to log every description.
- Creates three employees and two managers, adds them all to a company, and
  prints the full roster to the console.

## Files
- `cc_6.js` — all classes and the demo code
- `index.html` — loads `cc_6.js` in the browser



