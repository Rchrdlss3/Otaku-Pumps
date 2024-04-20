import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../helpers/constants';
import { getCurrentTheme, setCurrentTheme } from '../../helpers/functions';
import { DARK_THEME } from '../../helpers/themes';
import ThemeSwitchComponent from './ThemeSwitchComponent';

function NavigationBar({theme,setTheme}) {
  return (
    <div style = {{
      paddingTop: '5px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
    {[...NAVIGATION_LINKS.values()].map(route => 
    route.show ?
      <NavLink
       to = {route.path}
       key = {route.name}
       style = {({isActive,isPending,isTransitioning}) => {
         return {
           margin: '5px',
           textDecoration: 'none',
           fontWeight: '550',
           color: isActive ? `${theme.color}` : 'inherit'
         }
       }}
      >{route.name}</NavLink> 
      : 
      null
    )}
    <ThemeSwitchComponent theme = {theme} setTheme = {setTheme}/>
    </div>
  )
}

export default NavigationBar