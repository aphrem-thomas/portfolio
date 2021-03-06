import React from 'react';
import aphrem1 from "../images/aphrem1.jpg";
import {connect} from 'react-redux';
import BlockAlphabet from './BlockAlphabet.jsx';

class Typing extends React.Component{
    componentDidMount(){
        this.props.dispatch({type:'LOREM'});
    }
    render(){
        return(
            <div className="typing-word">
                {this.props.lorem.split('').map((item,index)=>{
                    return(<BlockAlphabet position={index}>{item}</BlockAlphabet>);
                })}
                
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
    return({
        lorem:state.lorem
    })
}
export default connect(mapStateToProps)(Typing);