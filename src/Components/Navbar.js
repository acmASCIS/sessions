import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

import {ThemeContext} from '../Contexts/Theme/ThemeContext';
import {UserContext} from '../Contexts/User/UserContext';

import NavLink from './NavLink';

export default function Navbar(props) {
    const theme = React.useContext(ThemeContext);
    const user = React.useContext(UserContext);
    return (
        <div className="navbar" style={theme.nav}>
            
                <div className="nav-left">
                    <NavLink target="/home" text="Home" />
                    <NavLink target="/profile" text="Profile" />
                </div>
                <div className="nav-right">
                    {user? <NavLink target="/profile" text={"welcome " + user.name} /> : <NavLink target="/register" text="Login/Register" />} 
                </div>
            
        </div>
    )
}
