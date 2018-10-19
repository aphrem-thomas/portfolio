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
            <div className="triangle-head"></div>
            <div className="content container">
                <div className="row">
                    <div className="col-6"><DataInput/></div>
                    <div className="col-6"><TriangleDisplay/></div>
                </div>
                
                
            </div>
            </div>
        );
    }
}

export default Triangle;