import React from 'react'
import { useState } from 'react';

function LoginPage() {

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    function validation(userId, password) {
        if (userId === "admin") {
            if (password === "admin") {
                alert("welcome!")
            }
        }
        else {
            alert("wrong credential!!")
        }
    }

    return (
        
        <div>

            <div class="login-parent">
                
                <input 
                    defaultValue="UserID"
                    value={userId} 
                    onChange={e => setUserId(e.target.value)}
                    />

                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    defaultValue="Password"/>

                <button onClick={() => validation(userId, password)}>Login</button>
                
            </div>
            
        </div>
    )
}

export default LoginPage