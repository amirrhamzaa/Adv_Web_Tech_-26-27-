Product Management API

Student Information

Name: Amir Hamza
Student ID: 23-54816-3
Section: D
Course: Advanced Web Technology
Lab Task: Lab Task 1

Project Overview

Product Management API is a RESTful API developed using NestJS, TypeScript, TypeORM, and PostgreSQL. It provides CRUD (Create, Read, Update, Delete) operations for managing products and employees.

Technologies Used

- Node.js
- NestJS
- TypeScript
- TypeORM
- PostgreSQL
- Docker
- Postman
- DBeaver

Features

Product Management:

- Create a new product
- Retrieve all products
- Retrieve a product by ID
- Update product information
- Delete a product

Employee Management:

- Create a new employee
- Retrieve all employees
- Retrieve an employee by ID
- Update employee information
- Delete an employee

Database Configuration

- Database System: PostgreSQL
- Database Name: user_managament
- Port: 5432

PostgreSQL runs in a Docker container. Database credentials and other environment-specific settings are configured through environment variables in the local .env file.

Installation and Setup

Prerequisites:

Make sure the following tools are installed:

- Node.js
- pnpm
- Docker Desktop
- Postman
- DBeaver (optional, for database inspection)

Setup Instructions:

1. Open the project directory.

2. Install the project dependencies:

   pnpm install

3. Create a local .env file using .env.example as a reference. Configure the required environment variables.

4. Start Docker Desktop and ensure that the PostgreSQL container is running.

5. Run the database migrations using the migration command configured in package.json, if required.

6. Start the development server:

   pnpm run start:dev

7. The API server will be available at:

   http://localhost:5001

API Endpoints

Product Endpoints:

- POST /products : Create a product
- GET /products : Retrieve all products
- GET /products/:id : Retrieve a product by ID
- PATCH /products/:id : Update a product
- DELETE /products/:id : Delete a product

Employee Endpoints:

- POST /employees : Create an employee
- GET /employees : Retrieve all employees
- GET /employees/:id : Retrieve an employee by ID
- PATCH /employees/:id : Update an employee
- DELETE /employees/:id : Delete an employee

API Testing

Product and employee CRUD operations were tested using Postman.

The following screenshots document the Product API testing process. They are stored in the screenshots/ directory.

1. 01-create.png : Create a product
2. 02-get-all.png : Retrieve all products
3. 03-get-by-id.png : Retrieve a product by ID
4. 04-update.png : Update a product
5. 05-confirm-update.png : Verify the updated product
6. 06-delete.png : Delete a product
7. 07-confirm-delete.png : Verify that the deleted product is absent

Project Structure

product-management-api/
|-- src/
|-- screenshots/
|   |-- 01-create.png
|   |-- 02-get-all.png
|   |-- 03-get-by-id.png
|   |-- 04-update.png
|   |-- 05-confirm-update.png
|   |-- 06-delete.png
|   |-- 07-confirm-delete.png
|-- .env.example
|-- .gitignore
|-- package.json
|-- pnpm-lock.yaml
|-- README.md

Security

Database credentials and other sensitive environment variables are stored in the local .env file. The .env file must not be committed to the repository.

Only .env.example, containing placeholder values rather than actual credentials or secrets, should be included in the submission.