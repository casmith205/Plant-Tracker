import React, { Component } from "react";
import API from "../../utils/API";
import { ProfilePic, BadgeContainer, IndoorPlantContainer, OutdoorPlantContainer } from "../../components/Profile";
import styles from "./ProfilePage.css"

class ProfilePage extends Component {

    // *******need to update userId with the currently logged in user ********
    state = {
        plants: [],
        badges: [],
        userId: 2
    };

    componentDidMount() {
        this.loadPlants();
    }

    loadPlants = () => {
        console.log("inside of load plants on client")
        API.getUser(this.state.userId)
            .then(res => {
                console.log("get plants", res.data.UserPlants)
                this.setState({ plants: res.data.UserPlants, badges: res.data.UserBadges, userId: 2 })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div id="profilepage" className="content center-align">
                <div id="welcomebanner">
                    <h3> Welcome, Gardener! </h3>
                </div>
                <div className="row">
                    <div className="col m6">
                        <ProfilePic />
                    </div>
                    <div id="badgecontainer">
                    <div className="col m6">
                        <BadgeContainer badgesArray={this.state.badges} />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div id="indoorcontainer">
                        <div className="col m6">
                            <IndoorPlantContainer plantsArray={this.state.plants} />
                        </div>
                    </div>
                    <div id="outdoorcontainer">
                    <div className="col m6">
                        <OutdoorPlantContainer plantsArray={this.state.plants} />
                    </div>
                    </div>
                </div>
            </div>

        )
    };
};

export default ProfilePage;