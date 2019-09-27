import React from 'react';
import ProfilePhoto from '../../../../images/aphrem1.jpg';
import './ProfileCard.css';
import github from '../../../../images/logos/github.svg'

export default function ProfileCard() {
    return (
        <div className="profile-card-wrapper">
            <div className="profile-card-photo">
                <img className="profile-card-photo-image" src={ProfilePhoto}/>
            </div>
            <div className="profile-card-info">
                <h2>Aphrem Thomas</h2>
                <h1>Software Developer</h1>
                <div className="profile-card-experience">
                    Worked in Accenture for 2 years (from Jan 2017) as Javascript Developer (React), currently
                    working as Front-End Developer in Razorthink technologies Bangalore from January 2019.
                </div>
                <a href="https://github.com/aphrem-thomas" target="_blank">
                <div className="github">
                    <img className="github-logo" src={github}/>
                    <h3>github</h3>
                </div>
                </a>
                <a href="https://drive.google.com/file/d/1Bx8gHn77s1wnBzbEkfyteMXM2kXJRl6t/view?usp=sharing" download target="_blank">
                    <div className="resume">
                        <h3>resumé...</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}
