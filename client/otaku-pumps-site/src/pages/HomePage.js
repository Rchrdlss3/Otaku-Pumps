import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ImageComponent from '../components/CommonComponents.js/ImageComponent'
import NavigationBar from '../components/CommonComponents.js/NavigationBar'
import { getCurrentTheme } from '../helpers/functions'
import {navLinkStyle} from '../helpers/styles'
import {WebTitleComponent} from '../components/CommonComponents.js/WebTitleComponent'
function HomePage({user,theme,setTheme}) {

    useEffect(() => {
        setTheme(getCurrentTheme())
    },[theme])
  return (
    <div>
        <NavigationBar theme = {theme} setTheme = {setTheme}/>
        <ImageComponent 
        size = {500}
        marginProp = {10}
        />
        <WebTitleComponent theme = {theme} welcome = {true} fontSize = {5}/>
    {user == null ? 
        <div>
            <NavLink  
            style = {navLinkStyle()}
            to = "/registration">Register</NavLink> 
            or
            <NavLink 
            style = {navLinkStyle()}
            to = "/sign-in"> 
             Sign In
            </NavLink>
        </div>   : null}
    </div>
  )
}

export default HomePage