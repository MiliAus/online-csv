//components
import React, { useState, useEffect } from 'react';
import Theme from 'src/components/Theme'

//images
import Github from 'src/components/Github';
import Linkedin from 'src/components/Linkedin';


const Exp = () => {
  return (
    <>
    <div className='tertiary'>
      <h3 id='exp'>Experience</h3>
      <p className='title'>Associate IT Systems Engineer - Florida Blue</p>
      <p className='mt_0'>2022 - Present</p>
      <p className='margins_small'>Designing and constructing, high-availability OpenShift clusters along with working closely with developers in the CI/CD process. Built automation programs using the Go language for creating OpenShift objects automatically, reducing workload and time to production for critical components.</p>
      <p>Tech Lead and Figma designer for a fullstack application that utilizes React, FastAPI, Microsoft SQL Server, other technologies for tracking yearly enterprise expenses. </p>
      <p className='skills'>Skills: OpenShift, Red Hat Products, Node, React, FastAPI </p>

      
      <p className='title'>Network Administrator - Air National Guard</p>
      <p className='mt_0'>2018 - 2022</p>
      <p className='margins_small'>Responsible for planning, deploying, configuring, and maintaining the network infrastructure that supports operational needs in temporary, dynamic, and often austere environments</p>
      <p>Team Lead for several exercises, coordinating drills with leadership and ensuring mission success.</p>
      <p className='skills'>Skills: Cisco switches, Cisco Routing, Troubleshooting, Leadership</p>
      

    </div>
    </>
      
  );
};


export default Exp;