import logo from "./images/jubbzonelogo.png"
import styled from "styled-components";

const WebsiteHeading = styled.h1`
    font-size: 4em;
    font-family: Georgia;
    font-weight: bold;
    color: #303c6c;
    line-height: .1%;
    grid-area: WebsiteHeading;
`

const WebsiteSubheading = styled.h4`
    font-size: 1.3em;
    font-family: Georgia;
    font-style: italic;
    font-weight: 300;
    color: #303c6c;
    line-height: .1%;
    grid-area: WebsiteSubheading;

`

const Logo = styled.img`
    grid-area: img;
` 

const Layout = styled.p`
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    display: grid;
    grid-template-areas:
        "img WebsiteHeading empty"
        "img WebsiteSubheading empty";
    /* flex-direction: row;
    justify-content: space-evenly; */

`

const Heading = () => {
    return (
    <Layout>
        <Logo 
        src={logo}
        width="100" height="100"
        alt="Logo"
        ></Logo>
        <WebsiteHeading>Fraser Jubb</WebsiteHeading>
        <WebsiteSubheading>Game Developer / Digital Artist</WebsiteSubheading>
    </Layout>
    )
}

export default Heading