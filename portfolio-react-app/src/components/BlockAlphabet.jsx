import React from 'react';
import { connect } from 'react-redux';

class BlockAlphabet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: style_normal, passed: false
        }
    }
    componentDidMount() {
        if (this.props.cursor === this.props.position) {
            this.setState({ style: style_zoom })
        }
        if (this.props.position >= this.props.cursor) {
           
            window.addEventListener('keydown', (e) => {
                if (this.props.cursor === this.props.position) {
                    this.setState({ style: style_zoom })
                }
                if (e.key === this.props.children && this.props.cursor === this.props.position){
                    this.setState({ style: style_sucess });
                    console.log("from event listner "+this.props.cursor);
                    this.props.dispatch({type:'INC_CURSOR'});
                }
                
            })

        }
    }
    componentWillReceiveProps(props) {

    }

    render() {
        return (
            <div>
                <div style={this.state.style}>{this.props.children}</div>
            </div>
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
    "font-size": "80px",
    "border-width": "3px",
    "margin": "2px",
    "transition": "font-size 30ms ease-in",
    "color": "black"
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