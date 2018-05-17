import React, { Component } from "react";
import styles from "./Containers.css"

class IndoorContainer extends Component {
    render() {
        let indoorPlantList = [];
        console.log("inside OutdoorPLantCOntainer", this.props.plantsArray);
        for (var i = 0; i < this.props.plantsArray.length; i++) {
            if (this.props.plantsArray[i].type.toLowerCase() === 'indoor') {
                indoorPlantList.push(<li key={this.props.plantsArray[i].id}>{this.props.plantsArray[i].plantName} {indoorPlantList.length}</li>);
            }
        }
        return (
            <div className="row">
                <div className="col s12 m10">
                    <div className="card plantContainer">
                        <span className="card-title center-align"><h4>Your Indoor Plants</h4></span>
                        <hr />
                        <div className="card-content">
                            <ul className="center-align">
                                {indoorPlantList.length ? (
                                    indoorPlantList
                                ) : (
                                        <ul>None</ul>
                                    )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndoorContainer;



