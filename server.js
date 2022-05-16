// Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');
const db = require('./db/connection');
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

function Quit() {
    console.log('Thanks for using the employee tracker!'); 
    console.log('The company thanks you for your time!');
    console.log('Goodbye!');
    process.exit();
}