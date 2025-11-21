# Choudhary Tara Chand (CTC) Restaurant Website

Welcome to the Choudhary Tara Chand (CTC) Restaurant Website project! This is a full-stack eCommerce application built using the MERN stack (MongoDB, Express, React, Node.js) with a focus on providing an enhanced user experience and SEO optimization.

## Project Structure

The project is organized into two main directories: `client` and `server`.

### Client

The `client` directory contains the React application, which includes:

- **src/components**: Contains reusable components such as Navbar, Hero, Menu, Cart, Footer, and ProductCard.
- **src/pages**: Contains the main pages of the application, including Home, Shop, ProductDetail, Checkout, and About.
- **src/hooks**: Custom hooks for managing state, such as the useCart hook.
- **src/context**: Context provider for managing cart state across the application.
- **src/App.jsx**: Main application component that sets up routing.
- **src/main.jsx**: Entry point for the React application.
- **src/index.css**: Global styles for the application.
- **vite.config.js**: Configuration file for Vite.
- **package.json**: Lists dependencies and scripts for the client-side application.
- **index.html**: Main HTML file serving the React application.

### Server

The `server` directory contains the backend application, which includes:

- **models**: Defines the schemas for Product, Order, and User.
- **routes**: Contains API routes for products, orders, and users.
- **controllers**: Handles the logic for API requests related to products, orders, and users.
- **middleware**: Contains middleware for authentication.
- **config**: Configuration for connecting to the MongoDB database.
- **server.js**: Entry point for the server application.
- **package.json**: Lists dependencies and scripts for the server-side application.
- **.env**: Contains environment variables for the application.

## Features

- Fully responsive design with animations for an enhanced user experience.
- E-commerce functionality allowing users to browse products, add them to the cart, and proceed to checkout.
- Integration with MongoDB Atlas for database management.
- SEO optimization to improve visibility in search engines.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account for database hosting.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ctc-restaurant-website
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

4. Set up your MongoDB Atlas connection string in the `.env` file in the server directory:
   ```
   MONGODB_URI=<your-mongodb-atlas-connection-string>
   ```

5. Start the server:
   ```
   npm start
   ```

6. In a new terminal, navigate to the client directory and start the React application:
   ```
   cd client
   npm run dev
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for checking out the Choudhary Tara Chand (CTC) Restaurant Website! We hope you enjoy using it as much as we enjoyed building it.