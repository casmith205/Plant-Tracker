import React, { Component } from "react";

class IndoorContainer extends Component {
    render() {
        let indoorPlantList = [];
        console.log("inside OutdoorPLantCOntainer", this.props.plantsArray);
        for (var i = 0; i < this.props.plantsArray.length; i++) {
            if (this.props.plantsArray[i].type.toLowerCase() == 'indoor') {
                indoorPlantList.push(<li key={this.props.plantsArray[i].id}>{this.props.plantsArray[i].plantName} {indoorPlantList.length}</li>);
            }
        }
        return (
            <div>
                <h4 className="center-align">Your Indoor Plants</h4>
                <ul className="center-align">
                    {indoorPlantList.length ? (
                         indoorPlantList
                    ) : (
                            <h4>None</h4>
                        )}
                </ul>
            </div>
        )
    }
}

export default IndoorContainer;