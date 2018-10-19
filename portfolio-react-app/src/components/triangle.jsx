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
            <h1>Please enter the length of sides of triangle</h1>
            </div>
           
                <div className="row">
                    <div className="col-6-lg col-12-sm"><DataInput/></div>
                    <div className="col-6=lg col-12-sm"><TriangleDisplay/></div>
                </div>
                
                
            
            </div>
        );
    }
}

export default Triangle;