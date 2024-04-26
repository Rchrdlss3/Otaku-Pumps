import React from 'react'
import { getCurrentTheme } from '../../helpers/functions';
import { DARK_THEME,LIGHT_THEME } from '../../helpers/themes';
import { setCurrentTheme } from '../../helpers/functions';
import { useEffect,useState } from 'react';

function ThemeSwitchComponent({theme,setTheme}) {
    const [isChecked,setIsChecked] = useState((getCurrentTheme() == DARK_THEME) ? true : false);
    useEffect(()=> {
        setIsChecked((theme == DARK_THEME) ? true : false)
    },[theme])

  return (
      <div style = {{
          display: 'inline-flex',
          marginTop: '6px'
      }}>
    <label className = 'switch'
        style = {{
            position: 'relative',
            display: 'inline-block',
            width: '44px',
            height: '14px'
        }}
    >
    <input 
    type ="checkbox" 
    className = 'theme-switch'
    onClick = {(e) => {setTheme(setCurrentTheme(e.target.checked))}}
    defaultChecked = {isChecked}
    style = {{
        opacity: 0,
        width: 0,
        height: 0
    }}
    >
    </input>
    <span style = {{
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius:' 15px',
        WebKitTransition: '.4s',
        transition: '.4s',
        border: `1px solid ${theme.secondary}`,
        backgroundColor: `${theme.secondary}`
    }}
    >
    </span>
    <span style = {{
        width: '13px',
        height: '14px',
        position: 'absolute',
        borderRadius: '50%',
        transition: '.4s',
        WebKitTransition: '.4s',
        backgroundColor: `${theme.primary}`,
        right: isChecked ? 0:null,
        left: isChecked ? null:0
    }}>
    </span>
    </label>
    </div>
  )
}

export default ThemeSwitchComponent