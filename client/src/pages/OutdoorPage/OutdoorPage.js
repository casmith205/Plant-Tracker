import { AddPlantIcon } from "../../components";
import React, { Component } from "react";
import API from "../../utils/API";
import styles from './OutdoorPage.css';
import { House, Plants, OutsidePlants } from '../../components/Outside';
import IndoorPage from "../IndoorPage/IndoorPage";
import Draggable, { DraggableCore } from 'react-draggable'; //draggable

// let userId = sessionStorage.getItem('userId');

class OutdoorPage extends Component {
    // handleGoInside() {
    //     return <IndoorPage />
    // }


    state = {
        search: {
            commonName: "",
            indoorOutdoor: "outdoor",
            userId:""
        },
        newPlant: [],
        outdoorPlants: [],
        userId: 1
        // error: ""
    };

    componentDidMount(){
        this.loadOutdoorPlants()
    }

    loadOutdoorPlants =() => {
        console.log(this.state.userId)
        API.getUser(this.state.userId)
        .then(res => {
            this.setState({outdoorPlants: res.data.UserPlants})
        })
        console.log(this.state)
    }

    handleInputChange = event => {
    
        this.setState(
            {
                search: {
                    commonName: event.target.value,
                    indoorOutdoor: "outdoor",
                    userId:1
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
                console.log("res",res)
                this.setState({ newPlant: res });
            })
            .catch(err => console.log(err))
        //   .catch(err => this.setState({ error: err.message }));--determite how err is getting returned
    }

    render() {
        return (
            <div id="outdoorPage" className="content">\
                <Plants />
                {/* <div className="row"> */}
                <AddPlantIcon
                    name="addplant"
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} />

                    {/* <div id="house" className="col l2"> */}
                        <img src={require("../../images/house.png")} useMap="#image-map" />
                        <map name="image-map">
                            <area target="_self" alt="" title="" href="/indoorplants" coords="165,221,485,560" shape="rect" />
                        </map>
                    {/* </div> */}
            </div>
        )
    }
}

export default OutdoorPage;