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
        <Typography color={"#e0e0e0"}>Full stack application that utilizes database storage, efficient routing, mongoose schema, password encryption, user/admin token generation and session validation via local storage. Front-end built in React and uses React Router and Reactstrap to construct modern/mobile responsive UI. Components handle back-end CRUD. Interactive and user-driven data management</Typography>
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