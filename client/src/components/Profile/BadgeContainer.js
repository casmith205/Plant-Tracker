import React, { Component } from "react";

class BadgeContainer extends Component {
    render() {
        let badgeList = [];
        console.log("inside Badges", this.props.badgesArray);
        for (var i = 0; i < this.props.badgesArray.length; i++) {
                badgeList.push(<li key={this.props.badgesArray[i].id}>{this.props.badgesArray[i].id} {badgeList.length}</li>);

        }
        return (
            <div>
                <h4 className="center-align">Your Badges</h4>
                <ul className="center-align">
                    {badgeList.length ? (
                         badgeList 
                    ) : (
                            <h4>None</h4>
                        )}
                </ul>
            </div>
        )
    }
}

export default BadgeContainer;
