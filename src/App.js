import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import NavBar from './components/NavBar';
import Project from './components/Projects';
import SocialMediaNavBar from './components/SocialMediaNavBar';

function App() {
  return (
  <Router>
    <NavBar></NavBar>
    <Routes>
      <Route path="/portfolio" element={<Home />}></Route>
      <Route path="/portfolio/about" element={<About/>} />
      <Route path="/portfolio/projects" element={<Project/>}/>
    </Routes>
    <SocialMediaNavBar/>
  </Router>
  )
}

export default App;
