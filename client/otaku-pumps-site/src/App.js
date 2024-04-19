import './App.css';
import {Routes, Route, Outlet, Link, BrowserRouter, HashRouter} from 'react-router-dom';
import { NAVIGATION_LINKS } from './helpers/constants';

function App() {
  return (
    <div className="App" style= {{textAlign: 'center'}}>
      <HashRouter>
      <Routes>
      {[...NAVIGATION_LINKS.values()].map(route => 
        <Route path = {route.path} element = {route.element}>{route.name}</Route>  
      )}
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
