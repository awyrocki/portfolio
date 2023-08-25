import React from 'react'
import "./RAN.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function RAN() {
  return (
    <>
    <div id='job1-container'>
          <div id='job1-description'>
            <div id='job-title'>
            <span id='date'>May 2021-Sep 2021 | RAN Biotechnolgoies, Chemist</span>
            </div>
            <div id='job1-role'>
            <span>Lead chemist in charge of manufacturing, researching, and developing fluorosurfactants. Teamed with in-house biologists to enhance functionality and performance. Provided guidance and direction to lab technicians to foster collaborative and productive environment.</span>
            </div>
            <div id='job1-skills'>
              <Stack sx={{mt: 1}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"} spacing={1}>
                <Chip color="warning" label="Problem Solving" variant="outlined" />
                <Chip color="warning" label="Research & Development" variant="outlined" />
              </Stack>
            </div>
          </div>
        </div>
    </>
  )
}

export default RAN