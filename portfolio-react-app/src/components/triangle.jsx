import React from 'react';
import { Router, Switch } from 'react-router';
import NavBar from './navbar.jsx';
import Content from './content.jsx';
import DataInput from './DataInput.jsx';
import TriangleDisplay from './TriangleDisplay.jsx';
class Triangle extends React.Component {
    render() {
        return (
            <div className='triangle'>
                <div className="triangle-head">
                    <h1>Triangle Classifier</h1>
                </div>
                <div className="content">
                
                    <div className="inputSides"><DataInput/></div>
                    <div className="displayTriangle"><TriangleDisplay/></div>
                
                </div>
               
            </div>
        );
    }
}

export default Triangle;