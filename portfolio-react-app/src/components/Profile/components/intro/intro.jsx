import React from 'react';
import twitter from '../../../../Icons/twitter.svg';
import facebook from '../../../../Icons/facebook.svg'
import linkedin from '../../../../Icons/linkedin.svg'
import aphremPhoto from "../../../../images/aphremBlack.png";
import './intro.css'

const Intro = () => {
    return (
        <div id="home-page" className="intro-wrapper">
            <span className="intro-webDev">
                {"WEB Developer"}
            </span>
            <div className="profilePhoto"><img src={aphremPhoto} /></div>
            <div className="intro">
                <div className="wishing">
                    <div className="hi">Hi</div>
                    <div className="aphremName">Aphrèm</div>
                </div>
                <div className="intro-info">
                    <>
                    <img className="socialLinks" src={twitter}/>
                    <img className="socialLinks" src={facebook}/>
                    <img className="socialLinks" src={linkedin}/>
                    </>
                    {/* {`Proactive and experienced Software Engineer with 2.8 years of demonstrated history in Front end application development. Skilled in JavaScript, React-JS, HTML, CSS. Strong engineering professional with a Master’s degree (M Tech) in Computer Science & Engineering from the College of Engineering, Trivandrum.`} */}
                </div>
            </div>
        </div>
    );
}

export default Intro;