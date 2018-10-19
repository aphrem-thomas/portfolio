import React from 'react';
import { Router, Switch } from 'react-router';
import NavBar from './navbar.jsx';
import Content from './content.jsx';

class TriangleDisplay extends React.Component {
    render() {
        return (
            <div className="display-section">
                <h3>triangle comes here</h3>
            </div>
        );
    }
}

export default TriangleDisplay;