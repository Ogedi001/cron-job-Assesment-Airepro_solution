# CRON JOB-API

Welcome to the documentation for the CRON JOB-API! This API is a Backend Developer Assignment with Node.js, implementing CRUD Functions with MySQL and Cron Job Integration.

## Introduction

The CRON JOB-API provides endpoints for managing products through CRUD operations and scheduling tasks using cron jobs.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Cron
- Prisma (MySQL ORM)
- Winston (for logging)
- express-async-errors (simplifies error handling in asynchronous routes)
- express-validator (validate request)
- dotenv (for environment variables)
- Helmet

## Installation

1. **Clone the repository:**  
   ```bash
   git clone <repository_url>
Navigate to the project directory:
bash
Copy code
cd <project_directory>
Install dependencies:
bash
Copy code
npm install
or
bash
Copy code
yarn install
Database Setup
Set up your database connection:
Update the database configuration in the .env file with your database credentials:
plaintext
Copy code
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
Connection string:
plaintext
Copy code
DB_URL=mysql://your_username:your_password@localhost:3306/cron_db
Run database migrations:
bash
Copy code
npx prisma migrate dev
Set up environment variables: Rename .env.example to .env and fill in the required variables.
Running the Application
Start the application server:
bash
Copy code
npm start  # for production
or
bash
Copy code
npm run dev  # for development
Documentation
For detailed API documentation and examples, please refer to the Postman Documentation.
Endpoints
Products
POST /api/v1/product: Create a new product.
GET /api/v1/product: Get all products.
GET /api/v1/product/:id: Get a product by ID.
PUT /api/v1/product/:id: Update a product.
DELETE /api/v1/product/:id: Delete a product by ID.
Create a New Product
POST /api/v1/product

Body:

json
Copy code
{
  "name": "Book",
  "price": 500,
  "quantity": 10,
  "description": "Magic for kids who love to write"
}
Example:

bash
Copy code
curl --location --request POST 'http://localhost:5000/api/v1/product' \
--data '{
"name":"Book",
"price":500,
"quantity":10,
"description":"Magic for kids who love to write"
}'
Response Codes
201 CREATED: Successful creation.
200 OK: Successful request.
404 Not Found: Resource not found.
500 Internal Server Error: Server error.
Error Handling
Errors are returned as JSON objects with a message field describing the error.
