import React from 'react';
import {connect} from 'react-redux';

class DataInput extends React.Component {
    onSubmit(e){
        e.preventDefault();
        let a=parseInt(document.getElementById("side-a").value);
        let b=parseInt(document.getElementById("side-b").value);
        let c=parseInt(document.getElementById("side-c").value);

        if( a!=null && a>0 && b!=null && b>0 && c!=null && c>0){
            this.props.addDimension(a,b,c);
        }

    }



    render() {
        return (
            <div className="dataform">
                <form data-ts="Form">
                    <fieldset>
                        <label>
                            <span>Side A</span>
                            <input id="side-a" type="text" />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label>
                            <span>Side B</span>
                            <input id="side-b" type="text" />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label>
                            <span>Side C</span>
                            <input id="side-c" type="text" />
                        </label>
                    </fieldset>

                </form>

                <button data-ts="Button" class="ts-primary" onClick={this.onSubmit.bind(this)}>
                    <span style={{"display":"none"}}>Button Text</span>
                    <i class="ts-icon-arrowright"></i>
                </button>
                <h2>{this.props.dimension.a}</h2>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){
    return({
        dimension:state.Triangle
    })
}

function mapDispatchToProps(dispatch){
    return(
        {
            addDimension: (a,b,c) => {
                let data={"a":a,"b":b,"c":c}
                dispatch({type:"DIMENSIONS",payload:data})
        }
    }
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(DataInput);