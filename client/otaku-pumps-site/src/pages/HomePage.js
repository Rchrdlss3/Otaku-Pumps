import React from 'react'
import ImageComponent from '../components/CommonComponents.js/ImageComponent'
import NavigationBar from '../components/CommonComponents.js/NavigationBar'

function HomePage() {
  return (
    <div>
        <NavigationBar />
        <ImageComponent />
        Welcome to Otaku Pumps !
    </div>
  )
}

export default HomePage