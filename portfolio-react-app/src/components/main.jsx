import React from 'react';
import { Router, Switch } from 'react-router';
import NavBar from './navbar.jsx';
import Content from './content.jsx';

class Main extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Content />
            </div>
        );
    }
}
{/* <Switch>
            <Route path="\" component={Home}/>
        </Switch> */}
export default Main;