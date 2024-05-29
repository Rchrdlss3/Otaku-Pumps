import React from 'react'
import { commonButtonStyle, inputStyle, navLinkStyle } from '../../helpers/styles'
import {useState} from 'react';
import { loginUser } from '../../helpers/functions';
import { HTTP_STATUS } from '../../helpers/constants';
import DialogMessageComponent from '../CommonComponents.js/DialogMessageComponent';
import LoadingSpinner from '../CommonComponents.js/LoadingSpinner';
import {useNavigate} from 'react-router-dom';

export default function SignInComponent({setUser,theme}) {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [loginInfo,setLoginInfo] = useState({
    userName:'',
    password: ''
  })
  const [openDialogMessage,setOpenDialogMessage] = useState(false);
  const [dialogMessage,setDialogMessage] = useState('');
  return (
    <div>
            <div>
                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input 
                style = {inputStyle({theme})}
                placeholder = "Username"
                id = "username"
                value = {loginInfo.userName}
                onChange = {(e) => {setLoginInfo((prev)=>({...prev,userName:e.target.value}))}}
                >
                </input>
                <input 
                type="password"
                placeholder = "Password"
                id = "password"
                value = {loginInfo.password}
                onChange = {(e)=> {
                  setLoginInfo(prev => ({...prev,password:e.target.value}))}}
                style = {inputStyle({theme})}
                >
                </input>
                     <button 
                     style = {commonButtonStyle({theme})}
                     onClick = {(e) => {
                       loginUser(loginInfo).then(res => 
                        {
                         if(res == HTTP_STATUS.SUCCESS) {
                           setUser(loginInfo)
                           
                           navigate('../',{replace:true})
                         } else {
                           setOpenDialogMessage(true)
                           setDialogMessage("There's an issue with logging in. Please try again.")
                         }
                       })
                      }}
                     >Sign In</button>
                </div>
            </div>
            <LoadingSpinner theme = {theme} open = {loading} message = {'Loading...'}/>
            <DialogMessageComponent theme = {theme} open = {openDialogMessage} setOpen = {setOpenDialogMessage} message = {dialogMessage}/>
    </div>
  )
}