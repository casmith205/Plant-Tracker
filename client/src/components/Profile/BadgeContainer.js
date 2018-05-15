import React, { Component } from "react";

class BadgeContainer extends Component {
    render() {
        let badgeList = [];
        console.log("inside OutdoorPLantCOntainer", this.props.badgesArray, badgeList.length);
        for (var i = 0; i < this.props.badgesArray.length; i++) {
            if (this.props.badgesArray[i].type.toLowerCase() == 'outdoor') {
                badgeList.push(<li key={this.props.badgesArray[i].id}>{this.props.badgesArray[i].plantName} {badgeList.length}</li>);
            }
        }
        return (
                <div class="col s12 m7">
                    <div class="card">
                        <span class="card-title center-align"><h4>Your Badges</h4></span>
                    </div>
                    <ul className="center-align">
                        {badgeList.length ? (
                            badgeList
                        ) : (
                                <ul>None</ul>
                            )}
                    </ul>
                </div>
        )
    }
}

export default BadgeContainer;

