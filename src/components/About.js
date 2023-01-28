import profilePic from './images/profilepic.png'
import styled from 'styled-components'

const Heading = styled.h1`
    font-size: 2.5em;
    font-family: Georgia;
    color: #303c6c;
    text-decoration: underline;
    text-align: center;
`

const Text = styled.p`
    font-size: 1.1em;
    font-family: Georgia;
    color: #303c6c;
    margin-left: 3%;
`

const Layout = styled.body`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const ProfilePic = styled.img`
    border: solid .25em #303c6c;
    border-radius: 50%;
    object-fit: cover;
    height: 300px;
    width: 300px;
    margin-left: 5%;
    margin-right: 5%;
`

const About = () => {
    return (
    <>
    <Heading>ABOUT ME</Heading>
        <Layout>
            <Text>I'm a game developer currently based in Edinburgh, Scotland.</Text>
            <ProfilePic
            src={profilePic}
            width = "300"
            alt='Profile Picture'
            ></ProfilePic>
        </Layout>
        </>
)}

export default About