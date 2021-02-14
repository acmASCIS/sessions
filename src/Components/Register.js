import React from 'react'
import {Switch, Route} from 'react-router-dom';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import NavLink from './NavLink';

import {ThemeContext} from '../Contexts/Theme/ThemeContext';

export default function Register(props) {
    const theme = React.useContext(ThemeContext);
    return (
        <div style={theme.nav} className="registerWindow">
            <div className="formContainer">
                <Switch>
                    <Route exact path={["/","/register"]}>
                        <RegisterForm />
                    </Route>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                </Switch>
            </div>
            <div className="formNavigation">
                <NavLink target="/login" text="Login" />
                <NavLink target="/register" text="Register" />
            </div>
        </div>
    )
}
