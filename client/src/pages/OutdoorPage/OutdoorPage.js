import { AddPlantIcon } from "../../components";
import React, { Component } from "react";
import API from "../../utils/API";
import styles from './OutdoorPage.css';
import { House, Plants, OutsidePlants } from '../../components/Outside';
import IndoorPage from "../IndoorPage/IndoorPage";
import Draggable, { DraggableCore } from 'react-draggable'; //draggable

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
        console.log(this.state.userId)
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
                console.log(odPlantArr)
                // this.setState({outdoorPlants: res.data})
            })
        console.log(this.state)
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
            })
            .catch(err => console.log(err))
        //   .catch(err => this.setState({ error: err.message }));--determite how err is getting returned
    }

    render() {
        return (
            <div id="outdoorPage" className="content">

                <div className="row">
                    <div className="col lg4">
                        <div>
                            <AddPlantIcon
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit} />
                            <Draggable>
                                <Plants />
                            </Draggable>
                        </div>
                        <div id="house" className="col l2">
                            <img src={require("../../images/house.png")} useMap="#image-map" />
                            <map name="image-map">
                                <area target="_self" alt="" title="" href="/indoorplants" coords="165,221,485,560" shape="rect" />
                            </map>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OutdoorPage;