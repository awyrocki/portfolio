import React from 'react';
import brox from "./brox.png";
import "./Experience.css";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function Experience() {
  return (
    <>
    <div id='about-div'>
      <img id='about-img' src={brox} alt="" />
      <div id='bio-div'>
        <h></h>
        <span id='about-bio'>Experienced Chemist turned Software Developer with a passion for creating innovative solutions. Throughout my career, I have honed my skills in both scientific research and software development, combining my expertise to deliver cutting-edge solutions. I thrive in collaborative environments and have a strong commitment to teamwork, recognizing the value of diverse perspectives and effective communication.</span>
        <span id='about-bio'>As a lifelong learner, I remain up-to-date with the latest technologies and trends in the software development industry. This commitment to continuous growth enables me to adapt quickly and efficiently to new challenges, ensuring that my solutions are always at the forefront of innovation. I possess a strong analytical mindset, allowing me to effectively analyze and debug code, providing well-researched and cost-effective answers to complex problems.</span>
        <span id='about-bio'>My diverse background, combined with my team-oriented approach, analytical abilities, and customer-facing experience, make me a valuable asset in any collaborative and innovative software development environment. Let's connect and explore how we can work together to create impactful solutions.</span><h></h>
      </div>
    </div>
    <div id='experience-container'>
        <div id='job1-container'>
          <div id='job1-description'>
            <div id='job-title'>
            <span id='date'>May 2023-Present | Upright Education, Software Engineer</span>
            </div>
            <div id='job1-role'>
            <span>Mutiple projects of varying complexity. Four-week group capstone project developing scalable & responsive application for client. </span>
            </div>
            <div id='job1-skills'>
              <Stack sx={{mt: 1}} direction="row" spacing={1}>
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
        <div id='job1-container'>
          <div id='job1-description'>
            <div id='job-title'>
            <span id='date'>Sep 2021-May 2023 | Autumn Harp, Formulation Chemist</span>
            </div>
            <div id='job1-role'>
            <span>Utilized customer feedback to develop, refine, troubleshoot and deploy personal care products for market, all while adhering to practical budget and timeline</span>
            </div>
            <div id='job1-skills'>
              <Stack sx={{mt: 1}} direction="row" spacing={1}>
                <Chip color="warning" label="Project Management" variant="outlined" />
                <Chip color="warning" label="Scrum Methodology" variant="outlined" />
                <Chip color="warning" label="Experimental Design" variant="outlined" />
              </Stack>
            </div>
          </div>
        </div>
        <div id='job1-container'>
          <div id='job1-description'>
            <div id='job-title'>
            <span id='date'>May 2021-Sep 2021 | RAN Biotechnolgoies, Chemist</span>
            </div>
            <div id='job1-role'>
            <span>Lead chemist in charge of manufacturing, researching, and developing fluorosurfactants. Teamed with in-house biologists to enhance functionality and performance. Provided guidance and direction to lab technicians to foster collaborative and productive environment.</span>
            </div>
            <div id='job1-skills'>
              <Stack sx={{mt: 1}} direction="row" spacing={1}>
                <Chip color="warning" label="Problem Solving" variant="outlined" />
                <Chip color="warning" label="Research & Development" variant="outlined" />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience