import React from 'react';
import aphremPhoto from "../images/aphrem-BlackBG.jpg";
import styles from './intro.css';
class Intro extends React.Component {
    render() {
        return (
            <div className={"wrapper"}>
                <div className="profilePhoto"><img src={aphremPhoto} /></div>
                <div className="intro">
                    <div className="intro-wrapper">
                        <div className="hi">Hi</div>
                        <div className="aphremName">Aphrèm</div>
                </div>
            </div>
            </div>
        );
    }
}

export default Intro;