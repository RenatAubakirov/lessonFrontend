import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store';
import App from './App';
import ErrorPage from './routes/ErrorPage';
import HomePage from './routes/HomePage';
import CatalogPage from './routes/CatalogPage';
import ProductPage from './routes/ProductPage';
import CartPage from './routes/CartPage';
import RegistrationPage from './routes/RegistrationPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode >
);