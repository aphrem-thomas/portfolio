import React from 'react';
import aphrem1 from "../images/aphrem1.jpg";
import {Route,Switch} from 'react-router';
import Typing from './typing';
import Triangle from './triangle.jsx'
import Profile from './Profile/profile';
class Content extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Profile}/>
                    <Route exact path="/typing" component={Typing}/>
                    <Route exact path="/triangle" component={Triangle}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Content;