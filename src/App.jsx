import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'


function App() {
  return (
    <>
      <Router>
      <Nav />
      <Routes>
        <Route path='*' element={ <NotFound /> } />
        <Route path='/' element={ <Home /> } />
        <Route path='/About' element={ <About /> } />
        <Route path='/Work' element={ <Work /> } />
        <Route path='/Contact' element={ <Contact /> } />
      </Routes>
      </Router>
    </>
  );
}

export default App;
