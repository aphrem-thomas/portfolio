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
            <DataInput/>
            <TriangleDisplay/>
            </div>
        );
    }
}

export default Triangle;