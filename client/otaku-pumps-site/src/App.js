import './App.css';
import {Routes, Route, Outlet, Link, BrowserRouter, HashRouter} from 'react-router-dom';
import { NAVIGATION_LINKS } from './helpers/constants';
import { useEffect, useState } from 'react';
import {getCurrentTheme,getParsedUA} from './helpers/functions';
import HomePage from './pages/HomePage';
import AnimePage from './pages/AnimePage';
import WorkoutsPage from './pages/WorkoutsPage';
import SignInPage from './pages/SignInPage';
import RegistrationPage from './pages/RegistrationPage';
import MusicPage from './pages/MusicPage';
import LoadingSpinner from './components/CommonComponents.js/LoadingSpinner';

function App() {
  const [themeState,setThemeState] = useState({});
  useEffect(() => {
    setThemeState(getCurrentTheme());
    getParsedUA().then(function(res)  {
      localStorage.setItem('DEVICE',res.device.model)
    })
  },[])

  return (
    <div className="App" style= {{
      textAlign: 'center',
      width: '100vw',
      height: '100vh',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      transition: '.4s',
      color: themeState.font,
      backgroundColor: themeState.primary,
      backgroundImage: `url(${themeState.backgroundImage})`,
      }}>
      <HashRouter>
      <Routes>
        <Route path = '/' element = {<HomePage theme = {themeState} setTheme = {setThemeState}/>}></Route>
        <Route path = '/anime' element = {<AnimePage theme = {themeState} setTheme = {setThemeState}/>} ></Route>
        <Route path = '/music' element = {<MusicPage theme = {themeState} setTheme = {setThemeState}/>}></Route>
        <Route path = '/workouts' element = {<WorkoutsPage theme = {themeState} setTheme = {setThemeState}/>}></Route>
        <Route path = '/sign-in' element = {<SignInPage theme = {themeState} setTheme = {setThemeState}/>}></Route>
        <Route path = '/registration' element = {<RegistrationPage theme = {themeState} setTheme = {setThemeState}/>}></Route>
      {/* {[...NAVIGATION_LINKS.values()].map(route => 
        <Route path = {route.path} element ={route.element}>{route.name}</Route>  
      )} */}
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
