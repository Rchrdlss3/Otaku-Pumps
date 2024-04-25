import { inputStyle } from "../../helpers/styles";

function FavoriteAnimesSelection ({userRegistration, setUserRegistration,topAnime,theme}) {
    return (
        <div>
            <label 
            htmlFor = "favorite-anime-list"
            >You can select from hottest anime provided by Jikan API</label>
            <select id = "favorite-anime-list" 
            style = {inputStyle({theme})}
            onChange = {(e) =>
                {
                userRegistration.favoriteAnimes.push(e.target.value)         
                setUserRegistration({
                    ...userRegistration
                })}}>
                {topAnime.data.map(anime => 
                <option key = {anime.title} value = {anime.title}>{anime.title}</option>
                )}
            </select>
        </div>
    )
}

export default FavoriteAnimesSelection;