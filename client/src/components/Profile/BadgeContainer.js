import React, { Component } from "react";
// import styles from "./BadgeContainer.css"

class BadgeContainer extends Component {
    render() {
        let badgeList = [];
        console.log("inside Badges", this.props.badgesArray);
        for (var i = 0; i < this.props.badgesArray.length; i++) {
            let currentImage = (this.props.badgesArray[i].Badge.badgeImage);
            console.log(currentImage)
            badgeList.push(
                <li key={this.props.badgesArray[i].Badge.id}>
                    {this.props.badgesArray[i].Badge.id}
                    <img src={currentImage}alt ="badge img"/>
                    <img src = {require("../../images/badges/firstplantbadge.png")}/>
                    
                </li>);


        }
        return (
            <div className="col s12 m10">
                <div className="card plantContainer">
                    <span className="card-title center-align"><h4>Your Badges</h4></span>

                    <ul className="center-align">
                        {badgeList.length ? (
                            badgeList
                        ) : (
                                <ul>None</ul>
                            )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BadgeContainer;

