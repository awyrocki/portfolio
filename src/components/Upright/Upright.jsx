import React from 'react'
import "./Upright.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';

function Upright() {
    

  return (
    <>
    <div id='job1-container'>
          <div id='job1-description'>
            <div id='job-title'>
            <span id='date'>May 2023-Present | Upright Education, Software Engineer</span>
            </div>
            <div id='job1-role'>
            <span>Mutiple projects of varying complexity. Four-week group capstone project developing scalable & responsive application for client. </span>
            </div>
            <div id='job1-skills'>
              <Stack sx={{mt: 1}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"} spacing={1}>
                <Chip color="warning" label="JavaScript" variant="outlined" />
                <Chip color="warning" label="MongoDB" variant="outlined" />
                <Chip color="warning" label="Mongoose ODM" variant="outlined" />
                <Chip color="warning" label="Express js" variant="outlined" />
                <Chip color="warning" label="React" variant="outlined" />
                <Chip color="warning" label="Node js" variant="outlined" />
                <Chip color="warning" label="PostgreSQL" variant="outlined" />
              </Stack>
            </div>
          </div>
        </div>
        <h></h>
    </>
  )
}

export default Upright