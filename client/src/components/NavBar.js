import React, {Component} from "react";

class NavBar extends Component {
render () {
    return (

    <div>
        <nav brand='logo' right>
            <div class="nav-wrapper">
                <ul id="nav-mobile" class="right hide-on-med-and-down"> 
                    <li><a href='/outdoorplants'><i class="small material-icons">local_florist</i></a></li>
                    <li><a href='/indoorplants'><i class="small material-icons">home</i></a></li>
                    <li><a href='/graveyard'><i class="small material-icons">broken_image</i></a></li>
                    <li><a href='/profile'><i class="small material-icons">person</i></a></li>
                </ul>
            </div>
        </nav>
    </div>

    )};
};

export default NavBar;