import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../../helpers/constants';

function NavigationBar({user}) {
  return (
    <div>
    {[...NAVIGATION_LINKS.values()].map(route => 
    route.show ?
      <NavLink
       to = {route.path}
       style = {({isActive,isPending,isTransitioning}) => {
         return {
           margin: '5px',
           textDecoration: 'none',
           fontWeight: '420',
           color: isActive ? 'red' : 'inherit'
         }
       }}
      >{route.name}</NavLink> 
      : 
      null
    )}
      <input type ="checkbox"></input>
      </div>
  )
}

export default NavigationBar