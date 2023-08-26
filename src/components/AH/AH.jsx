import React from 'react'
import "./AH.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';

function AH() {
  return (
    <>
      <Box sx={{mt: 1, ml: 1, mr: 1, pb: 2}} borderBottom={'1px solid #2f3542'}>
        <div id='ah-date'>
          <Typography color={"#e0e0e0"}>Sep 2021-May2023 | Autumn Harp, Formulation Chemist</Typography>
        </div>
        <div id='ah-role'>
          <Typography fontSize={14} textAlign={"justify"} color={"#e0e0e0"}>Utilized customer feedback to develop, refine, troubleshoot and deploy personal care products for market, all while adhering to practical budget and timeline</Typography>
        </div>
        <Stack sx={{mt: 1, gap: 1}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
          <Chip color="warning" label="Project Management" variant="outlined" />
          <Chip color="warning" label="Scrum Methodology" variant="outlined" />
          <Chip color="warning" label="Experimental Design" variant="outlined" />
        </Stack>
      </Box>
      <h></h>
    </>
  )
}

export default AH