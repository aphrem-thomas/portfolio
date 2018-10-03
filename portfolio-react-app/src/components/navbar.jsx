import React from 'react';
import {Link} from 'react-router-dom';
class NavBar extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Aphrem Thomas</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Works</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/typing">Typing Game</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default NavBar;