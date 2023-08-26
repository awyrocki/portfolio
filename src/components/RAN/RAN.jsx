import React from 'react'
import "./RAN.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function RAN() {
  return (
    <>
      <Box sx={{mt: 1, ml: 1, mr: 1, pb: 2}} borderBottom={'1px solid #2f3542'}>
          <div id='ran-date'>
            <Typography color={"#e0e0e0"}>May2021-Sep2021 | RAN Biotechnologies, Chemist</Typography>
          </div>
          <div id='ran-role'>
            <Typography fontSize={14} textAlign={"justify"} color={"#e0e0e0"}>Lead chemist in charge of manufacturing, researching, and developing fluorosurfactants. Teamed with in-house biologists to enhance functionality and performance. Provided guidance and direction to lab technicians to foster collaborative and productive environment.</Typography>
          </div>
          <Stack sx={{mt: 1, gap: 1}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
            <Chip color="warning" label="Problem Solving" variant="outlined" />
            <Chip color="warning" label="Research & Development" variant="outlined" />
          </Stack>
        </Box>
    </>
  )
}

export default RAN