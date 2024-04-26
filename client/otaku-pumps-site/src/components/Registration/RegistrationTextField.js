import { useEffect, useState, React } from 'react';
import { inputStyle } from '../../helpers/styles';
import validator from 'validator';

function RegistrationTextField({id,theme,label,setUserRegistration,type,defaultValue,errorMessage}) {
    const [currStyle,setCurrStyle] = useState(inputStyle({theme},false));
    const [showError,setShowError] = useState(false);
    const handleFocus = (e) => e.target.select();
    useEffect(() => {
      setCurrStyle(inputStyle({theme},showError));
    },[showError])
    const verifyField = (e) => {
      const input = e.target.value
      const id = e.target.id
      switch(id) {
        case "email":
          setShowError(!validator.isEmail(input));
        break 
        case "userName":
          setShowError(!validator.isAlphanumeric(input));
        break
        case "password":
          setShowError(!validator.isStrongPassword(input))
        break
        case "firstName":
          setShowError(!validator.isAlphanumeric(input))
        break
        case "lastName":
          setShowError(!validator.isAlphanumeric(input))
        break
      }
    }
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
    style = {currStyle}
    onClick = {(e) => handleFocus(e)}
    onBlur = {(e) => verifyField(e)}
    onChange = {(e) => {
        setUserRegistration((prev) => ({
            ...prev,
            [e.target.id] : e.target.value
        }))
        }}>
        </input>
        <div style = {{
          fontSize: '0.7em',
          color: 'red',
          display: showError ? 'block' : 'none'
        }}>{errorMessage}</div>
    </div>
  )
}

export default RegistrationTextField