import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (

            <div>
                <nav brand='logo' right>
                    <div className="nav-wrapper">
                        <ul class="side-nav trigger right" id="mobile-demo">
                            <li><a href='/indoorplants'><i className="small material-icons">home</i>Indoor</a></li>
                            <li><a href='/outdoorplants'><i className="small material-icons">local_florist</i>Outdoor</a></li>
                            <li><a href='/graveyard'><i className="small material-icons">broken_image</i>Graveyard</a></li>
                            <li><a href='/profile'><i className="small material-icons">person</i>Profile</a></li>
                        </ul>
                        </div>
                        </nav>

                  
    </div >

    )
    };
};

export default NavBar;