import React, { Component } from "react";
import API from "../../utils/API";
import ProfilePic from "../../components/Profile/ProfilePic";
import BadgeContainer from "../../components/Profile/BadgeContainer";
import IndoorContainer from "../../components/Profile/IndoorPlantContainer";
import OutdoorContainer from "../../components/Profile/OutdoorPlantContainer";
import styles from "./ProfilePage.css"

class ProfilePage extends Component {
    render () {
        return (
            <div id="profilepage">
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
                <div id ="plantcontainers" className="row">
                    <div className="col m6">
                    <IndoorContainer />
                    </div>
                    <div className="col m6">
                    <OutdoorContainer />
                    </div>
                </div>
            </div>

        )};
};

export default ProfilePage;