import React, { Component } from "react";
import styles from "./BadgeContainer.css"

class BadgeContainer extends Component {
    render() {
        let badgeList = [];
        console.log("inside OutdoorPLantCOntainer", this.props.badgesArray, badgeList.length);
        for (var i = 0; i < this.props.badgesArray.length; i++) {
            if (this.props.badgesArray[i].type.toLowerCase() == 'outdoor') {
                badgeList.push(<li className="card" key={this.props.badgesArray[i].id}><div id="badgecontainer"></div>{this.props.badgesArray[i].plantName} {badgeList.length}</li>);
            }
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

