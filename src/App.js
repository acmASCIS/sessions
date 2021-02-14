import React, {useState, useReducer} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';

import {themes} from './Contexts/Theme/Themes';
import {ThemeContext} from './Contexts/Theme/ThemeContext';

import {LoginUser} from './Contexts/User/UserFunctions.js'
import {UserContext} from './Contexts/User/UserContext';




function App() {

  const userReducer = (state,action) => {
    if(action.type === 'login') return LoginUser(action.payload.name);
    else return undefined;
  }

  const [theme, setTheme] = useState(ThemeContext._currentValue);
  const [user, dispatchUser] = useReducer(userReducer, UserContext._currentValue.user);

  return(
    <Router>
    <div className="App" style={ theme.body }>

      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <Navbar />
        </UserContext.Provider>
      </ThemeContext.Provider>

      

      
        <Switch>
          <Route exact path={["/", "/home"]}>
            <UserContext.Provider value={user}>
              <Home />
            </UserContext.Provider>
          </Route>
          <Route exact path={["/register", "/login"]}>
            <ThemeContext.Provider value={theme}>
              <UserContext.Provider value={{user, dispatchUser}}>
                <Register />
              </UserContext.Provider>
            </ThemeContext.Provider>
          </Route>
          <Route exact path="/profile">
            <UserContext.Provider value={user}>
              <Profile />
            </UserContext.Provider>
          </Route>
        </Switch>
      



      <button style={theme.button} onClick={() => setTheme(theme === themes.Dark? themes.Light : themes.Dark)} className="themeToggler" >{theme === themes.Dark? "Dark" : "Light"}</button>
    </div>
    </Router>

  )
}





export default App;
