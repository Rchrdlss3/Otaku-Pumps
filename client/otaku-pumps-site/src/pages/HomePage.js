import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ImageComponent from '../components/CommonComponents.js/ImageComponent'
import NavigationBar from '../components/CommonComponents.js/NavigationBar'
import { SLOGAN } from '../helpers/constants'
import { getCurrentTheme } from '../helpers/functions'

function HomePage({user,theme,setTheme}) {
    const NAV_LINK_STYLE  = {
        textDecoration: 'none',
        color: 'inherit',
        margin: '5px'
    }
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
        <h1 style = {{
            color: `${theme.font}`,
            fontFamily: 'Bangers',
            fontSize: '4em',
            padding: '0',
            margin: '0'
        }}>
            Welcome to Otaku Pumps
        </h1>
        <h4 style = {{
            marginTop: '0'
        }}>{SLOGAN}</h4>
    {user == null ? 
        <div>
            <NavLink  
            style = {NAV_LINK_STYLE}
            to = "/registration">Register</NavLink> 
            or
            <NavLink 
            style = {NAV_LINK_STYLE}
            to = "/sign-in"> 
             Sign In
            </NavLink>
        </div>   : null}
    </div>
  )
}

export default HomePage