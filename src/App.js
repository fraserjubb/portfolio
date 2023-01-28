import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import NavBar from './components/NavBar';
import Project from './components/Projects';
import Contact from './components/Contact';
import SocialMediaNavBar from './components/SocialMediaNavBar';
import styled from 'styled-components';

const Copyright = styled.p`
  text-align: center;
  font-size: .85em;
`


function App() {
  return (
  <Router>
    <NavBar></NavBar>
    <Routes>
      <Route path="/portfolio" element={<Home />}></Route>
      <Route path="/portfolio/about" element={<About/>} />
      <Route path="/portfolio/projects" element={<Project/>}/>
      <Route path="/portfolio/contact" element={<Contact/>}/>
    </Routes>
    <SocialMediaNavBar/>
    <Copyright>© Fraser Jubb 2023</Copyright>
  </Router>
  )
}

export default App;
