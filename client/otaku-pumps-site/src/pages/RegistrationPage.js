import React from 'react'
import RegistrationComponent from '../components/Registration/RegistrationComponent'
import {NavLink} from 'react-router-dom';
import ThemeSwitchComponent from '../components/CommonComponents.js/ThemeSwitchComponent';
import { navLinkStyle } from '../helpers/styles';
import { WebTitleComponent } from '../components/CommonComponents.js/WebTitleComponent';
import ImageComponent from '../components/CommonComponents.js/ImageComponent';

function RegistrationPage({theme,setTheme}) {
  return (
    <div>
      <WebTitleComponent theme = {theme} fontSize = {3} welcome = {false}/>
        <NavLink to = '/' style = {navLinkStyle}>Go back Home</NavLink> 
        or 
        <NavLink to = '/sign-in' style = {navLinkStyle}>Sign In</NavLink> 
        <ImageComponent size = {300}/>
        <RegistrationComponent theme = {theme} setTheme = {setTheme}/>
    </div>
  )
}

export default RegistrationPage