import React from 'react'
import "./Gamer.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';

function Gamer() {
  return (
    <>
      <Box sx={{mt: 1, ml: 1, mr: 1, pb: 2}} borderBottom={'1px solid #2f3542'}>
        <Typography color={"#e0e0e0"} sx={{mb: 1}} textAlign={"center"}>Gamer Guild</Typography>
        <Typography color={"#e0e0e0"}>Dynamic, mobile-first, comprehensive application featuring complete CRUD functionality and seamless Steam verification integration</Typography>
        <Stack sx={{mt: 1, gap: 0.5}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
          <Chip color="warning" label="Node.js" variant="outlined" />
          <Chip color="warning" label="Express.js" variant="outlined" />
          <Chip color="warning" label="Mongoose" variant="outlined" />
          <Chip color="warning" label="React" variant="outlined" />
          <Chip color="warning" label="Material-UI" variant="outlined" />
        </Stack>
      </Box>
    </>
  )
}

export default Gamer