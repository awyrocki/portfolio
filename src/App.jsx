import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import darkBackground from "./dark.svg"
import lightBackground from "./light.svg"


function App() {
  return (
    <>
      <div id='background-div' style={{backgroundImage: `url(${darkBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
      <Router>
      <Nav />
      <Routes>
        <Route path='*' element={ <NotFound /> } />
        <Route path='/' element={ <About /> } />
        <Route path='/Experience' element={ <Experience /> } />
        <Route path='/Projects' element={ <Projects /> } />
      </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
