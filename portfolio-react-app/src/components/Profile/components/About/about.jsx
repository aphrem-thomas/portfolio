import React from 'react';
import './about.css'
import Skills from '../Skills/skills';
const About = ()=>{
    return(
        <>
            <div id="about-page" className="about-wrapper">
                <div className="side-info">
                </div>
                <div className="right-info">
                </div>
            </div>
            <Skills/>
        </>
    );
}

export default About;