import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio'
import About from './components/About';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Heading from './components/Heading';
import SocialMediaNavBar from './components/SocialMediaNavBar';
import styled from 'styled-components';



const Copyright = styled.p`
  text-align: center;
  font-size: .85em;
  font-family: Georgia;
  color: #303c6c;
`


function App() {
  return (
  <Router>
    <Heading></Heading>
    <NavBar></NavBar>
    <Routes>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/portfolio/about" element={<About/>} />
      <Route path="/portfolio/contact" element={<Contact/>}/>
    </Routes>
    <SocialMediaNavBar/>
    <Copyright>© Fraser Jubb 2023</Copyright>
  </Router>
  )
}

export default App;
