# Hexalud

Hexalud is a Node.js application for managing DNA mutations. This README provides an overview of the project structure and instructions for setting it up and running it on your local machine.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or a connection to a remote MongoDB server.
- A text editor or IDE of your choice (e.g., Visual Studio Code).

## Getting Started

1. Clone this repository to your local machine:

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

```bash
git clone https://github.com/RicardoIsaac/hexalud
```
![GitLab](https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white)
```bash
git clone https://gitlab.com/hexalud1/hexalud.git
```
2. Navigate to the project directory:

```bash
cd hexalud
```
3. Install the project dependencies:
```bash
npm install
```
4. Create a .env file in the project root and add your MongoDB connection string:
```bash
MongoSRV=your-mongodb-connection-string
```
5. Start the server:

```bash
npm start
```
The server should now be running on http://localhost:80

## Project Structure

The project is structured as follows:

- **server.js:** The main server file that configures Express and starts the server.
- **routes/adn.routes.js:** Contains the API routes for managing DNA mutations.
- **middleware/error.middleware.js:** Custom error handling middleware.
- **package.json:** Configuration file that lists project dependencies and scripts.
- **controllers/dna.controller.js:** functions who helps to the operation of the server.

## Usage

The project is structured in the next way:

- Access the API at http://localhost:80 or your specified port.
- The root endpoint / will return a "Conexion exitosa" message if the server is running.
- Use the API endpoints defined in adn.routes.js to manage DNA mutations.

```javascript
import express from 'express';
import { mutationSearch, getStats } from '../controllers/dna.controller.js';

const router = express.Router();

router.post('/mutation', mutationSearch);

router.get('/stats', getStats);

export default router;
```

- You define a POST endpoint at /mutation that maps to the mutationSearch controller function. This endpoint will be used to check if a DNA sequence contains mutations.

- In POST /mutation, expect an object NxN with the name of dna ({ dna: [NxN] }). If the object doesn't exist or it's not an NxN matrix, the server will throw a new error.

- You define a GET endpoint at /stats that maps to the getStats controller function. This endpoint will be used to retrieve statistics related to DNA mutation
