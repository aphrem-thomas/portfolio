import React from 'react';
import './profile.css';
import Intro from './components/intro/intro';
import About from './components/About/about';
class Profile extends React.Component {
    render() {
        return (
            <div className={"wrapper"}>
               <Intro/>
               <About/>
            </div>
        );
    }
}

export default Profile;