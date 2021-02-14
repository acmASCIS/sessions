import React from 'react'
import {Link} from 'react-router-dom';

import {ThemeContext} from '../Contexts/Theme/ThemeContext';

export default function NavLink(props) {
    const theme = React.useContext(ThemeContext);
    return (
        <Link style={theme.button} to={props.target}>{props.text}</Link>
    )
}
