import React, { Component } from "react";
import API from "../../utils/API";
import { ProfilePic, BadgeContainer, IndoorPlantContainer, OutdoorPlantContainer } from "../../components/Profile";
// import styles from "./ProfilePage.css"

class ProfilePage extends Component {
    render () {
        return (
            <div id="profilepage" className="content">
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
                    <IndoorPlantContainer />
                    </div>
                    <div className="col m6">
                    <OutdoorPlantContainer />
                    </div>
                </div>
            </div>

        )};
};

export default ProfilePage;