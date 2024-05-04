##CRON JOB-API
Welcome to the documentation for the CRON JOB-API!
A Backend Developer Assignment with node js: Creating CRUD Functions with MySQL and Cron Job Integration

##Introduction
The CRON JOB-API is a set of endpoints designed to implement CRUD (Create, Read, Update, Delete) operations on product table on a MySQL database and set up a cron job to periodically fetch data and post it to different  Sales tables within the database.

##Technologies Used
-Node.js
-Express.js
-TypeScript
-Cron
-Prisma (MysQL ORM)
-Winston (for logging)
-express-async-errors(simplifies error handling in asynchronous routes)
-express-validator(validate request)
-dotenv (for environment variables)
-Helmet


# Project Setup Guide

This guide provides instructions on setting up the project, installing dependencies, configuring the database, running the application, and accessing the API documentation.

## Installation

1. **Clone the repository:**  
   ```bash
   git clone <repository_url>

2. cd <project_directory>
3.npm install or yarn install

#Database Setup
Set up your database connection:
Update the database configuration in the .env file with your database credentials:

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password

connection string
DB_URL=mysql://your_username:your_password@localhost:3306/cron_db

#Run database migrations:

npx prisma migrate dev

Set up environment variables: Rename .env.example to .env and fill in the required variables.

#Running the Application
Start the application server:
npm start (for production)
npm run dev(for development)

## Documentation
For detailed API documentation and examples, please refer to the [Postman Documentation]
(https://documenter.getpostman.com/view/26097715/2sA3JGePSS)

##Endpoints

#Products
-POST /api/v1/product: Create a new product.
-GET /api/v1/product: Get all products.
-GET /api/v1/product/:id: Get a product by ID.
-PUT /api/v1/product/:id: Update a product.
-DELETE /api/v1/product/:id: Delete a product by ID.


POST /api/v1/product
Create a New Product

Body
{
  "name": "Book",
  "price": 500,
  "quantity": 10,
  "description": "Magic for kids who love to write"
}
Example

# Create a New Product
curl --location --request POST 'http://localhost:5000/api/v1/product' \
--data '{
"name":"Book",
"price":500,
"quantity":10,
"description":"Magic for kids who love to write"
}'

#Response Codes
201 CREATED: Successful creation.
200 OK: Successful request.
404 Not Found: Resource not found.
500 Internal Server Error: Server error.
Error Handling
Errors are returned as JSON objects with a message field describing the error.
