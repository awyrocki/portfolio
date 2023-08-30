import React from 'react';
import brox from "./brox.png";
import "./Experience.css";
import Upright from '../Upright/Upright';
import AH from '../AH/AH';
import RAN from '../RAN/RAN';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Experience() {
  return (
    <>
    <div id='experience-tab'>
    <div id='about-div'>
      <img id='about-img' src={brox} alt="" />
        <Box flex={"column"} maxWidth={750} justifyContent={"center"} alignItems={'center'} sx={{mt: 1, pt: 1}} borderTop={'1px solid #2f3542'}>
          <Typography sx={{mb: 1}} textAlign={'justify'} fontSize={14}>Experienced Chemist turned Software Developer with a passion for creating innovative solutions. Throughout my career, I have honed my skills in both scientific research and software development, combining my expertise to deliver cutting-edge solutions. I thrive in collaborative environments and have a strong commitment to teamwork, recognizing the value of diverse perspectives and effective communication.</Typography>
          <Typography sx={{mb: 1}} textAlign={'justify'} fontSize={14}>As a lifelong learner, I remain up-to-date with the latest technologies and trends in the software development industry. This commitment to continuous growth enables me to adapt quickly and efficiently to new challenges, ensuring that my solutions are always at the forefront of innovation. I possess a strong analytical mindset, allowing me to effectively analyze and debug code, providing well-researched and cost-effective answers to complex problems.</Typography>
          <Typography sx={{mb: 1}} textAlign={'justify'} fontSize={14}>My diverse background, combined with my team-oriented approach, analytical abilities, and customer-facing experience, make me a valuable asset in any collaborative and innovative software development environment. Let's connect and explore how we can work together to create impactful solutions.</Typography> 
            <Upright />
            <AH />
            <RAN />
        </Box>
    </div>
    </div>
    </>
  )
}

export default Experience