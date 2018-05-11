import React, {Component} from "react";

class NavBar extends Component {
render () {
    return (

    <div>

        <nav brand='logo' right>
            <li href='Outdoor pg'><i>local_florist</i></li>
            <li href='Indoor pg'><i>home</i></li>
            <li href='Graveyard pg'><i>broken_image</i></li>
            <li href='Profile pg'><i>person</i></li>
         </nav>
    </div>

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