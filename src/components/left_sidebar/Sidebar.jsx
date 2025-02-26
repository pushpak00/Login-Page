import React from 'react'
import { Link, NavLink} from 'react-router-dom'

function Sidebar() {
    return (
        <>
            
            <div class="sidebar-container">

                <h2 className="sidebar-title">Dashboard</h2>
                <ul className="sidebar-menu">
                    <li className="link"><NavLink to="menu" style={{color: 'white', flex: 1}}>Menu</NavLink></li>
                    <li className="link"><NavLink to="menu1" style={{color: 'white'}}>Menu 1</NavLink></li>
                    <li className="link"><NavLink style={{color: 'white'}}>Menu 2</NavLink></li>
                    <li className="link"><NavLink style={{color: 'white'}}>Menu 3</NavLink></li>
                </ul>
                
            </div>
            
        </>
    )
}

export default Sidebar