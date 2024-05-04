# CRON JOB-API

Welcome to the documentation for the CRON JOB-API! This API is a Backend Developer Job Aplication Assignment with Node.js, implementing CRUD Functions with MySQL and Cron Job Integration.

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
2. **Navigate to the project directory:**  
   ```bash
   cd <project_directory>

2. **Install dependencies:**  
   ```bash
   npm install 
   ```
or 

 ```bash
  yarn install
 ```

## Database Setup

**Set up your database connection:**
Update the database configuration in the **.env** file with your database credentials:

1. **Set up your database connection:**
   ```plaintext
   DB_CONNECTION=mysql
   DB_HOST=localhost
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_username
   DB_PASSWORD=your_password

 **connection string:**
   ```bash
   DB_URL=mysql://your_username:your_password@localhost:3306/cron_db
   ```
**Run database migrations:**
   ```bash
   npx prisma migrate dev
```

**Set up environment variables: Rename .env.example to .env and fill in the required variables.**
```plaintext
PORT=<port_number>
DATABASE_URL=<your_database_url>
```


## Running the Application
1. **Start the application server:**
   ```bash
   npm start  # for production
   ```
 or

 ```bash
   npm run dev  # for development
 ```

## Documentation
For detailed API documentation and examples, please refer to the [Postman Documentation](https://documenter.getpostman.com/view/26097715/2sA3JGePSS)

## Endpoints
**Products**
```plaintext
POST /api/v1/product: Create a new product.
GET /api/v1/product: Get all products.
GET /api/v1/product/:id: Get a product by ID.
PUT /api/v1/product/:id: Update a product Info.
DELETE /api/v1/product/:id: Delete a product by ID.
```

**Create a New Product**
POST /api/v1/product

**Body:**
```json
{
  "name": "Book",
  "price": 500,
  "quantity": 10,
  "description": "Magic for kids who love to write"
}
```

**Example:**
```bash
curl --location --request POST 'https://marketplace-uq57.onrender.com/api/v1/product' \
--data '{
"name":"Book",
"price":500,
"quantity":10,
"description":"Magic for kids who love to write"
}'
```

# Response Codes
```plaintext
**201 CREATED:** Successful creation.
**200 OK:** Successful request.
**404 Not Found:** Resource not found.
**500 Internal Server Error:** Server error.
```

# Error Handling
```plaintext
Errors are returned as JSON objects with a message field describing the error.
```
