import React, { Component } from "react";
import { JokeContainer, PottedPlants, Window } from "../../components/Inside";
import { AddPlantIcon } from "../../components";
import OutdoorPage from "../OutdoorPage/OutdoorPage";
import styles from './IndoorPage.css';
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import API from "../../utils/API";
import Weather from "../../components/Inside/Weather"

let userId = sessionStorage.getItem('userID');

class IndoorPage extends Component {
    // handleGoOutside() {
    //     return <OutdoorPage />
    // }
    state = {
        search: {
            commonName: "",
            indoorOutdoor: "indoor",
            userId: userId
        },
        newPlant: [],
        indoorPlants: [],
        userId: userId
                // error: ""
    };

    handleInputChange = event => {

        this.setState(
            {
                search: {
                    commonName: event.target.value,
                    indoorOutdoor: "indoor",
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
            })
            .catch(err => console.log(err))
        //   .catch(err => this.setState({ error: err.message }));--determite how err is getting returned
    }


    render() {
        return (
            <main>
                <Weather />
                <div id="indoorPage" className="content">
                    {/* <Weather /> */}
                    <div className="outsideweather"></div>

                    <AddPlantIcon
                        name="addplant"
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit} />
                    <div className="row">
                        <div className="col lg4">
                            <Draggable>
                                <div><PottedPlants
                                    name="pottedplant"
                                /></div>
                            </Draggable>

                            {/* <Window /> */}
                        </div>
                        <div className="col lg4">
                        </div>
                        <div className="col lg4">
                            <img id="door" src={require("../../images/door.png")} useMap="#image-map2" />

                            <map name="image-map2">
                                <area target="_self" alt="" title="" href="/outdoorplants" coords="6,8,196,423" shape="rect" />
                            </map>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default IndoorPage;




{/* <Weather /> */ }
{/* 
    <div className="row">
        <div className="col lg4">
            <Draggable>
                <div><PottedPlants
                    name="pottedplant"
                /></div>
            </Draggable> */}