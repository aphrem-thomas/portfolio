import React from 'react';
import aphrem1 from "../images/aphrem1.jpg";

class Intro extends React.Component{
    render(){
        return(
            <div className="container">
            <div className="introbox jumbotron">
            <img src={aphrem1} className="profilepic"/>
                        
            Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Java, JavaScript, React.js, React Native, and Adobe Photoshop. Strong engineering professional with a Master of Technology (MTech) focused in Computer Science from College of Engineering, Trivandrum.            
            </div>

            </div>
        );
    }
}

export default Intro;