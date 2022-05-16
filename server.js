// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');
const db = require('./db/connection');
const { connection } = require('./db');
const { exit } = require('process');
require('console.table');


db.connect(async function () {
    trackerMenu();
})

function trackerMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Welcome to the Employee Tracker Menu. Please select one of the options you would like to do?',
            choices: [
                'View Company Departments', 'View Company Roles', 'View Company Employees', 'Add a New Company Department', 'Add a New Company Role', 'Add a New Company Employee', 'Quit'
            ],
        }])
        .then((answer) => {
            switch (answer.choice) {

                case 'View Company Departments':
                    viewCompanyDepartments();
                    break;
                case 'View Company Roles':
                    viewCompanyRoles();
                    break;
                case 'View Company Employees':
                    viewCompanyEmployees();
                    break;
                case 'Add a New Company Department':
                    addCompanyDepartment();
                    break;
                case 'Add a New Company Role':
                    addCompanyRole();
                    break;
                case 'Add a New Company Employee':
                    addCompanyEmployee();
                    break;
                case 'Quit':
                    Quit();
                    break;
            }
        })
};

function viewCompanyDepartments() {
    const request = "SELECT * FROM department";
    db.query(request, function (err, res) {
        if (err) throw err;
        console.log("Viewing All Company Departments");
        console.table(res);
        trackerMenu();
    })
};

function viewCompanyRoles() {
    let request = "SELECT * FROM roles";
    db.query(request, function (err, res) {
        if (err) throw err;
        console.log("Viewing All Company Roles");
        console.table(res);
        trackerMenu();
    })
};

function viewCompanyEmployees() {
    const request = "SELECT * FROM employee";
    db.query(request, function (err, res) {
        if (err) throw err;
        console.log("Viewing All Company Employees");
        console.table(res);
        trackerMenu();
    })
};

function addCompanyDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter new department name.',
            name: 'AddCompanyDepartment'
        }
    ])
        .then(function (response) {
            connection.query('INSERT INTO department(name) VALUES(?)',
                [response.AddCompanyDepartment], function (err, response) {
                    console.log(err)
                    if (err) throw err
                    console.table(response);
                })
            trackerMenu();
        })
};

function addCompanyRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter new role.',
            name: 'AddCompanyRole'
        },
        {
            type: 'input',
            message: 'Enter new role salary.',
            name: 'AddRoleSalary'
        },
        {
            type: 'input',
            message: 'Enter new role ID',
            name: 'AddRoleID'
        }
    ])
        .then(function (response) {
            connection.query('INSERT INTO roles(title, salary, department_id) VALUES (?,?,?)',
                [response.AddCompanyRole, response.AddRoleSalary, response.AddRoleID], function (err, response) {
                    console.log(err)
                    if (err) throw err;
                    console.table(response);
                })
                trackerMenu();
        })
};

function addCompanyEmployee() {
    inquirer.prompt ([
        {
        type: 'input',
        message: 'Enter employee first name.',
        name: 'FirstName'
        },
        {
            type: 'input',
            message: 'Enter employee last name.',
            name: 'LastName'
        },
        {
            type: 'input',
            message: 'Enter employee ID number',
            name: 'AddEmployeeID'
        },
        {
            type: 'input',
            message: 'Enter their managers ID',
            name: 'AddManagerID'
        }
        
    ])
    .then(function (response) {
        connection.query('INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', 
        [response.FirstName, response.LastName, response.AddEmployeeID, response.AddManagerID], function(err,response) {
            console.log(err)
            if (err) throw err;
            console.table(response);
        })
        trackerMenu();
    })
}

function Quit() {
    console.log('Thanks for using the employee tracker!');
    console.log('The company thanks you for your time!');
    console.log('Goodbye!');
    process.exit();
};