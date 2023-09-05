import React from 'react'
import "./Reactchat.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box/Box';

function Reactchat() {
  return (
    <>
      <Box sx={{mt: 1, ml: 1, mr: 1, pb: 2}} borderBottom={'1px solid #2f3542'}>
        <Typography color={"#e0e0e0"} sx={{mb: 1}} textAlign={"center"}>React Chat</Typography>
        <Typography color={"#e0e0e0"}>Application where users can send messages in live chat rooms togheter. Server build includes Node/Express framework for backend requests and Mongoose to model data. Endpoints persist to MongoDB, confirmed via MongoDB Atlas Cluster. Client side build includes React/React routing for user navigation. Components handle backend CRUD functionality to create an interactive and user-driven data management. Client authentication is a SSO modeled approach utilizing localStorage.</Typography>
        <Stack sx={{mt: 1, gap: 0.5}} direction={"row"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
          <Chip color="warning" label="MongoDB" variant="outlined" />
          <Chip color="warning" label="Mongoose" variant="outlined" />
          <Chip color="warning" label="Express" variant="outlined" />
          <Chip color="warning" label="React" variant="outlined" />
          <Chip color="warning" label="Node.js" variant="outlined" />
        </Stack>
      </Box>
    </>
  )
}

export default Reactchat