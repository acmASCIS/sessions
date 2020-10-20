import React,{Component} from 'react';

const Nav=()=>{
    return(
        <div className="Navbar">
            <div className="container">
            <a href="#" className="logo">logo</a>
            <ul className="who">
                <a href="/">Home</a>
                <a href="/About">About</a>
            </ul>
            </div>
        </div>
    )
}
export default Nav;