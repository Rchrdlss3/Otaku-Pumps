import React from 'react'
import ImageComponent from './ImageComponent'

function LoadingSpinner({theme,message,open}) {
  return (
    <div>
        <div style = {{            
            display: open ? 'block':'none',
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            backgroundColor: `${theme.transparent}`,
            top: 0,
            margin: 0,
            padding: 0,
            zIndex: 100,
        }}>
        <div 
        style = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }}
        
        className = "loader">
        <div style = {{
            border: `16px solid ${theme.primary}`,
            borderRadius: '50%',
            borderTop: `16px solid ${theme.color}`,
            width: '120px',
            height: '120px',
            WebkitAnimation: 'spin 2s linear infinite',
            animation: 'spin 2s linear infinite',
        }}>
        </div>    
        </div>
        {message}
        </div>
    </div>
  )
}

export default LoadingSpinner