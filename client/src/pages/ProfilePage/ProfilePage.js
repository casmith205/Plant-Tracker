import React, { Component } from "react";
import API from "../../utils/API";
import { ProfilePic, BadgeContainer, IndoorPlantContainer, OutdoorPlantContainer } from "../../components/Profile";
import { Link, withRouter } from "react-router-dom";
import styles from "./ProfilePage.css"

class ProfilePage extends Component {

    // *******need to update userId with the currently logged in user ********
    state = {
        plants: [],
        badges: [],
    };

    componentDidMount() {
        this.loadPlants();
    }

    loadPlants = () => {
       
        if (sessionStorage.getItem("userID") == undefined) {
            console.log("inside of no user ID in session");
            this.props.history.push({
                pathname: "/",
            })
        }
        console.log("inside of load plants on client", this.state.userId)
        // API.getUser(sessionStorage.getItem("userID"))
        API.getUser(sessionStorage.getItem("userID"))
            .then(res => {
                console.log("get plants #1", res.data)
                console.log("get plants", res.data.UserPlants)
                this.setState({ userName:res.data.userName, plants: res.data.UserPlants, badges: res.data.UserBadges})

            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div id="profilepage" className="content">
                <div id="welcomebanner">
                    <h3> Welcome, {this.state.userName}! </h3>
                </div>
                <div id="mainprofile" className="row">
                    <div className="col m3">
                        <ProfilePic />
                    </div>
                    <div className="col m3">
                    </div>
                    <div className="col m3">
                        <BadgeContainer badgesArray={this.state.badges} />
                    </div>
                </div>
                <div id="plantcontainers" className="row">
                    <div className="col m6">
                        <IndoorPlantContainer plantsArray={this.state.plants} />
                    </div>
                    <div className="col m6">
                        <OutdoorPlantContainer plantsArray={this.state.plants} />
                    </div>
                </div>
            </div>

        )
    };
};

export default withRouter(ProfilePage);
