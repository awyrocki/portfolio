import React from 'react'
import "./Upright.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';

function Upright() {
    

  return (
    <>
      <Box sx={{mt: 1, ml: 1, mr: 1, pb: 2}} borderBottom={'1px solid #2f3542'}>
        <div id='upright-date'>
          <Typography color={"#e0e0e0"}>May 2023-Present | Upright Education, Software Developer</Typography>
        </div>
        <div id='upright-role'>
          <Typography fontSize={14} textAlign={"justify"} color={"#e0e0e0"}>Mutiple projects of varying complexity. Four-week group capstone project developing scalable & responsive application for client. </Typography>
        </div>
        <Stack sx={{mt: 1, gap: 1}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
          <Chip color="warning" label="JavaScript" variant="outlined" />
          <Chip color="warning" label="MongoDB" variant="outlined" />
          <Chip color="warning" label="Mongoose ODM" variant="outlined" />
          <Chip color="warning" label="Express js" variant="outlined" />
          <Chip color="warning" label="React" variant="outlined" />
          <Chip color="warning" label="Node js" variant="outlined" />
          <Chip color="warning" label="PostgreSQL" variant="outlined" />
          <Chip color="warning" label="Agile" variant="outlined" />
        </Stack>
      </Box>
    </>
  )
}

export default Upright