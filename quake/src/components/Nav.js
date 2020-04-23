import React from 'react'
import {NavLink} from 'react-router-dom';


const Nav = ()=> {


    return(

        <div className = 'nav'>
        <NavLink to = "/Login">Login</NavLink>
        <NavLink to = "/register">Register</NavLink>
        <NavLink to = "/contact">Contact</NavLink>

        </div>
    )
}

export default Nav