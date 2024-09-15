# 📦 QuickStock - Stock Management App

https://quickstock.vercel.app/

**QuickStock** is a comprehensive stock management application designed to efficiently manage and track purchases, sales, firms, brands, and products. With a user-friendly dashboard, it allows users to perform CRUD operations on various resources such as firms, brands, and products. The app ensures smooth backend communication with custom hooks and leverages multiple libraries and technologies to deliver a seamless user experience.

## 🌟 Project Purpose

QuickStock aims to streamline stock management by offering a dashboard that features sales, purchases, firms, brands, and products, each with dedicated pages. Users can perform the following actions:

- Add, update, and delete items (CRUD operations) for brands, firms, products, and more.
- List, view, and interact with data efficiently through the UI.
- Perform bulk operations such as importing and exporting stock data.

## 🛠️ Technologies Used

- **ReactJS**: Main framework for building the user interface and component structure.
- **Vite**: Used for lightning-fast development and bundling in the React environment.
- **Material UI (MUI)**: For a consistent, responsive, and polished UI design.
- **Tailwind CSS**: Used for custom styling in some pages, allowing flexibility alongside Material UI.
- **Redux Toolkit**: For state management and simplifying the app's state logic with slices for both authentication and stock management.
- **Redux Persist**: Ensures that the application state is retained across browser sessions, even after refresh.
- **Axios**: For making HTTP requests and handling CRUD operations with the backend.
- **Custom Hooks**:
  - `useStockCall`: Custom hook to handle stock-related API calls and data fetching.
  - `useAuthCall`: Custom hook to manage authentication-related API calls and token management.
- **Promise.all**: Used to make concurrent API requests for fetching product, category, and brand data simultaneously, improving performance.
- **React Router**: For handling navigation and managing routes between different pages (e.g., dashboard, purchases, sales, firms, brands, products).
- **Toastify**: Provides user feedback through success and error notifications for actions like login, logout, and CRUD operations.
- **Formik & Yup**: Used for handling form validation and submission in the login, register, and other forms, ensuring robust form control.
- **React Icons & MUI Icons**: For incorporating icons throughout the app to enhance the user experience.
- **Dark Mode**: Implemented with `Redux Toolkit` and Material UI’s theme system, allowing users to toggle between light and dark modes.
- **Postman**: Used for testing and verifying backend API endpoints during development. -**i18n**: Implemented internationalization with language options for German (de) and English (en), allowing users to seamlessly switch between these languages.

## ⚙️ Features

- **🛠️ CRUD Operations**: Users can create, read, update, and delete entries for products, brands, firms, purchases, and sales, with full backend integration.
- **📊 Dashboard**: Features real-time data on stock levels, purchases, and sales, represented with charts and tables.
- **🌐 Backend Integration**: Axios is used for seamless communication with the backend, ensuring quick and reliable data fetching and submission.
- **🔄 Global State Management**: Utilized `Redux Toolkit` for managing authentication state and stock data across the application.
- **🚀 Fast Development with Vite**: The project uses Vite for fast compilation, hot module reloading, and a smoother development experience.
- **🔄 Dynamic Theming**: Users can toggle between light and dark mode using a custom theme managed by Redux slices.
- **🔔 Notifications**: Success and error messages are displayed using `Toastify` for important actions like login/logout, data updates, and error handling.
- **📁 Reusable Components**: Extensive use of reusable components and DRY principles throughout the project, making the codebase maintainable and scalable.

## 📐 Project Structure

```
|--QuickStock(folder)
|
├── public
│    ├── 📂 assets
│    │     └── 📂 sidebar
│    │             └──  [icons(svg)]
├── src
│    │
│    ├── 📂 app
│    │       └── store.js
│    ├── 📂 assets
│    │       └── 📂 images
│    │               └── [images]
│    ├── 📂 components
│    │       ├── 📂 Brands
│    │       │        ├── BrandCard.jsx
│    │       │        └── BrandModal.jsx
│    │       ├── 📂 Dashboard
│    │       │        ├── Charts.jsx
│    │       │        └── KpiCards.jsx
│    │       ├── 📂 Firms
│    │       │        ├── FirmCard.jsx
│    │       │        └── FirmModal.jsx
│    │       ├── 📂 Forms
│    │       │        ├── LoginForm.jsx
│    │       │        └── RegisterForm.jsx
│    │       ├── 📂 Home
│    │       │        └── Navbar.jsx
│    │       ├── 📂 Products
│    │       │        ├── ProductModal.jsx
│    │       │        └── ProductTable.jsx
│    │       ├── 📂 Purchases
│    │       │        ├── PurchaseModal.jsx
│    │       │        └── PurchaseTable.jsx
│    │       ├── 📂 Sales
│    │       │        ├── SaleModal.jsx
│    │       │        └── SaleTable.jsx
│    │       ├── 📂 SideBar
│    │       │        ├── IconBar.jsx
│    │       │        ├── SideBar.jsx
│    │       │        └── SidebarListItems.jsx
│    │       ├── AppLayout.jsx
│    │       ├── Button.jsx
│    │       ├── LanguageSwitcher.jsx
│    │       └── Logo.jsx
│    │
│    │
│    ├──📂 features
│    │       ├── authSlice.jsx
│    │       ├── stockSlice.jsx
│    │       └── themeSlice.jsx
│    │
│    ├── 📂helpers
│    │       └── ToastNotify.js
│    │
│    ├──📂 hooks
│    │       ├── useAuthCall.jsx
│    │       ├── useAxios.jsx
│    │       └── useStockCall.jsx
│    │
│    ├──📂 pages
│    │       ├── Brands.jsx
│    │       ├── Dashboard.jsx
│    │       ├── Firms.jsx
│    │       ├── Home.jsx
│    │       ├── Login.jsx
│    │       ├── Products.jsx
│    │       ├── Purchases.jsx
│    │       ├── Register.jsx
│    │       └── Sales.jsx
│    │
│    ├── 📂 router
│    │       ├── AppRouter.jsx
│    │       └── PrivateRouter.jsx
│    │
│    ├── 📂 utils
│    │       └── i18n.js
│    │
│    ├── App.jsx
│    ├── index.css
│    ├── main.jsx
│    └── theme.js
│
├── .gitignore
├── eslint.config.js
├── frontend.env
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔐 Authentication Flow

- **User Registration & Login**: Authentication is handled through custom hooks and Redux slices. The registration, login, and logout functionalities are integrated with API calls to the backend.
- **Token Management**: The app uses tokens to handle authenticated sessions, storing them using Redux Persist for session persistence across browser refreshes.

## 📦 Stock Management

- **Product, Brand, Firm Management**: Users can add, update, or delete products, brands, and firms through CRUD operations, which are managed using Axios and Redux.
- **Sales & Purchases**: The app offers a detailed view of all sales and purchases, allowing users to manage stock levels and track transactions efficiently.

## 🚦 Dark Mode

- Dark mode is implemented using the `themeSlice` in Redux Toolkit. It allows users to switch between dark and light themes using a button in the navbar.
- The theme is persisted across sessions using Redux Persist, so the user's preferred theme is maintained even after a page refresh.

## 🔄 Redux Persist

- `Redux Persist` is used to maintain the user session and theme preferences, so even after a page refresh, the state is preserved.
- The persisted reducer ensures that authentication tokens and user-specific data remain intact during browser sessions.

## 📚 At the End of This Project, will be able to:

- How to efficiently manage global state with **Redux Toolkit** and **Redux Persist**.
- Best practices for performing **CRUD operations** using **Axios** and handling backend communication.
- How to implement user authentication with **custom hooks** and token management.
- Building **reusable components** and adhering to **DRY principles**.
- Handling form validation and submission with **Formik** and **Yup**.
- Utilizing **Material UI** and **Tailwind CSS** together for a flexible design system.
- Implementing **dark mode** toggle and dynamic theming in a React app.
- Fast and efficient development using **Vite** for React applications.

<p align="center">🚀 Happy Coding with QuickStock! 🚀</p>
