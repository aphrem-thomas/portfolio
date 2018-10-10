import React from 'react';
import aphrem1 from "../images/aphrem1.jpg";
import {connect} from 'react-redux';
import BlockAlphabet from './BlockAlphabet.jsx';

class Typing extends React.Component{
    componentDidMount(){
        this.props.dispatch({type:'LOREM'});
        window.addEventListener('keydown',(e)=>{
            this.props.dispatch({type:'KEY_DOWN',payload:e.key});
            this.props.dispatch({type:'INC_CURSOR'});
        })
    }
    render(){
        return(
            <React.Fragment>
                {this.props.lorem.split('').map((item,index)=>{
                    return(<BlockAlphabet position={index}>{item}</BlockAlphabet>);
                })}
                
            </React.Fragment>
        );
    }
}
function mapStateToProps(state,ownProps){
    return({
        lorem:state.lorem
    })
}
export default connect(mapStateToProps)(Typing);