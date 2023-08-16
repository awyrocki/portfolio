import React from 'react'
import "./Nav.css"

function Nav() {
    return (
    <>
    <div id='main-container'>
    <div>
{/* add a home icon here */}
    </div>
    <nav>
        <ul>
            <li><a href='http://localhost:3000/Experience'>Experience</a></li>
            <li><a href='http://localhost:3000/Projects'>Projects</a></li>
        </ul>
    </nav>
    </div>
    </>
    )
}

export default Nav