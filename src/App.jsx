import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'
import Experience from './components/Experience/Experience'


function App() {
  return (
    <>
      <Router basename='/portfolio'>
      <Nav />
      <Routes>
        <Route path='*' element={ <NotFound /> } />
        <Route path='/' element={ <About /> } />
        <Route path='/Experience' element={ <Experience /> } />
        <Route path='/Projects' element={ <Projects /> } />
      </Routes>
      </Router>
    </>
  );
}

export default App;
