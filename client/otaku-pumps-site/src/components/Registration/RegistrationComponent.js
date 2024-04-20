import React from 'react'
import { useEffect, useState } from 'react'
import ImageComponent from '../CommonComponents.js/ImageComponent'

function RegistrationComponent({theme,setTheme}) {
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
        passWord: '',
        favoriteAnimes: []
    })
    const getTopAnime = () => {
        fetch ('https://api.jikan.moe/v4/top/anime')
        .then ((res) => res.json())
        .then((data) => setTopAnime(data))
    }
    useEffect (() => {
        getTopAnime();
    },[])

  return (
    <div>
        <ImageComponent size = {300}/>
        <div style = {{
            display: 'flex',
            justifyContent: 'center',
            border: `5px solid ${theme.primary}`,
            borderRadius: '5px',
        }}>
            <form style = {{
                display: 'flex',
                gap: 5,
                columnCount: 3,
                flexWrap: 'wrap',
                border: `1 px solid ${theme.color}`,
                width: '500px',
            }}>
            <input id = "e-mail" type = "text" defaultValue = "E-mail" 
            onChange = {(e) => {
                setUserRegistration({
                    ...userRegistration,
                    email: e.target.value
                })
            }}></input>
            <input type = "text"  defaultValue = "User Name" 
            onChange = {(e) => {
                setUserRegistration({
                    ...userRegistration,
                    userName: e.target.value
                })
            }}></input>
            <input type = "password" defaultValue = "Password" 
            onChange = {(e) => {
                setUserRegistration({
                    ...userRegistration,
                    passWord: e.target.value
                })
            }}></input>
            <input type = "text" defaultValue = "First Name" 
            onChange = {(e) => {
                setUserRegistration({
                    ...userRegistration,
                    firstName: e.target.value
                })
            }}></input>
            <input type = "text" defaultValue = "Last Name" 
            onChange = {(e) => {
                setUserRegistration({
                    ...userRegistration,
                    lastName: e.target.value
                })
            }}></input>
            <input type = "text" defaultValue = "Favorite Anime(s)" value = {userRegistration.favoriteAnimes}
            onChange = {(e) => {}}></input>
            <label htmlFor = "favorite-anime-list">You can select from hottest anime provided by Jikan API</label>
            <select id = "favorite-anime-list" onChange = {(e) =>
                {
                userRegistration.favoriteAnimes.push(e.target.value)         
                setUserRegistration({
                    ...userRegistration
                })}}>
                {topAnime.data.map(anime => 
                <option value = {anime.title}>{anime.title}</option>
                )}
            </select>
            <input type ="submit" value = "submit" onClick = {(e) => {console.log(userRegistration)}}></input>
            </form>
        </div>
    </div>
  )
}

export default RegistrationComponent