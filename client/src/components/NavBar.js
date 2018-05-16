import React, { Component } from "react";
import "./NavBar.css";
import logoImage from "../images/logo.png";

class NavBar extends Component {

    handleLogOut = props => {

        sessionStorage.clear()
        //setItem("userID", "")

    }


    render() {
        return (

            <div className="navbar-fixed">
                <nav className='extended'>
                    <div className="nav-wrapper">
                        <img id="logoimage" src={logoImage}   alt = "logo"/>
                        <a href="/" className="brand-logo left" id="logo">Plant Tracker</a>
                        <ul className="side-nav trigger right" id="mobile-demo">
                            <li><a href='/indoorplants'><i id="navbar-button" className="small material-icons">home</i>Indoor</a></li>
                            <li><a href='/outdoorplants'><i id="navbar-button" className="small material-icons">local_florist</i>Outdoor</a></li>
                            <li><a href='/graveyard'><i id="navbar-button" className="small material-icons">broken_image</i>Graveyard</a></li>
                            <li><a href='/profile'><i id="navbar-button" className="small material-icons">person</i>Profile</a></li>
                            <li><a href='/' onClick={this.handleLogOut}><i id="navbar-button" className="small material-icons">brightness_3</i>Logout</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href='/indoorplants'><i id="navbar-button" className="small material-icons">home</i>Indoor</a></li>
                    <li><a href='/outdoorplants'><i id="navbar-button" className="small material-icons">local_florist</i>Outdoor</a></li>
                    <li><a href='/graveyard'><i id="navbar-button" className="small material-icons">broken_image</i>Graveyard</a></li>
                    <li><a href='/profile'><i id="navbar-button" className="small material-icons">person</i>Profile</a></li>
                    <li><a href='/' onClick={this.handleLogOut}><i id="navbar-button" className="small material-icons">brightness_3</i>Logout</a></li>
                </ul>
            </div >

        )
    };
};

export default NavBar;