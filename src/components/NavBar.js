import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/jubbzonelogo.png"

const NavBar = () =>{
    return(
        <>
            <img 
            src={logo}
            width="100" height="100"
            ></img>
        <ul>
            <li>
                <Link to='/portfolio'>Home</Link>
            </li>
            <li>
                <Link to='/portfolio/about'>About</Link>
            </li>
            <li>
                <Link to='/portfolio/projects'>Projects</Link>
            </li>
            <li>
                <Link to='/portfolio/contact'>Contact</Link>
            </li>
        </ul>
        </>
    )
}

export default NavBar