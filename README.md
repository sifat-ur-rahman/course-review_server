# assignment-3 course-review_server

Server Live Link

### https://course-review-server.vercel.app

## Run the server application locally

If you want to run the server on your computer, run the command `tsc -w` in another terminal to convert the TypeScript code to JavaScript code. And start the server with `npm start` command.

## Server Documentation

- This server is created to manage Course,Courses category and their Review.

## Server API

### 1. Create a Course

Endpoint: POST `/api/course`

### 2. Retrieve a list of all users

Endpoint: GET `/api/users`

### 3. Retrieve a specific user by ID

Endpoint: GET `/api/users/:userId`

### 4. Update user information

Endpoint: PUT `/api/users/:userId`

### 5. Delete a user

Endpoint: DELETE `/api/users/:userId`

### 6. Add New Product in Order

Endpoint: PUT `/api/users/:userId/orders`

### 7. Retrieve all orders for a specific user

Endpoint: GET `/api/users/:userId/orders`

### 8. Calculate Total Price of Orders for a Specific User

Endpoint: GET `/api/users/:userId/orders/total-price`
