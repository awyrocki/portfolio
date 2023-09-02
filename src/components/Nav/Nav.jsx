import { React, useState } from 'react'
import "./Nav.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

function Nav() {
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
            <li><a href='https://awyrocki.github.io/portfolio/Experience'>Experience</a></li>
            <li><a href='https://awyrocki.github.io/portfolio/Projects'>Projects</a></li>
        </ul>
    </nav>
    </div>
    </>
    )
}

export default Nav