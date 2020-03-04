import React, { Component } from 'react'
import { displayName } from "../utils";

export default function (BaseComponent) {
    class WithToggle extends Component {
        state = {
            isToggled: this.props.dataToggled
        };
        handleToggled = ({ target }) =>
        
            this.setState({
                isToggled: Boolean(target.checked)
            });

        render() {
            return (
                <BaseComponent
                    {...this.state}
                    handleToggled={this.handleToggled}
                    {...this.props}
                />
            );
        }
    }

    WithToggle.displayName = `WithToggle(${displayName(BaseComponent)})`;
    return WithToggle;
}