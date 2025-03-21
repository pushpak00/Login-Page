import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './components/Menus/Menu.jsx'
import Sidebar from './components/left_sidebar/Sidebar.jsx'
import LoginPage from './components/Login_page/LoginPage.jsx'
import Menu1 from './components/Menus/Menu1'
import Menu2 from './components/Menus/Menu2'
import Store from './apps/Store.jsx'
import { Provider } from 'react-redux'


import Layout from './Layout.jsx'


const router = createBrowserRouter([
  
  {
    path: "/",
    element: 
    // <div style={{textAlign:'justify'}}>
    // <LoginPage  />
    // </div>

    <div class="flex-container">
    <div class="flex-items"><LoginPage  /></div>
    </div>

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
      {
        path: "menu2",
        element: <Menu2/> 
      }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>,
)
