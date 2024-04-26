import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageComponent from '../components/CommonComponents.js/ImageComponent'
import {navLinkStyle} from '../helpers/styles'
import {WebTitleComponent} from '../components/CommonComponents.js/WebTitleComponent'
export default function HomePage({user,theme}) {
  return (
    <div>
        <ImageComponent size = {500} marginProp = {10}/>
        <WebTitleComponent user = {user} theme = {theme} welcome = {true} fontSize = {5}/>
    {user.userName == null ? 
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
        </div>   : console.log(user)}
    </div>
  )
}