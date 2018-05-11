import React, {Component} from "react";

class NavBar extends Component {
render () {
    return (

    <div>
        <nav brand='logo' right>
            <NavItem href='Outdoor pg'><i>local_florist</i></NavItem>
            <NavItem href='Indoor pg'><i>home</i></NavItem>
            <NavItem href='Graveyard pg'><i>broken_image</i></NavItem>
            <NavItem href='Profile pg'><i>person</i></NavItem>
        </nav>
    </div>
    )};
};

export default NavBar;