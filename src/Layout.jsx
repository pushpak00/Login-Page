import React from 'react'
import Sidebar from './components/left_sidebar/Sidebar.jsx'
import { Outlet } from 'react-router'


function Layout() {
    return (
        
        
        
        <div class="parent">
            <Sidebar class="div1"/>
            <Outlet class="div2"/>
            
        </div>


        
    )
}

export default Layout