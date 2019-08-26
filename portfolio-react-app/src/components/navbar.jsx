import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
class NavBar extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="navbar-section">
                    <a className="link" href="#home-page">home</a>
                    <a className="link" href="#about-page">about</a>
                    <a className="link" href="#skills-page">skills</a>
                </div>
            </div>
        );
    }
}
export default NavBar;