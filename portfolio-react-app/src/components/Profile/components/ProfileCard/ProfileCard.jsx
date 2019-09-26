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
                    Worked in Accenture for 2 years as Javascript Developer (React), currently
                    working as Front-End Develper in Razorthink technologies Bangalore from January 2019.
                </div>
                <div className="github">
                    <img className="github-logo" src={github}/>
                    <h3>github</h3>
                </div>
                <div className="resume">
                    <h3>resumé...</h3>
                </div>
            </div>
        </div>
    )
}
