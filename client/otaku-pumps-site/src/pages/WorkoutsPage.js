import React from 'react'
import NavigationBar from '../components/CommonComponents.js/NavigationBar'

function WorkoutsPage({theme,setTheme}) {
  return (
    <div>
        <NavigationBar theme = {theme} setTheme = {setTheme}/>
        Workouts page
    </div>
  )
}

export default WorkoutsPage