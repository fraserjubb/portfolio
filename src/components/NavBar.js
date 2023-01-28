import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/jubbzonelogo.png"
import styled from "styled-components";

const Menu = styled.ul`
    font-size: 1.25em;
    font-family: Georgia;
    font-weight: bold;
    color: #303C6C;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: #0077b6; */
`


const NavBar = () =>{
    return(
        <>
        <Menu>
            <li>
            <img 
            src={logo}
            width="100" height="100"
            ></img>
            </li>
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
        </Menu>
        </>
    )
}

export default NavBar