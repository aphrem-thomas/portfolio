import React from 'react';
import { connect } from 'react-redux';

class DataInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { a_state: null, b_state: null, c_state: null }
    }

    onSubmit(e) { //form validation is done here, also if the inputs are valid it is updated in the redux store
        e.preventDefault();
        let a = parseFloat(document.getElementById("side-a").value);
        let b = parseFloat(document.getElementById("side-b").value);
        let c = parseFloat(document.getElementById("side-c").value);
        console.log(a);
        if (a != null && a > 0 && b != null && b > 0 && c != null && c > 0) {

            this.props.addDimension(a, b, c);
        }
        if (a <= 0 || Number.isNaN(a))
            this.setState({ a_state: 'ts-error' });
        else
            this.setState({ a_state: null });
        if (b <= 0 || Number.isNaN(b))
            this.setState({ b_state: "ts-error" });
        else
            this.setState({ b_state: null });
        if (c <= 0 || Number.isNaN(c))
            this.setState({ c_state: "ts-error" });
        else
            this.setState({ c_state: null });



    }



    render() {
        return (
            <div className="dataform">
                <form data-ts="Form">
                    <fieldset>
                        <label className={this.state.a_state}>
                            <span>Side a</span>
                            <input id="side-a" type="number" />
                        </label>
                    </fieldset>
                    {this.state.a_state == "ts-error" ?
                        <dl className="ts-errors erroroutput" ng-show="form.poref.$invalid">
                            <dt>Error: Must enter numbers greater than 0</dt>
                        </dl> : null
                    }

                    <fieldset>
                        <label className={this.state.b_state}>
                            <span>Side b</span>
                            <input id="side-b" type="number" />
                        </label>
                    </fieldset>
                    {this.state.b_state == "ts-error" ?
                        <dl className="ts-errors erroroutput" ng-show="form.poref.$invalid">
                            <dt>Error: Must enter numbers greater than 0</dt>
                        </dl> : null
                    }

                    <fieldset >
                        <label className={this.state.c_state}>
                            <span>Side c</span>
                            <input id="side-c" type="number" />
                        </label>
                    </fieldset>
                    {this.state.c_state == "ts-error" ?
                        <dl className="ts-errors erroroutput" ng-show="form.poref.$invalid">
                            <dt>Error: Must enter numbers greater than 0</dt>
                        </dl> : null
                    }

                </form>

                <button data-ts="Button" class="ts-primary" onClick={this.onSubmit.bind(this)}>
                    <span style={{ "display": "none" }}>Button Text</span>
                    <i class="ts-icon-arrowright"></i>
                </button>

            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return ({
        dimension: state.Triangle
    })
}

function mapDispatchToProps(dispatch) {
    return (
        {
            addDimension: (a, b, c) => {
                let data = { "a": a, "b": b, "c": c }
                dispatch({ type: "DIMENSIONS", payload: data })
            }
        }
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DataInput);