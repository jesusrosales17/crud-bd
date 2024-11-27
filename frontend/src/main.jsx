import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProvidersPage } from './pages';
import { Template } from './shared/templates';
import { ProductsPage } from './pages/ProductsPage';

const router = createBrowserRouter([
 {
  path: "/",
  element: <Template />,
  children: [
    {
      path: "proveedores",
      element: <ProvidersPage />,
    },
    {
      path: "productos",
      element: <ProductsPage />,
    },
  ]
 }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
