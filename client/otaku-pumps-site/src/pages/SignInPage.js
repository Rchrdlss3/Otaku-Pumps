import React from 'react'

function SignInPage() {
  return (
    <div style = {{alignItems: 'center'}}>
        <div>
            <div className = "sign-in-wrapper"
            style = {{width: '500px', height: '300px', border: '1px solid', borderRadius: '5px', margin: 'auto', padding: '10px'}}
            >
                <img src = "" />
                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input style = {{width: '45%', height: '25px', margin: '5px', border: '1px solid green', borderRadius: '2px'}}
                placeholder = "Username"
                id = "username"
                ></input>
                <input 
                type="password"
                placeholder = "Password"
                id = "password"
                style = {{width: '45%', height: '25px', margin: '5px',border: '1px solid green', borderRadius: '2px'}}
                ></input>
                     <button>Sign In</button>
                </div>
                <a href="">Create Account</a> or <a href = "">Continue as Guest</a>
            </div>
        </div>
    </div>
  )
}

export default SignInPage