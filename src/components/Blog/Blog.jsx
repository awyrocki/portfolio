import React from 'react'
import "./Blog.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';

function Blog() {
  return (
    <>
    <Box sx={{mt: 1, ml: 1, mr: 1, pb: 2}} borderBottom={'1px solid #2f3542'}>
        <Typography color={"#e0e0e0"} sx={{mb: 1}} textAlign={"center"}>Blog</Typography>
        <Typography color={"#e0e0e0"}>Back-end server utilizing routes and read/write functions. Full CRUD functionality. Utilizes Express framework. Model-view controller architecture. Postman to check routes</Typography>
        <Stack sx={{mt: 1, gap: 0.5}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
            <Chip color="warning" label="Node.js" variant="outlined" />
            <Chip color="warning" label="Express" variant="outlined" />
            <Chip color="warning" label="Nodemon" variant="outlined" />
            <Chip color="warning" label="Postman" variant="outlined" />
        </Stack>
      </Box>
    </>
  )
}

export default Blog