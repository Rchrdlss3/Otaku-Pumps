import React from 'react'
import ImageComponent from '../components/CommonComponents.js/ImageComponent'
import SignInComponent from '../components/SignIn/SignInComponent'
import { WebTitleComponent } from '../components/CommonComponents.js/WebTitleComponent'
import { NavLink } from 'react-router-dom'
import { navLinkStyle } from '../helpers/styles'
import ThemeSwitchComponent from '../components/CommonComponents.js/ThemeSwitchComponent'

function SignInPage({theme,setTheme}) {
  return (
    <div>
      <WebTitleComponent theme = {theme} fontSize = {3} welcome = {false}/>
      <div>
      <NavLink style = {navLinkStyle} to = "/registration">Create Account</NavLink>         
      <ThemeSwitchComponent theme = {theme} setTheme = {setTheme}/>
      </div>
      <ImageComponent size = {300}/>
      <SignInComponent theme = {theme}/> 
    </div>
  )
}

export default SignInPage