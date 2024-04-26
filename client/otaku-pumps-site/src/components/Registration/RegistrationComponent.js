import { React, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { HTTP_STATUS } from '../../helpers/constants'
import { registerUser } from '../../helpers/functions'
import { commonButtonStyle } from '../../helpers/styles'
import DialogMessageComponent from '../CommonComponents.js/DialogMessageComponent'
import LoadingSpinner from '../CommonComponents.js/LoadingSpinner'
import FavoriteAnimesSelection from './FavoriteAnimesSelection'
import RegistrationTextField from './RegistrationTextField'
import { enterValidMessage } from '../../helpers/functions';

function RegistrationComponent({theme}) {
    const [openDialogMessage,setOpenDialogMessage] = useState(false);
    const [dialogMessage,setDialogMessage] = useState('');
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
    const [topAnime,setTopAnime] = useState({
        data : [{
            title : ''   
        }]
    })
    const [userRegistration,setUserRegistration] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        favoriteAnimes: []
    })
    
    const getTopAnime = () => {
        fetch ('https://api.jikan.moe/v4/top/anime')
        .then ((res) => res.json())
        .then((data) => setTopAnime(data))
    }
    useEffect (() => {
        console.log(loading)
        getTopAnime();
        setLoading(false);
        console.log(loading)
    },[])

  return (
    <div>
        <div style = {{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <form style = {{
                display: 'flex',
                gap: 5,
                columnCount: 3,
                flexWrap: 'wrap',
                border: `1 px solid ${theme.color}`,
                width: '500px',
                justifyContent: 'center'
            }}>
            <RegistrationTextField 
            id = {'email'}
            label = {'E-mail'} 
            userRegistration = {userRegistration}
            setUserRegistration = {setUserRegistration} 
            defaultValue = {'E-mail'} 
            type = {'text'}
            theme = {theme}
            errorMessage = {enterValidMessage('e-mail')}
            />
            <RegistrationTextField 
            id = {'userName'}
            label = {'User Name'} 
            userRegistration = {userRegistration}
            setUserRegistration = {setUserRegistration} 
            defaultValue = {'User Name'} 
            type = {'text'}
            theme = {theme}
            errorMessage = {enterValidMessage('user name')}
            />
            <RegistrationTextField 
            id = {'password'}
            label = {'Password'} 
            userRegistration = {userRegistration}
            setUserRegistration = {setUserRegistration} 
            defaultValue = {'Password'} 
            type = {'password'}
            theme = {theme}
            errorMessage = {enterValidMessage('strong password')}
            />
            <RegistrationTextField 
            id = {'firstName'}
            label = {'First Name'} 
            userRegistration = {userRegistration}
            setUserRegistration = {setUserRegistration} 
            defaultValue = {'First Name'} 
            type = {'text'}
            theme = {theme}
            errorMessage = {enterValidMessage('first name')}
            />
            <RegistrationTextField 
            id = {'lastName'}
            label = {'Last Name'} 
            userRegistration = {userRegistration}
            setUserRegistration = {setUserRegistration} 
            defaultValue = {'Last Name'} 
            type = {'text'}
            theme = {theme}
            errorMessage = {enterValidMessage('last name')}
            />
            <RegistrationTextField 
            id = {'favoriteAnimes'}
            label = {'Favorite Anime(s)'} 
            userRegistration = {userRegistration}
            setUserRegistration = {setUserRegistration} 
            defaultValue = {userRegistration.favoriteAnimes} 
            type = {'text'}
            theme = {theme}
            />
            <FavoriteAnimesSelection 
            userRegistration = {userRegistration} 
            setUserRegistration = {setUserRegistration} 
            topAnime = {topAnime} 
            theme = {theme}/>
            <input
            type ="submit"
            value = "Submit" 
            style = {commonButtonStyle({theme})} 
            onKeyDown = {(e) => console.log(userRegistration)}
            onClick = {(e) => {
                registerUser(userRegistration).then(res => 
                {
                    if (res == HTTP_STATUS.SUCCESS) {
                        setLoading(true)
                        navigate("../sign-in",{replace:true});
                    } else {
                        setDialogMessage("Sorry! Looks like there's an issue with registering this account");
                        setOpenDialogMessage(true);
                    }
                }
                )
                }}>   
            </input>
            </form>
        </div>
        <LoadingSpinner theme = {theme} open = {loading} message = {'Loading...'}/>
        <DialogMessageComponent theme = {theme} open = {openDialogMessage} setOpen = {setOpenDialogMessage} message = {dialogMessage}/>
    </div>
  )
}

export default RegistrationComponent