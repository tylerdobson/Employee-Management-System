# Coding Challenge 05 — Payroll Processing Toolkit

A JavaScript toolkit of reusable functions that automate payroll math —
base pay, time-and-a-half overtime, and a 15% tax deduction — then process
an array of employees into a full payroll report.

## Functions
| Function | What it does |
|----------|--------------|
| `calculateBasePay(rate, hours)`     | Pay for up to 40 hours (overtime ignored here) |
| `calculateOvertimePay(rate, hours)` | 1.5× rate for every hour over 40 (0 if ≤ 40)   |
| `calculateTaxes(grossPay)`          | Applies a 15% deduction and returns net pay     |
| `processPayroll(employee)`        

## Pay rules
- **Regular:** hours up to 40, paid at the hourly rate
- **Overtime:** hours above 40, paid at 1.5× the hourly rate
- **Tax:** 15% deducted from gross to get net pay

## Files
- `cc_5.js` — the payroll toolkit
- `index.html` — loads `cc_5.js`; open it and check the browser console for output



