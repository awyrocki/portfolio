import React from 'react'
import "./Upright.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';

function Upright() {
    

  return (
    <>
      <Box sx={{mt: 1, ml: 1, mr: 1, pb: 2}} textAlign={'center'} maxWidth={750} borderTop={'1px solid #2f3542'} borderBottom={'1px solid #2f3542'}>
        <div id='upright-date'>
          <Typography color={"#e0e0e0"}>May 2023-Present | Upright Education, Software Developer</Typography>
        </div>
        <div id='upright-role'>
          <Typography fontSize={14} textAlign={"justify"} color={"#e0e0e0"}>Collaborating with a team of developers in Agile environment to build scalable and responive full stack applications for clients.</Typography>
        </div>
        <Stack sx={{mt: 1, gap: 0.5}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
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