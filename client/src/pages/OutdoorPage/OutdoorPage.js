import { AddPlantIcon } from "../../components";
import React, { Component } from "react";
import API from "../../utils/API";
import './OutdoorPage.css';
import { Plants } from '../../components/Outside';
// import IndoorPage from "../IndoorPage/IndoorPage";
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
// import { withRouter } from "react-router-dom";
let userId = sessionStorage.getItem('userID');


class OutdoorPage extends Component {

    state = {
        search: {
            commonName: "",
            indoorOutdoor: "outdoor",
            userId: userId
        },
        outdoorPlants: [],
        userId: userId
        // error: ""
    };

    componentDidMount() {
        console.log(sessionStorage)
        this.loadOutdoorPlants()
        if (sessionStorage.getItem("userID") == undefined) {
            console.log("inside of no user ID in session");
            this.props.history.push({
                pathname: "/",
            })
        }

    }

    componentDidUpdate() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = window.M.Dropdown.init(elems);
    }

    loadOutdoorPlants = () => {
        // console.log(this.state.userId)
        //get all plants and then filter for outdoor plants (that also are not dead)
        // and setState for those plants
        API.getPlants(this.state.userId)
            .then(res => {
                let odPlantArr = []
                console.log(res.data)
                for (var i = 0; i < res.data.length; i++) {
                    // console.log(res.data[i].type)
                    if (res.data[i].type === "outdoor" && res.data[i].status !== "dead") {
                        odPlantArr.push(res.data[i])
                    }
                }
                // console.log("array",odPlantArr)
                this.setState({ outdoorPlants: odPlantArr })
                console.log("array in state", this.state.outdoorPlants)
                // this.setState({outdoorPlants: res.data})
            })
    }

    //handle user telling us the plant has died.  Remove that plant from the current displayed plants
    //  and update the DB with that status
    killPlant = plantInfo => {
        API.updatePlant(plantInfo)
            .then(res => {
                console.log(plantInfo)
                const plantid = parseInt(plantInfo.split("/")[0], 10)
                this.setState({
                    outdoorPlants: this.state.outdoorPlants.filter(function (plant) {
                        if (plant.id !== plantid) {
                            return true
                        }
                    })
                })
            })
    }

    //update plant needs to be watered bool to false 
    // and let user know of their success
    waterPlant = plantId => {
        API.updatePlant(plantId)
            .then(res => {
                alert("way to keep those plants alive... keep it up")
                console.log(res)
                console.log(plantId)
                this.setState({
                    outdoorPlants: this.state.outdoorPlants.map(plant => {
                        if (plant.id !== plantId) {
                            return plant
                        }
                        else {
                            return { ...plant, needsToBeWatered_bool: false }
                        }
                    })
                })
            })
    }

    //update user inputted value in state - awaiting a 'Sumbit'
    handleInputChange = event => {

        this.setState(
            {
                search: {
                    commonName: event.target.value,
                    indoorOutdoor: "outdoor",
                    userId: userId
                }
            }

        )
        console.log(this.state.search)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("handle submit funtion")
        console.log(this.state.search)
        API.savePlant(this.state.search)
            .then(res => {
                console.log("res", res)
                this.state.outdoorPlants.push(res)
                this.setState({ outdoorPlants: this.state.outdoorPlants })
                window.M.toast({ html: "You added a new plant!  I'm so excited, I wet my plants!" })
            })
            .catch(err => {
                console.log(err.response)
                alert(err.response.data.msg + ". Please try again")
            })
        //   .catch(err => this.setState({ error: err.message }));--determite how err is getting returned
    }

    render() {
        const plants = this.state.outdoorPlants.map(plant => {

            return (
                <div className="col s4">
                    <Plants
                        key={plant.id}
                        plantId={plant.id}
                        plantName={plant.plantName}
                        type={plant.type}
                        status={plant.status}
                        needsWater={plant.needsToBeWatered_bool}
                        killplant={this.killPlant}
                        waterPlant={this.waterPlant}
                        {...this.state}
                    />
                </div>
            )
        })
        console.log(plants)

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
                    <div className="col s5" id="house">
                        <img className="materialboxed" src={require("../../images/house.png")} useMap="#image-map" alt="house" />

                        <map name="image-map">
                            <area target="_self" alt="" title="" href="/indoorplants" coords="165,221,485,560" shape="rect" />
                        </map>
                    </div>

                    <div id="DraggablePlants">
                        {plants}
                    </div>

                </div>
            </div>

        )
    }
}

export default OutdoorPage;