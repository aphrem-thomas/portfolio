import React from 'react';
import aphrem1 from "../images/aphrem1.jpg";
import {Route,Switch} from 'react-router';
import Intro from './intro';
import Typing from './typing';

class Content extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Intro}/>
                    <Route exact path="/typing" component={Typing}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Content;