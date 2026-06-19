# 🛒 MyStore - Angular E-commerce Application

MyStore is a single-page e-commerce application built with Angular. It allows users to browse a list of products, view detailed product information, add items to a shopping cart, and complete the checkout process.

## ✨ Key Features

- **Product List Page**: Displays available products with images, names, prices, and an "Add to Cart" button.
- **Product Details Page**: Shows comprehensive information about a selected product, including a description and quantity selector.
- **Shopping Cart**: View added items, modify quantities, remove products, and see the total cost update instantly.
- **Checkout Form**: Collects user information (name, address, payment details) with built-in form validation (e.g., minimum length requirements).
- **Order Confirmation**: Displays a thank-you message and a randomly generated order number upon successful checkout, and clears the cart.
- **Responsive Feedback**: Users receive alerts or visual feedback when products are added to the cart or when forms are submitted.

## 🛠️ Technologies Used

- **Angular** (v21): Framework for building the SPA.
- **TypeScript**: For type-safe, scalable code.
- **RxJS**: Used for state management (BehaviorSubject) to share cart data between components.
- **HTML5 & CSS3**: For structuring and styling the user interface.

## 🚀 How to Run the Project Locally

Follow these steps to get the application up and running on your machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (includes npm)
- [Angular CLI](https://angular.io/cli) (Install globally via `npm install -g @angular/cli`)

### Installation & Setup

1.  **Navigate to the project directory**:
    *(If you are in the outer `my-store-app` folder, enter the inner folder containing `angular.json`)*:
    ```bash
    cd my-store-app/my-store-app
Install the dependencies:

bash
npm install
Development Server
Run the following command to start the local development server:

bash
ng serve
Or using npx (if the global CLI is not found):

bash
npx ng serve
Open your browser and navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

Build
Run the following command to build the project for production:

bash
ng build
The build artifacts will be stored in the dist/ directory.

📁 Project Structure (Simplified)
text
src/
└── app/
    ├── components/
    │   ├── cart/               # Shopping cart logic and view
    │   ├── checkout/           # Checkout form and validation
    │   ├── order-confirmation/ # Order success page
    │   ├── product-details/    # Detailed product view
    │   └── product-list/       # Main product catalog
    ├── models/                 # TypeScript Interfaces (e.g., Product)
    ├── services/               # Core logic (CartService)
    ├── app-module.ts           # Main App Module
    ├── app-routing-module.ts   # Routing Configuration
    └── app.html                # Main Layout (Navigation & Router Outlet)