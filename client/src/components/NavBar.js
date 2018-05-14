import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (

            <div>
                <nav brand='logo' right>
                    <div className="nav-wrapper">
                        <ul class="side-nav right" id="mobile-demo">
                            <li><a href='/indoorplants'><i className="small material-icons">home</i></a></li>
                            <li><a href='/outdoorplants'><i className="small material-icons">local_florist</i></a></li>
                            <li><a href='/graveyard'><i className="small material-icons">broken_image</i></a></li>
                            <li><a href='/profile'><i className="small material-icons">person</i></a></li>
                        </ul>
                        </div>
                        </nav>

                  
    </div >

    )
    };
};

export default NavBar;