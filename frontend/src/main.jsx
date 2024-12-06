import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProvidersPage, ProductsPage, HomePage} from './pages';
import { Template } from './shared/';


const router = createBrowserRouter([
 {
  path: "/",
  element: <Template />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
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
