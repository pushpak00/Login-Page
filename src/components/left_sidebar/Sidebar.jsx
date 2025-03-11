import React from 'react'
import { Link, NavLink} from 'react-router-dom'

function Sidebar() {
    return (
        <div class="parent-dashboard">

        

    
   

    
    <div class="div1-dashboard">
            <div class= "sidebar-container">

                <NavLink to="/sidebar" className="sidebar-title" style={{color: 'white'}}>Dashboard</NavLink>

                <ul className="sidebar-menu">
                    <li className="link">
                        <NavLink to="menu" 
                            style={{color: 'white'}}

                            // className={({ isActive }) =>
                            //      isActive ? 'active-link' : 'inactive-link'
                            // }
                                
                             >Comments</NavLink>
                             
                    </li>
                    <li className="link"><NavLink to="menu1" style={{color: 'white'}}>Posts</NavLink></li>
                    <li className="link"><NavLink to="menu2" style={{color: 'white'}}>Menu 2</NavLink></li>
                    <li className="link"><NavLink to="/" style={{color: 'red'}}>Logout</NavLink></li>
            
                    
                </ul>
                <Link className='logout' style={{color: "white"}} to="/"><b>Logout</b></Link>
                
            </div>
            </div>
            {/* <div class="div2-dashboard">Hello</div> */}
            
        </div>
    )
}

export default Sidebar

