import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class NavItem extends Component {


    render() {
        return (
            <div className={"navItem"} onClick={this.props.onClick}>
                NavItem
            </div>
        );
    }
}


NavItem.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
};