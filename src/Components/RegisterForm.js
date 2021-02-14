import React from 'react'

export default function RegisterForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="example@gmail.com" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="submit" value="Submit" />
        </form>
    )
}
