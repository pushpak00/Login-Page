import React from 'react'
import Sidebar from './components/left_sidebar/Sidebar.jsx'
import { Outlet } from 'react-router'


function Layout() {
    return (
        
        <div className="parent-grid">
            <div className="div1"><Sidebar /></div>
            <div className="div2"><Outlet /></div>
            
        </div>

    )
}

export default Layout