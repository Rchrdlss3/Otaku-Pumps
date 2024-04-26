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
import NavigationBar from './components/CommonComponents.js/NavigationBar';

function App() {
  const [themeState,setThemeState] = useState({});
  const [user,setUser] = useState({
    userName: null,
    password: null
  });
  console.log(user)
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
      <NavigationBar theme = {themeState} setTheme = {setThemeState}/>
      <Routes>
        <Route path = '/' element = {<HomePage user = {user} theme = {themeState}/>}></Route>
        <Route path = '/anime' element = {<AnimePage user = {user} setUser = {setUser} theme = {themeState} setTheme = {setThemeState}/>} ></Route>
        <Route path = '/music' element = {<MusicPage user = {user} setUser = {setUser} theme = {themeState} setTheme = {setThemeState}/>}></Route>
        <Route path = '/workouts' element = {<WorkoutsPage user = {user} setUser = {setUser} theme = {themeState} setTheme = {setThemeState}/>}></Route>
        <Route path = '/sign-in' element = {<SignInPage user = {user} setUser = {setUser} theme = {themeState} setTheme = {setThemeState}/>}></Route>
        <Route path = '/registration' element = {<RegistrationPage user = {user} setUser = {setUser} theme = {themeState} setTheme = {setThemeState}/>}></Route>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
