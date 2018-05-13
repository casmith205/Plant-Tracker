import React, { Component } from "react";
import API from "../../utils/API";
import ProfilePic from "../../components/Profile/ProfilePic";
import BadgeContainer from "../../components/Profile/BadgeContainer";

class ProfilePage extends Component {
    render () {
        return (
            <div id="profilepage">
            <NavBar />
            <div id="welcomebanner">
                <h3> Welcome, Gardener! </h3>
                </div>
            <div id = "mainprofile" className="row">
                <div className="col m3">
                <ProfilePic />
                </div>
                <div className="col m3">
                </div>
                <div className="col m3">
                <BadgeContainer />
                </div>
            </div>
                <Footer />
            </div>

        )};
};

export default ProfilePage;