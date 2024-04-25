import { useEffect, useState, React } from 'react';
import { inputStyle } from '../../helpers/styles';

function RegistrationTextField({id,theme,label,setUserRegistration,type,defaultValue}) {

    const handleFocus = (e) => e.target.select();

  return (
    <div style = {{
        display: 'flex',
        flexDirection: 'column',
    }}>
    <label>{label}</label>
    <input 
    id = {id} 
    type = {type}  
    defaultValue = {defaultValue}
    style = {inputStyle({theme})}
    onClick = {(e) => handleFocus(e)}
    onChange = {(e) => {
        setUserRegistration((prev) => ({
            ...prev,
            [e.target.id] : e.target.value
        }))
        }}></input>
    </div>
  )
}

export default RegistrationTextField