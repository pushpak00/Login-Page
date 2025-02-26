import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './components/Menu/Menu.jsx'
import Sidebar from './components/left_sidebar/Sidebar.jsx'
import LoginPage from './components/Login_page/LoginPage.jsx'
import Menu1 from './components/Menu1/Menu1'

import Layout from './Layout.jsx'



const router = createBrowserRouter([
  
  {
    path: "/",
    element: <LoginPage/>,
    
  },
  {
    path: "sidebar",
    element: <Layout />,
    children: [
      {
        path: "menu",
        element: <Menu/>
      },
      {
        path: "menu1",
        element: <Menu1/>
      },
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
