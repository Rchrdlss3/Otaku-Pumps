import React from 'react';
import NavigationBar from '../components/CommonComponents.js/NavigationBar';

function MusicPage({theme,setTheme}) {
  return (
    <div>
      <NavigationBar theme = {theme} setTheme = {setTheme}/>
      MusicPage
    </div>
  )
}

export default MusicPage