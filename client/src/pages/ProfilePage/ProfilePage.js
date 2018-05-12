import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import ProfilePic from "../../components/Profile/ProfilePic";


class ProfilePage extends Component {
    render () {
        return (
            <div id="profilepage">
            <NavBar />
            <ProfilePic />
            <Footer />
            </div>

        )};
};

export default ProfilePage;