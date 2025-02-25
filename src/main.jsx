import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/Login_page/LoginPage.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Dashboard />
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
