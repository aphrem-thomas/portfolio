import React from 'react';
import {connect} from 'react-redux';


class TriangleDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state={triangle:null}
    }
    componentWillReceiveProps(props){
        let a=props.dimension.a;
        let b=props.dimension.b;
        let c=props.dimension.c;
        if (a + b <= c || a + c <= b || b + c <= a) 
            this.setState({triangle:"not valid triangle"})
        else if(a===b&&b===c)
            this.setState({triangle:"equilateral traingle"});
        else if((a===b||b===c||c===a))
            this.setState({triangle:"isosceles traingle"});
        else
            this.setState({triangle:"scalene traingle"});
    }
    render() {
        return (
            <div className="display-section">
                <h3>{this.state.triangle}</h3>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
    return({
        dimension:state.Triangle
    })
}
export default connect (mapStateToProps)(TriangleDisplay);