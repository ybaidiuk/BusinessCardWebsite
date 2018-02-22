import React, {Component} from 'react';
import Logo from "./Logo";
import NavItem from "./NavItem";

export default class Navbar extends Component {
    render() {
        return (
            <div className={"navbar"}>
                <Logo/>
                <NavItem/>
                <NavItem/>
                <NavItem/>
            </div>
        );
    }
}

