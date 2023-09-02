import React from 'react'
import "./Projects.css"
import Gamer from "../Gamer/Gamer"
import Reactchat from "../Reactchat/Reactchat"
import Blog from '../Blog/Blog'
import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography/Typography'

function Projects() {
  return (
    <>
    <Typography fontSize={20} textAlign={"center"} color={"#e0e0e0"}>Projects</Typography>
    <div id='project-div'>
    <Box flex={"column"} maxWidth={900} justifyContent={"center"} alignItems={'center'} sx={{mt: 1, pt: 1}} borderTop={'1px solid #2f3542'}>
      <Gamer />
      <Reactchat />
      <Blog />
    </Box>
    </div>
    </>
  )
}

export default Projects