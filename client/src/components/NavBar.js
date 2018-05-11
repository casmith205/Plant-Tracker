import React, {Component} from "react";

class NavBar extends Component {
render () {
    return (

    <div>
    <Navbar brand='logo' right>
    <NavItem href='Outdoor pg'><Icon>local_florist</Icon></NavItem>
    <NavItem href='Indoor pg'><Icon>home</Icon></NavItem>
    <NavItem href='Graveyard pg'><Icon>broken_image</Icon></NavItem>
    <NavItem href='Profile pg'><Icon>person</Icon></NavItem>
    </Navbar>
    
</div>
    )};
};

export default NavBar;