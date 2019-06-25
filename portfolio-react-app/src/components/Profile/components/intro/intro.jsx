import React from 'react';
import aphremPhoto from "../../../../images/aphrem-BlackBG.jpg";
import './intro.css'
const Intro = ()=>{
    return(
        <>
             <div className="profilePhoto"><img src={aphremPhoto} /></div>
                <div className="intro">
                    <div className="intro-wrapper">
                        <div className="hi">Hi</div>
                        <div className="aphremName">Aphrèm</div>
                    </div>
                </div>
        </>
    );
}

export default Intro;