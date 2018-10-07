import React from 'react';
import { connect } from 'react-redux';

class BlockAlphabet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: style_normal
        }
    }
    componentDidMount() {
        if (this.props.cursor === this.props.position) {
            this.setState({ style: style_zoom })
        }
        document.addEventListener('keydown', (e) => {
           
            if(e.key===this.props.children && this.props.cursor === this.props.position){
                this.props.dispatch({type:'INC_CURSOR'});
                this.setState({style:style_sucess})
            }
            if (this.props.cursor === this.props.position) {
                this.setState({ style: style_zoom })
            }
        })
    }
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
    "height": "50px",
    "width": "30px",
    "border": "solid",
    "border-width": "1px",
    "margin": "2px",
    
}

const style_zoom = {
    "display": "inline-block",
    "height": "80px",
    "width": "50px",
    "border": "solid",
    "border-width": "1px",
    "margin": "2px",
    
}

const style_sucess = {
    "display": "inline-block",
    "height": "50px",
    "width": "30px",
    "border": "solid",
    "border-width": "1px",
    "margin": "2px",
    "background-color":"green"
}


function mapStateToProps(state, ownProps) {
    return ({
        cursor: state.cursor
    })
}
export default connect(mapStateToProps)(BlockAlphabet);