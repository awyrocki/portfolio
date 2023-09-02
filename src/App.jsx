import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Projects from './components/Projects/Projects'
import NotFound from './components/NotFound/NotFound'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import FontDownloadIcon from '@mui/icons-material/FontDownload';

const linkStyle = {
  textDecoration: "none",
  color: "#e0e0e0"
}

function App() {
  return (
    <>
    <div id='main-container'>
    <div>
        <IconButton href='https://awyrocki.github.io/portfolio'>
            <FontDownloadIcon
            id='home-icon'
            sx={{color: "#e0e0e0", display:{xs:"none", sm:"block"}}}
            ></FontDownloadIcon>
        </IconButton>
    </div>
    <nav>
        <ul id='nav-list'>
            <IconButton>
                <LinkedInIcon
                id="mui-icon"
                sx={{hover: "pointer", color: "#e0e0e0"}}
                onClick={() => window.open('https://www.linkedin.com/in/austin-wyrocki/')}
                ></LinkedInIcon>
            </IconButton>
            <IconButton>
                <GitHubIcon
                id="mui-icon"
                sx={{hover: "pointer", color: "#e0e0e0"}}
                onClick={() => window.open('https://github.com/awyrocki')}
                ></GitHubIcon>
            </IconButton>
            <li><Link style={linkStyle} to='/Experience'>Experience</Link></li>
            <li><Link style={linkStyle} to='/Projects'>Projects</Link></li>
        </ul>
    </nav>
    </div>
      <Routes>
        <Route path='*' element={ <NotFound /> } />
        <Route path='/' element={ <About /> } />
        <Route path='/Experience' element={ <Experience /> } />
        <Route path='/Projects' element={ <Projects /> } />
      </Routes>
    </>
  );
}

export default App;
