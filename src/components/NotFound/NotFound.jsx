import React from 'react'
import "./NotFound.css"
import { Box, Typography } from "@mui/material"

function NotFound() {
  return (
    <>
    <Box height={"80vh"} justifyContent={'center'} alignItems={'center'} display={'flex'}>
      <Typography fontFamily={'Geneva'} variant='h3' color={'#e0e0e0'}>Page not found</Typography>
    </Box>
    </>
  )
}

export default NotFound