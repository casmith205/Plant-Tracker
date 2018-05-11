import React, {Component} from "react";

class NavBar extends Component {
render () {
    return (

    <div>
        <nav brand='logo' right>
            <li href='/outdoorplants'><i>local_florist</i></li>
            <li href='/indoorplants'><i>home</i></li>
            <li href='/graveyard'><i>broken_image</i></li>
            <li href='/profile'><i>person</i></li>
         </nav>
    </div>

    )};
};

export default NavBar;