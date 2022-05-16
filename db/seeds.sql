use employees;

INSERT INTO department
    (name)
VALUES
('Human Resources'),
('Security'),
('Sales'),
('Web Development'),
('Finance'),
('Legal')

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
('Nick', 'Luis', 1, 720),
('Dan', 'Hammer', 1, NULL)
('Bob', 'Dillon', 2, 225),
('Howard', 'Stark', 2, NULL),
('David', 'Cook', 3, 117),
('Tim', 'Allen', 3, NULL),
('Linda', 'Toad', 4, 724),
('Rick', 'Ross', 4, NULL),
('Ted', 'Bundy', 5, 217),
('Tom', 'Bahamma', 5, NULL),
('Jude', 'Sven', 6, 909),
('Tessa', 'Nicks', 6, NULL);