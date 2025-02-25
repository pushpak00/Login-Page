import React from 'react'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import LoginPage from './components/Login_page/LoginPage.jsx'
import { Outlet } from 'react-router'

function Layout() {
    return (
        <>
        <LoginPage/>
        <Outlet/>
        </>
    )
}

export default Layout