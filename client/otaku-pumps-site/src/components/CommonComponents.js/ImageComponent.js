import React from 'react'
import { IMAGE_URL } from '../../helpers/constants'

export default function ImageComponent({size,marginProp}) {
    const randomNumber = String(Math.floor(Math.random()*10)).padStart(3,'0');
    const imageLink = `${IMAGE_URL}${randomNumber}.png`;
  return (
    <div>
        <img style = {{
            height: size ? size: '500px',
            marginTop: marginProp ? marginProp : '0'
        }} src = {imageLink}></img>
    </div>
  )
}