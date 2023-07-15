import React from 'react';
import brox from "./brox.png";
import "./About.css";

function About() {
  return (
    <div id='about-div'>
      <img id='about-img' src={brox} alt="" />
      <div id='bio-div'>
        <h></h>
        <span id='about-bio'>Experienced Chemist turned Software Developer with a passion for creating innovative solutions. Throughout my career, I have honed my skills in both scientific research and software development, combining my expertise to deliver cutting-edge solutions. I thrive in collaborative environments and have a strong commitment to teamwork, recognizing the value of diverse perspectives and effective communication.</span>
        <span id='about-bio'>As a lifelong learner, I remain up-to-date with the latest technologies and trends in the software development industry. This commitment to continuous growth enables me to adapt quickly and efficiently to new challenges, ensuring that my solutions are always at the forefront of innovation. I possess a strong analytical mindset, allowing me to effectively analyze and debug code, providing well-researched and cost-effective answers to complex problems.</span>
        <span id='about-bio'>My diverse background, combined with my team-oriented approach, analytical abilities, and customer-facing experience, make me a valuable asset in any collaborative and innovative software development environment. Let's connect and explore how we can work together to create impactful solutions.</span><h></h>
      </div>
    </div>
  )
}

export default About