import React from 'react'
import { NavLink } from 'react-router-dom'
import { commonButtonStyle, inputStyle, navLinkStyle } from '../../helpers/styles'
import ImageComponent from '../CommonComponents.js/ImageComponent'

function SignInComponent({theme}) {
  return (
    <div>
            <div>
                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input 
                style = {inputStyle({theme})}
                placeholder = "Username"
                id = "username"
                >
                </input>
                <input 
                type="password"
                placeholder = "Password"
                id = "password"
                style = {inputStyle({theme})}
                >
                </input>
                     <button style = {commonButtonStyle({theme})}>Sign In</button>
                </div>
            </div>
    </div>
  )
}

export default SignInComponent