/* sophisticated_code.js */

// PROGRAM: Employee Directory Management System
// AUTHOR: John Doe
// DATE: March 1, 2022

// Global variables
let employees = []; // Array to store employee objects

// Employee object constructor
function Employee(name, age, designation, department, salary) {
    this.name = name;
    this.age = age;
    this.designation = designation;
    this.department = department;
    this.salary = salary;
}

// Function to add an employee to the directory
function addEmployee() {
    let name = prompt("Enter employee name:");
    let age = parseInt(prompt("Enter employee age:"));
    let designation = prompt("Enter employee designation:");
    let department = prompt("Enter employee department:");
    let salary = parseFloat(prompt("Enter employee salary:"));

    let employee = new Employee(name, age, designation, department, salary);
    employees.push(employee);

    console.log("Employee added successfully!");
}

// Function to remove an employee from the directory
function removeEmployee() {
    let name = prompt("Enter employee name to remove:");

    let index = employees.findIndex(
        (emp) => emp.name.toLowerCase() === name.toLowerCase()
    );

    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee removed successfully!");
    } else {
        console.log("Employee not found!");
    }
}

// Function to search for employees based on a given criteria
function searchEmployees() {
    let criteria = prompt("Enter search criteria (name/age/designation/department/salary):");
    let searchValue = prompt("Enter search value:");

    let results = [];

    switch (criteria.toLowerCase()) {
        case "name":
            results = employees.filter(
                (emp) => emp.name.toLowerCase() === searchValue.toLowerCase()
            );
            break;
        case "age":
            results = employees.filter((emp) => emp.age === parseInt(searchValue));
            break;
        case "designation":
            results = employees.filter(
                (emp) => emp.designation.toLowerCase() === searchValue.toLowerCase()
            );
            break;
        case "department":
            results = employees.filter(
                (emp) => emp.department.toLowerCase() === searchValue.toLowerCase()
            );
            break;
        case "salary":
            results = employees.filter(
                (emp) => emp.salary === parseFloat(searchValue)
            );
            break;
        default:
            console.log("Invalid search criteria!");
            return;
    }

    console.log("Search results:");
    for (let i = 0; i < results.length; i++) {
        console.log(`Name: ${results[i].name}`);
        console.log(`Age: ${results[i].age}`);
        console.log(`Designation: ${results[i].designation}`);
        console.log(`Department: ${results[i].department}`);
        console.log(`Salary: ${results[i].salary}\n`);
    }
}

// Function to display all employees in the directory
function displayEmployees() {
    console.log("Employee Directory:");
    for (let i = 0; i < employees.length; i++) {
        console.log(`Name: ${employees[i].name}`);
        console.log(`Age: ${employees[i].age}`);
        console.log(`Designation: ${employees[i].designation}`);
        console.log(`Department: ${employees[i].department}`);
        console.log(`Salary: ${employees[i].salary}\n`);
    }
}

// Main program loop
let choice;
do {
    console.log("\n-- Employee Directory Management System --");
    console.log("1. Add Employee");
    console.log("2. Remove Employee");
    console.log("3. Search Employees");
    console.log("4. Display Employees");
    console.log("5. Exit");

    choice = parseInt(prompt("Enter your choice (1-5):"));

    switch (choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            removeEmployee();
            break;
        case 3:
            searchEmployees();
            break;
        case 4:
            displayEmployees();
            break;
        case 5:
            console.log("Exiting...");
            break;
        default:
            console.log("Invalid choice! Please try again.");
            break;
    }
} while (choice !== 5);