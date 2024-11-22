import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProvidersPage } from './pages';
import { Template } from './shared/templates';

const router = createBrowserRouter([
 {
  path: "/",
  element: <Template />,
  children: [
    {
      path: "proveedores",
      element: <ProvidersPage />,
    },
  ]
 }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
