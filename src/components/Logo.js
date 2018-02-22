import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Logo extends Component {
    render() {
        return (
            <div className={"logo"} onClick={this.props.onClick}>
                Logo
            </div>
        );
    }
}

Logo.propTypes = {
    onClick: PropTypes.func
};
