import React from 'react';


class BlockAlphabet extends React.Component{
   
    render(){
        return(
            <React.Fragment>
                <span style={{...style}}>{this.props.children}</span>
            </React.Fragment>
        );
    }
}
const style={
    "display":"inline-block",
    "height":"30px",
    "width":"20px",
    "border":"solid",
    "border-width":"2px",
    "margin":"2px"
}
export default BlockAlphabet;