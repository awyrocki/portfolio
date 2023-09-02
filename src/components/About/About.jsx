import React from 'react'
import "./About.css"
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <>
    <Box height={"80vh"} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Typography fontFamily={'Century Gothic'} variant="h2" color={"#e0e0e0"} sx={{mb: 5}}>Austin Wyrocki</Typography>
      <Typography fontFamily={'Geneva'} variant='h4' color={"#e0e0e0"}>Full-stack Developer</Typography>
    </Box>
    </>
  )
}

export default About