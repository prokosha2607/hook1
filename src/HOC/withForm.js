import React, { Component } from 'react'
import { displayName } from "../utils";

export default function (BaseComponent) {
    class WithForm extends Component {
        state = {
            data: this.props.initState
        };
        handleChange = ({ target }) =>
            this.setState({
                data: { ...this.state.data, [target.name]: target.value }
            });
        handleSubmit = e => {
            e.preventDefault();            
            if (this.props.submit) {
                this.props.submit(this.state.data);
                this.setState({ data: this.props.initState });
            }
           
        };
        render() {
            return (
                <BaseComponent
                    {...this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.props}
                />
            );
        }
    }
    WithForm.displayName = `WithForm(${displayName(BaseComponent)})`;
    return WithForm;
}