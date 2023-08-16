import { React, useState } from 'react'
import "./Nav.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

function Nav() {
// sets the body theme to dark
const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark');
    localStorage.setItem("selectedTheme", "dark")
}
// sets the body theme to light
const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light');
    localStorage.setItem("selectedTheme", "light")
}

const selectedTheme = localStorage.getItem("selectedTheme");
if(!selectedTheme || selectedTheme !== 'light') {
    setDarkMode();
} else {
    setLightMode()
}
// toggles the light/dark mode theme
const toggleTheme = () => {
    const body = document.querySelector('body')
    const currentTheme = body.getAttribute('data-theme')
    if(currentTheme === 'dark') {
        setLightMode()
    } else {
        setDarkMode()
    }
}

const [ mode, setMode ] = useState(false)

const handleIconClick = () => {
    setMode(!mode)
}

const [ lightDarkMode, setLightDarkMode ] = useState(true)

    return (
    <>
    <div id='main-container'>
    <div>
        <IconButton id='home-icon' href='http://localhost:3000'>
            <FontDownloadIcon></FontDownloadIcon>
        </IconButton>
    </div>
    <nav>
        <ul id='nav-list'>
            <IconButton onClick={handleIconClick}>
                {mode ? <LightModeIcon
                onClick={() => {setLightDarkMode(!lightDarkMode); toggleTheme()}}
                id='lightdark-icon'
                /> : <NightlightIcon
                onClick={() => {setLightDarkMode(!lightDarkMode); toggleTheme()}}
                id='lightdark-icon'
                />}
            </IconButton>
            <IconButton>
                <LinkedInIcon
                id="mui-icon"
                sx={{hover: "pointer"}}
                onClick={() => window.open('https://www.linkedin.com/in/austin-wyrocki/')}
                ></LinkedInIcon>
            </IconButton>
            <IconButton>
                <GitHubIcon
                id="mui-icon"
                sx={{hover: "pointer"}}
                onClick={() => window.open('https://github.com/awyrocki')}
                ></GitHubIcon>
            </IconButton>
            <li><a href='http://localhost:3000/Experience'>Experience</a></li>
            <li><a href='http://localhost:3000/Projects'>Projects</a></li>
        </ul>
    </nav>
    </div>
    </>
    )
}

export default Nav