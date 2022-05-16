const inquirer = require('inquirer');
const fs = require('fs');

const trackerMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'tracker menu',
            message: 'Welcome to the Employee Tracker Menu. Please select one of the options you would like to do?',
            choices: ['View Company Departments', 'View Company Roles', 'View Company Employees', 'Add a New Company Department', 'Add a New Company Role', 'Add a New Company Employee', 'Update an Existing Employee Role', 'Quit']
        }])
        .then(userMenuChoice => {
            switch (userMenuChoice.trackerMenu) {
                case 'View Company Departments':
                    viewDepartments();
                    break;
                case 'View Company Roles':
                    viewRoles();
                    break;
                case 'View Company Employees':
                    viewEmployees();
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
                case 'Update an Existing Employee Role':
                    updateRole();
                    break;
                default:
                    process.quit();
            }
        });
};

trackerMenu();