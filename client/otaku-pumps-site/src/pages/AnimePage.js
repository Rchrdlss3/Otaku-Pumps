import React from 'react';
import NavigationBar from '../components/CommonComponents.js/NavigationBar';

function AnimePage({theme,setTheme}) {
  return (
    <div>
      <NavigationBar theme = {theme} setTheme = {setTheme}/>
      AnimePage
    </div>
  )
}

export default AnimePage