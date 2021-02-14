import React, {useState ,useEffect, useRef} from 'react'

import {UserContext} from '../Contexts/User/UserContext';

export default function LoginForm() {
    const [loading, setLoading] = useState(false);
    const {user,dispatchUser} = React.useContext(UserContext);
    const [formData, setFormData] = useState();


    useEffect(() => {
        setLoading(false);
    }, [user])
    useEffect(() => {
        console.log("Updated", password.current.value);
    })


    const password = useRef(null);

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        setTimeout(() => {
            dispatchUser({type: 'login', payload: {name:formData.name}});
            document.querySelectorAll('[href="/home"]')[0].click();
        }, 3000);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input onChange={(e) => setFormData({name: e.target.value})} type="text" placeholder="Username" name="username" />
            <input ref={password} type="password" placeholder="Password" name="password" />
            <input type="submit" value="Submit" />
            {loading ? <h2 className="loading">Loading...</h2> : ""}
        </form>
    )
}
