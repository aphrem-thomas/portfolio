import React from 'react';
import aphremPhoto from '../../../../images/aphrem1.jpg';
import './about.css';
import Skills from '../Skills/skills';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

const About = () => {
    return (
        <div id="about-page" className="about-wrapper">
            <ProfileCard />
            <div className="about-info">
                <ProfileInfo />
                <Skills />
            </div>
        </div>
    );
}

export default About;