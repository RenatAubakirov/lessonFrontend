import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductsListPage from './routes/ProductListPage';
import ProductDetailsPage from './routes/ProductDetailsPage';
import ProductAddPage from './routes/ProductAddPage';
import ProductEditPage from './routes/ProductEditPage';
import store from './store/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './routes/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductsListPage />,
      },
      {
        path: "/product/details/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "/product/add",
        element: <ProductAddPage />,
      },
      {
        path: "/product/edit/:productId",
        element: <ProductEditPage />,
      }
    ]
  },]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);