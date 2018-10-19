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
        this.state = { triangle: null,image:null}
    }
    componentWillReceiveProps(props) {
        let a = props.dimension.a;
        let b = props.dimension.b;
        let c = props.dimension.c;
        
        if (a + b <= c || a + c <= b || b + c <= a){
            this.setState({ triangle: "Its a non-valid tirangle"});
            this.setState({image:oops})
        }
        else if (a === b && b === c){
            this.setState({ triangle: "It an equilateral triangle" });
            this.setState({image:eqiTriangle})
        }
        else if ((a === b || b === c || c === a)){
            this.setState({ triangle: "Its an isosceles triangle" });
            this.setState({image:isoTriangle})
        }
        else{
            this.setState({ triangle: "Its a scalene triangle" });
            this.setState({image:scaTriangle})
        }
    }
    render() {
        return (
            <div className="display-section">
                <div class="jumbotron">
                    <h1 class="display-4">{this.state.triangle}</h1>
                    <p class="lead"></p>
                    <hr class="my-4"/>
                        <p class="lead">
                            <img src={this.state.image} style={{"height":"200px","width":"200px"}}/>
                            {/* <a class="btn btn-primary btn-lg" href="#" role="button">Area?</a> */}
                        </p>
                    </div>
                </div>
                );
            }
        }
function mapStateToProps(state,ownProps){
    return ({
                    dimension: state.Triangle
            })
        }
export default connect (mapStateToProps)(TriangleDisplay); //used to connect the component with store