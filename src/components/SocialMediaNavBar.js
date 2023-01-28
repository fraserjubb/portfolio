import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const Socials = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    filter: grayscale(100%);
    padding-top: 2em
`

const SocialMediaNavBar = () => {
    return(
        <>
        <Socials>
            <a href="https://github.com/fraserjubb" target="_blank">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://instagram.com/thejubbzone" target="_blank">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href="https://facebook.com/thejubbzone" target="_blank">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="https://twitter.com/fraserjubb" target="_blank">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="https://www.youtube.com/@thejubbzone2374/featured" target="_blank"> 
            <FontAwesomeIcon icon={faYoutube}/> 
            </a>
            <a href="https://www.linkedin.com/in/fraser-jubb-008593103" target="_blank"> 
            <FontAwesomeIcon icon={faLinkedin}/> 
            </a>
        </Socials>

        </>
    )
}

export default SocialMediaNavBar