import React from 'react';
import { connect } from 'react-redux';

import Triangle from '../images/triangle.png';
import isoTriangle from '../images/isoscles.png';
import eqiTriangle from '../images/eqilateral.png';
import scaTriangle from '../images/scalene.png';
import oops from '../images/oops.png';

class TriangleDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { triangle: "Please enter the length of sides of triangle in the text boxes", image: Triangle,loading:false }

    }
    componentWillReceiveProps(props) { //whenever props is received then this code is executed
        let a = props.dimension.a;
        let b = props.dimension.b;
        let c = props.dimension.c;
        this.setState({loading:true}) //to display loading for half a second
        setTimeout(()=>{this.setState({loading:false})},500);
        if (a + b <= c || a + c <= b || b + c <= a) {
            this.setState({ triangle: "Its a non-valid triangle" });
            this.setState({ image: oops })
        }
        else if (a === b && b === c) {
            this.setState({ triangle: "Its an equilateral triangle" });
            this.setState({ image: eqiTriangle })
        }
        else if ((a === b || b === c || c === a)) {
            this.setState({ triangle: "Its an isosceles triangle" });
            this.setState({ image: isoTriangle })
        }
        else {
            this.setState({ triangle: "Its a scalene triangle" });
            this.setState({ image: scaTriangle })
        }

    }
    render() {
        return (
            this.state.loading?<h1>loading...</h1>:
            <div>
                <h1 className="output-text">{this.state.triangle}</h1>
                <img className="triangle-display" src={this.state.image} style={{ "height": "200px", "width": "auto", "object-fit": "contain" }} />

            </div>

        );
    }
}
function mapStateToProps(state, ownProps) {
    return ({
        dimension: state.Triangle
    })
}
export default connect(mapStateToProps)(TriangleDisplay); //used to connect the component with store

