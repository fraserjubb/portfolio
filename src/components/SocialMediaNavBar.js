import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

const SocialMediaNavBar = () => {
    return(
        <>
        <h4>Socials</h4>
        <div>
            <a href="https://github.com/fraserjubb">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://instagram.com/thejubbzone">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href="https://facebook.com/thejubbzone">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="https://twitter.com/fraserjubb">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="https://www.youtube.com/@thejubbzone2374/featured"> 
            <FontAwesomeIcon icon={faYoutube}/> 
            </a>
        </div>

        </>
    )
}

export default SocialMediaNavBar