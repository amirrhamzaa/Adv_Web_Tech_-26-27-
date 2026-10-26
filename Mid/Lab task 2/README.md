Lab Task 2: NestJS, TypeORM and PostgreSQL

Project Overview

This project is developed as part of the Advanced Web Technology course lab assignment. It demonstrates how to build RESTful APIs using NestJS, TypeORM, and PostgreSQL.

The application manages three types of data: Products, Employees, and Categories. It supports creating and retrieving records, database migrations, and request validation using DTOs.

Technologies Used

- NestJS : Backend application framework
- TypeScript : Programming language
- TypeORM : Object-relational mapping and database migrations
- PostgreSQL : Relational database
- class-validator : Request data validation
- Postman : API testing
- Docker : Running database and supporting services

Features

- Three database entities: Product, Employee, and Category
- PostgreSQL database connection using TypeORM
- Database schema creation through migrations
- DTO-based request validation
- REST API endpoints for creating and retrieving records
- HTTP 400 Bad Request responses for invalid required fields
- API testing with Postman

Database Entities

1. Product

- id : Primary key
- name : Product name
- category : Product category
- price : Product price
- quantity : Available quantity

2. Employee

- id : Primary key
- name : Employee name
- email : Employee email address
- phone : Employee phone number
- password : Employee password
- age : Employee age
- yearsOfWorking : Years of work experience

The email field is unique.

3. Category

- id : Primary key
- name : Category name
- description : Category description

Setup and Installation

Prerequisites

- Node.js
- pnpm
- PostgreSQL, either locally or through Docker
- Postman

1. Install Dependencies

Run the following command from the project directory:

npx pnpm@10 install

2. Configure Environment Variables

Create a .env file using .env.example as a reference. Configure the PostgreSQL connection details and other required environment variables.

Do not commit your actual .env file or expose passwords and secrets.

3. Start the Database

If using the provided Docker Compose configuration, start the required services with:

docker compose up -d

4. Run Database Migrations

Execute the migration script configured in package.json:

npx pnpm@10 run migration:run

The migrations create the required database tables for Products, Employees, and Categories.

5. Start the Application

npx pnpm@10 run start:dev

The application runs at:

http://localhost:5001

API Endpoints

- POST /products : Create a product
- GET /products : Retrieve all products
- POST /employees : Create an employee
- GET /employees : Retrieve all employees
- POST /categories : Create a category
- GET /categories : Retrieve all categories

Example API Requests

Create a Product

Request:

POST http://localhost:5001/products
Content-Type: application/json

Request Body:

{
  "name": "Notebook",
  "category": "Stationery",
  "price": 50,
  "quantity": 10
}

Create an Employee

Request:

POST http://localhost:5001/employees
Content-Type: application/json

Request Body:

{
  "name": "Employee One",
  "email": "employee@example.com",
  "phone": "01700000000",
  "password": "TestPassword123",
  "age": 25,
  "yearsOfWorking": 2
}

Use a unique email address for each employee record.

Create a Category

Request:

POST http://localhost:5001/categories
Content-Type: application/json

Request Body:

{
  "name": "Stationery",
  "description": "Office and school stationery items"
}

Request Validation

DTOs use the @IsNotEmpty() decorator to validate required fields.

If a required field is empty, the application returns an HTTP 400 Bad Request response.

Validation was tested for all three entities using Postman.

Database Migrations

TypeORM migrations are used to create and manage the database schema.

Migration file:

src/database/migrations/1710000000000-CreateProductsAndEmployees.ts

The migration creates the products, employees, and categories tables. It also defines rollback operations for removing these tables.

Migration history is recorded in the migrations table.

Database Verification

After executing the TypeORM migration, the following tables were verified in the PostgreSQL database:

- products
- employees
- categories
- migrations

The migrations table stores the migration execution history.

Postman Testing

The following tests were performed:

- Create a Product and retrieve product records.
- Create an Employee and retrieve employee records.
- Create a Category and retrieve category records.
- Submit requests with empty required fields.
- Verify that invalid requests return HTTP 400 Bad Request responses.

Validation Testing Results

- Product : Empty required field : 400 Bad Request
- Employee : Empty required field : 400 Bad Request
- Category : Empty required field : 400 Bad Request

All three validation cases were tested successfully.

Screenshots

The screenshots/ directory contains evidence of API testing, including successful POST requests, GET requests, and validation error responses.

The screenshots demonstrate that records can be created, retrieved, and validated through the API.

Conclusion:

This lab assignment demonstrates the implementation of a NestJS backend with TypeORM and PostgreSQL. It covers entity definition, database migrations, REST API development, DTO validation, and API testing using Postman.