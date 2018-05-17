import React, { Component } from "react";

class BadgeContainer extends Component {
    render() {
        let badgeList = [];
        console.log("inside Badges", this.props.badgesArray);
        for (var i = 0; i < this.props.badgesArray.length; i++) {
            let currentImage = (this.props.badgesArray[i].Badge.badgeImage);
            console.log(currentImage)
            if (this.props.badgesArray[i].Badge.id === 3) {
                console.log(this.props.badgesArray[i].Badge)
                badgeList.push(
                    <li key={this.props.badgesArray[i].Badge.id}>
                        {/* {this.props.badgesArray[i].Badge.id} */}
                        {/* <img src={currentImage}alt ="badge img"/> */}

                        <h4> {this.props.badgesArray[i].Badge.badgeName} </h4>
                        <h6>{this.props.badgesArray[i].Badge.badgeDescription}</h6>
                        <img className ="circle responsive-img" src={require("../../images/badges/firstplantbadge.png")} />

                    </li>);

            }
            else if (this.props.badgesArray[i].Badge.id === 1) {
                badgeList.push(
                    <li key={this.props.badgesArray[i].Badge.id}>
                        {/* {this.props.badgesArray[i].Badge.id} */}
                        {/* <img src={currentImage}alt ="badge img"/> */}
                        <h4> {this.props.badgesArray[i].Badge.badgeName} </h4>
                        <h6>{this.props.badgesArray[i].Badge.badgeDescription}</h6>
                        <img className ="circle responsive-img" src={require("../../images/badges/deadplantbadge.png")} />

                    </li>);

            }
            else if (this.props.badgesArray[i].Badge.id === 2) {
                badgeList.push(
                    <li key={this.props.badgesArray[i].Badge.id}>
                        {/* {this.props.badgesArray[i].Badge.id} */}
                        {/* <img src={currentImage}alt ="badge img"/> */}
                        <h4> {this.props.badgesArray[i].Badge.badgeName} </h4>
                        <h6>{this.props.badgesArray[i].Badge.badgeDescription}</h6>
                        <img className ="circle responsive-img" src={require("../../images/badges/deadplantbadge.png")} />

                    </li>);

            }

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

