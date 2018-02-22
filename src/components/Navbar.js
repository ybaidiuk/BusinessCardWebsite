import React, {Component} from 'react';
import Logo from "./Logo";
import NavItem from "./NavItem";

export default class Navbar extends Component {

    scrollContent(yAxis) {
        window.scrollTo(0, yAxis);
    }


    render() {
        return (
            <div className={"navbar"}>
                <Logo onClick={this.scrollContent.bind(this, 0)}/>

                <NavItem onClick={this.scrollContent.bind(this, 100)}
                         title={"first Item"}/>

                <NavItem onClick={this.scrollContent.bind(this, 200)}
                         title={"secont Item"}/>

                <NavItem onClick={this.scrollContent.bind(this, 300)}
                         title={"3 Item"}/>
            </div>
        );
    }
}

