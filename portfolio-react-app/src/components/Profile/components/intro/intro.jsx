import React from 'react';
import aphremPhoto from "../../../../images/aphrem-BlackBG.jpg";
import './intro.css'
const Intro = () => {
    return (
        <div id="home-page" className="intro-wrapper">
            <div className="profilePhoto"><img src={aphremPhoto} /></div>
            <div className="intro">
                <div className="wishing">
                    <div className="hi">Hi</div>
                    <div className="aphremName">Aphrèm</div>
                </div>
            </div>
        </div>
    );
}

export default Intro;