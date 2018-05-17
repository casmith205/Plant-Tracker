import React, { Component } from "react";
// import styles from "./BadgeContainer.css"

class BadgeContainer extends Component {
    render() {
        let badgeList = [];
        console.log("inside Badges", this.props.badgesArray);
        for (var i = 0; i < this.props.badgesArray.length; i++) {
                badgeList.push(<li key={this.props.badgesArray[i].id}>{this.props.badgesArray[i].id} {badgeList.length}</li>);


        }
        return (
                <div className="col s12 m10">
                    <div className="card">
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

