import React from 'react'
import { useState } from 'react';
import { Link, NavLink} from 'react-router-dom'

function LoginPage() {

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})

    function validation(userId, password) {
    
        let errors ={} 

        if(!userId) {
            errors.userid = "UserId Required"
        }

        else if(userId.length < 5) {
            errors.userid = "UserId must contain 5 char"
        }
        if(!password) {
            errors.password = "Password Required"
        }
        else if(password.length < 8) {
            errors.password = "Password must contain atleast 8 char"
        }
        return errors
        
        
    }

    function checking(userId, password) {
        if (userId === "admin" && password === "admin@123") {
            return "sidebar"
        }            
        else {
            validation(userId, password)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        setError(validation(userId, password))
    }

    return (
        
        <div>
            <form onSubmit={handleSubmit}> 
            <div className="field_container">
                
                <input 
                    type="text"
                    placeholder="User Id" 
                    vlaue={userId}
                    onChange={e => setUserId(e.target.value)}
                    />
                <p style={{color:"black", fontSize:"12px"}}>{error.userid}</p>
                
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    />
                <p style={{color:"black", fontSize:"12px"}}>{error.password}</p>
                <Link to={checking(userId, password)} id="navlink" type="submit" >Login</Link>
                {/* <button onClick={() => validation(userId, password)}>Login</button> */}
            </div>

            </form> 

        </div>
    )
}

export default LoginPage