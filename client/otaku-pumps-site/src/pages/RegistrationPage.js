import React from 'react'
import RegistrationComponent from '../components/Registration/RegistrationComponent'
import {NavLink} from 'react-router-dom';
import ThemeSwitchComponent from '../components/CommonComponents.js/ThemeSwitchComponent';
import { navLinkStyle } from '../helpers/styles';
import { WebTitleComponent } from '../components/CommonComponents.js/WebTitleComponent';

function RegistrationPage({theme,setTheme}) {
  return (
    <div>
        <RegistrationComponent theme = {theme} setTheme = {setTheme}/>
        <WebTitleComponent theme = {theme} fontSize = {3} welcome = {false}/>
        <div>
        <NavLink to = '/' style = {navLinkStyle}>Go back Home</NavLink> 
        or have an account ? 
        <NavLink to = '/sign-in' style = {navLinkStyle}>Sign In</NavLink> 
        </div>
        <ThemeSwitchComponent theme = {theme} setTheme = {setTheme}/>

    </div>
  )
}

export default RegistrationPage