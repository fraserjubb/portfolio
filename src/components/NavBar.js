import React from "react";
import { Link } from "react-router-dom";
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
`

const WebsiteHeading = styled.h1`
    font-size: 4em;
    font-family: Georgia;
    font-weight: bold;
    color: #303c6c;
    text-align: center;
`

const WebsiteSubheading = styled.h4`
    font-size: 1.3em;
    font-family: Georgia;
    font-style: italic;
    font-weight: 300;
    color: #303c6c;
    text-align: center;
`

const NavBar = () =>{
    return(
        <>
        <Menu>
            <li>
                <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
                <Link to='/portfolio/about'>About</Link>
            </li>
            <li>
                <Link to='/portfolio/contact'>Contact</Link>
            </li>
        </Menu>
        </>
    )
}

export default NavBar