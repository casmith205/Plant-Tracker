import { AddPlantIcon } from "../../components";
import React, { Component } from "react";
import API from "../../utils/API";
import './OutdoorPage.css';
import { Plants } from '../../components/Outside';
// import IndoorPage from "../IndoorPage/IndoorPage";
import Draggable from 'react-draggable'; //draggable

import { withRouter } from "react-router-dom";

let userId = sessionStorage.getItem('userID');


class OutdoorPage extends Component {
    // handleGoInside() {
    //     return <IndoorPage />
    // }

    state = {
        search: {
            commonName: "",
            indoorOutdoor: "outdoor",
            userId: userId
        },
        newPlant: [],
        outdoorPlants: [],
        userId: userId
        // error: ""
    };

    componentDidMount() {
        this.loadOutdoorPlants()
        // console.log("id from storage", userId)
    }

    loadOutdoorPlants = () => {
        if (sessionStorage.getItem("userID") == undefined) {
            console.log("inside of no user ID in session");
            this.props.history.push({
                pathname: "/",
            })
        }
        // console.log(this.state.userId)
        API.getPlants(this.state.userId)
            .then(res => {
                let odPlantArr = []
                console.log(res.data)
                for (var i = 0; i < res.data.length; i++) {
                    // console.log(res.data[i].type)
                    if (res.data[i].type === "outdoor") {
                        odPlantArr.push(res.data[i])
                    }
                }
                // console.log("array",odPlantArr)
                this.setState({ outdoorPlants: odPlantArr })
                console.log("array in state", this.state.outdoorPlants)
                // this.setState({outdoorPlants: res.data})
            })
    }

    handleInputChange = event => {

        this.setState(
            {
                search: {
                    commonName: event.target.value,
                    indoorOutdoor: "outdoor",
                    userId: userId
                    // userId: userId
                }
            }
            // this.setState({abc: {xyz: 'new value'}});

        )
        console.log(this.state.search)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("handle submit funtion")
        console.log(this.state.search)
        API.savePlant(this.state.search)
            .then(res => {
                // if (res.data.status === "error") {
                //   throw new Error(res.data.message);
                // }
                console.log("res", res)
                this.setState({ newPlant: res });
                alert ("You added a new plant!  I'm so excited, I wet my plants!")
            })
            .catch(err => {
                console.log("in .catch of getPlants");
                console.log(err);
            })
                    //   .catch(err => this.setState({ error: err.message }));--determite how err is getting returned
    }

    render() {
        return (
            <div id="outdoorPage" className="content">

                <div className="row">
                    <div className="col lg4">

                        <AddPlantIcon
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </div>
                </div>

                <div className="row">
                    {this.state.outdoorPlants.map(plant => (
                        <div className="col s2">
                            <Draggable>
                                <Plants
                                    key={plant.id}
                                    plantId={plant.id}
                                    plantName={plant.plantName}
                                    type={plant.type}
                                    status={plant.status}
                                    needsWater={plant.needsToBeWatered_bool}

                                />
                            </Draggable>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div id="house">
                        <img src={require("../../images/house.png")} useMap="#image-map" alt="house" />
                        <map name="image-map">
                            <area target="_self" alt="" title="" href="/indoorplants" coords="165,221,485,560" shape="rect" />
                        </map>
                    </div>
                </div>

            </div >
        )
    }
}

export default OutdoorPage;