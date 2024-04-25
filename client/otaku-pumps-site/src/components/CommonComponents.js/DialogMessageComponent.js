import React from 'react';
import { commonButtonStyle } from '../../helpers/styles';
import ImageComponent from './ImageComponent';

function DialogMessageComponent ({theme,message,open,setOpen}) {
    return (
        <div style = {{
            display: open ? 'block':'none',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.9)',
            position: 'absolute',
            top: 0,
            margin: 0,
            padding: 0,
            zIndex: 100,
        }}>
            <div style = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100%'
            }}>
                <div style = {{
                    borderRadius: `5px`,
                    padding: '10px',
                    backgroundColor: `${theme.transparent}`
                }}>
                <ImageComponent size = {200}/>
                <p>{message}</p>
                <button 
                style = {commonButtonStyle({theme})}
                onClick = {() => {setOpen(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default DialogMessageComponent;
