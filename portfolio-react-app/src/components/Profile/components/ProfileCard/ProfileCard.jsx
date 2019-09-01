import React from 'react';
import ProfilePhoto from '../../../../images/aphrem1.jpg';
import './ProfileCard.css';

export default function ProfileCard() {
    return (
        <div className="profile-card-wrapper">
            <div className="profile-card-photo">
                <img className="profile-card-photo-image" src={ProfilePhoto}/>
            </div>
            <div className="profile-card-info">

            </div>
        </div>
    )
}
