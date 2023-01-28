import profilePic from './images/profilepic.png'
import styled from 'styled-components'

const BackgroundColour = styled.p`
    /* background-color: #caf0f8; */
`

const About = () => {
    return (
    <BackgroundColour>
    <h1>ABOUT ME</h1>
    <p>I'm a game developer currently based in Edinburgh, Scotland.</p>
    <img
    src={profilePic}
    width = "300"
    ></img>
    </BackgroundColour>
)}

export default About