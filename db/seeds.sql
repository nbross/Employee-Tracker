use employees;

INSERT INTO department
    (name)
VALUES
('Human Resources'),
('Security'),
('Sales'),
('Web Development'),
('Finance'),
('Legal');

INSERT INTO roles
    (title, salary, department_id)
VALUES
('HR Manager', 75000, 1),
('HR Rep', 55000, 1),
('Cyber Security Manager', 90000, 2),
('Cyber Security Engineer', 75000, 2),
('Sales Manager', 65000, 3),
('Sales Rep', 45000, 3),
('Lead Web Developer', 110000, 4),
('Back-end Web Developer', 90000, 4),
('Financial Officer', 100000, 5),
('Accountant', 70000, 5),
('Lawyer', 150000, 6),
('Legal Team Manager', 250000, 6);


INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES 
('Nick', 'Luis', 1, NULL),
('Dan', 'Hammer', 2, 1),
('Bob', 'Dillon', 3, NULL),
('Howard', 'Stark', 4, 3),
('David', 'Cook', 5, NULL),
('Tim', 'Allen', 6, 5),
('Linda', 'Toad', 7, NULL),
('Rick', 'Ross', 8, 7),
('Ted', 'Bundy', 9, NULL),
('Tom', 'Bahamma', 10, 9),
('Jude', 'Sven', 11, NULL),
('Tessa', 'Nicks', 12, 11);