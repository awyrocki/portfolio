import React from 'react'
import "./AH.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function AH() {
  return (
    <>
    <div id='job1-container'>
          <div id='job1-description'>
            <div id='job-title'>
            <span id='date'>Sep 2021-May 2023 | Autumn Harp, Formulation Chemist</span>
            </div>
            <div id='job1-role'>
            <span>Utilized customer feedback to develop, refine, troubleshoot and deploy personal care products for market, all while adhering to practical budget and timeline</span>
            </div>
            <div id='job1-skills'>
              <Stack sx={{mt: 1}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"} spacing={1}>
                <Chip color="warning" label="Project Management" variant="outlined" />
                <Chip color="warning" label="Scrum Methodology" variant="outlined" />
                <Chip color="warning" label="Experimental Design" variant="outlined" />
              </Stack>
            </div>
          </div>
        </div>
        <h></h>
    </>
  )
}

export default AH