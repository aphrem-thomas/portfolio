import React from 'react';
import aphremPhoto from '../../../../images/aphrem1.jpg'
import './about.css'
import Skills from '../Skills/skills';



const About = ()=>{
    return(
        <>
            <div id="about-page" className="about-wrapper">
                <div className="side-info">
                    <div className="about-photo"><img className="about-photo-greenbg" src={aphremPhoto} /></div>
                </div>
                <div className="right-info">
                    <div className="about-text">
                        <span className="about-info">
                            {`Proactive and experienced Software Engineer with 2.8 years of demonstrated history in Front end application development. Skilled in JavaScript, React-JS, HTML, CSS. Strong engineering professional with a Master’s degree (M Tech) in Computer Science & Engineering from the College of Engineering, Trivandrum.`}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;