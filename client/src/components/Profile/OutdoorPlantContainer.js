import React, { Component } from "react";

class OutdoorPlantContainer extends Component {
    render() {
        let outdoorPlantList = [];
        console.log("inside OutdoorPLantCOntainer", this.props.plantsArray, outdoorPlantList.length);
        for (var i = 0; i < this.props.plantsArray.length; i++) {
            if (this.props.plantsArray[i].type.toLowerCase() == 'outdoor') {
                outdoorPlantList.push(<li key={this.props.plantsArray[i].id}>{this.props.plantsArray[i].plantName} {outdoorPlantList.length}</li>);
            }
        }
        return (
            <div class="row">
            <div class="col s12 m7">
                <div class="card">
                    <span class="card-title center-align"><h4>Your Outdoor Plants</h4></span>
                </div>
                <div class="card-content">
                        <ul className="center-align">
                            {outdoorPlantList.length ? (
                                outdoorPlantList
                            ) : (
                                    <ul>None</ul>
                                )}
                        </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default OutdoorPlantContainer;

