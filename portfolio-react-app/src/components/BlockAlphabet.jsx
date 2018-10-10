import React from 'react';
import { connect } from 'react-redux';

class BlockAlphabet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: style_normal
        }
    }
    componentWillReceiveProps(props){
        if(props.position<=props.cursor){
        if (props.cursor === props.position) {
            this.setState({ style: style_zoom })
        }
        if (props.keyPressed === props.children && props.cursor-1 === props.position) {
            this.setState({ style: style_sucess })
        }
       
    }
    }
   
    render() {
        return (
            <React.Fragment>
                <span style={this.state.style}>{this.props.children}</span>
            </React.Fragment>
        );
    }
}
const style_normal = {
    "display": "inline-block",
    "margin": "2px",
    "font-size": "40px"
}

const style_zoom = {
    "display": "inline-block",
    "font-size": "60px",
    "border-bottom": "solid",
    "border-width": "3px",
    "margin": "2px",
    "transition": "font-size 30ms ease-in",
    "color":"black"
}

const style_sucess = {
    "display": "inline-block",
    "margin": "2px",
    "color": "green",
    "font-size": "40px"
}

const style_fail = {
    "display": "inline-block",
    "margin": "2px",
    "color": "red",
    "font-size": "40px"
}

function mapStateToProps(state, ownProps) {
    return ({
        cursor: state.cursor,
        keyPressed: state.keyPressed
    })
}
export default connect(mapStateToProps)(BlockAlphabet);