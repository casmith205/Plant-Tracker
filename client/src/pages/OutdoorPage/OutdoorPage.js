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
        results: [],
        // error: ""
    };

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
                this.setState({ results: res });
            })
            .catch(err => console.log(err))
        //   .catch(err => this.setState({ error: err.message }));--determite how err is getting returned
    }

    render() {
        return (
            <div id="outdoorPage" className="content">
             
             <div className="row">
                    <OutsidePlants />
                </div>

                <div className="row">
                <div className="col lg4">
                    <Draggable>
                        <div>
                            <AddPlantIcon
                                name="addplant"
                            /></div>
                    </Draggable>
                    <Plants />
                    </div>
                    <div id="house" className="col l2">
                        <img src={require("../../images/house.png")} useMap="#image-map" />
                        <map name="image-map">
                            <area target="_self" alt="" title="" href="/indoorplants" coords="165,221,485,560" shape="rect" />
                        </map>
                    </div>
                    </div>
            </div>
        )
    }
}

export default OutdoorPage;