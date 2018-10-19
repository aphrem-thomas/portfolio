import React from 'react';
import { connect } from 'react-redux';

class BlockAlphabet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: style_normal,passed:false
        }
    }
    componentDidMount(){
        if (this.props.cursor === this.props.position) {
            this.setState({ style: style_zoom })
        }
        if(!this.state.passed){
        window.addEventListener('keydown',(e)=>{
            //this.props.dispatch({type:'KEY_DOWN',payload:e.key});
            if(this.props.children===e.key&& this.props.cursor===this.props.position){
                this.setState({style:style_sucess})
                this.setState({passed:true});
            }
            if(this.props.children!==e.key&& this.props.cursor===this.props.position){
                this.setState({style:style_fail})
                this.setState({passed:true});
            }
            this.props.dispatch({type:'INC_CURSOR'});
        })
    }
    }
    // componentWillReceiveProps(props) {
    //     if (props.position == props.cursor) {
    //         if (props.cursor === props.position) {
    //             this.setState({ style: style_zoom })
    //         }
    //         else if (props.keyPressed === props.children && props.cursor - 1 === props.position) {
    //             this.setState({ style: style_sucess })
    //         }
    //         else{
    //             this.setState({style:style_fail});
    //         }

    //     }
    // }

    render() {
        return (
            <React.Fragment>
                <div style={this.state.style}>{this.props.children}</div>
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