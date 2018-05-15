import React, { Component } from "react";
import { addPlant, AddPlantIcon } from "../../components";
import { JokeContainer, PottedPlants, Door, Window } from "../../components/Inside";
import OutdoorPage from "../OutdoorPage/OutdoorPage";
import styles from './IndoorPage.css';
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import API from "../../utils/API";

// let userId = sessionStorage.getItem('userId');

class IndoorPage extends Component {
    // handleGoOutside() {
    //     return <OutdoorPage />
    // }
    state = {
        search: {
            commonName: "",
            indoorOutdoor: "indoor",
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
                    indoorOutdoor: "indoor",
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
            <main>
                <div id="indoorPage" className="content">
                    {/* {this.renderWeather(data)} */}
                    <div className="outsideweather"></div>
                    <AddPlantIcon
                        name="addplant"
                        handleInputChange = {this.handleInputChange} 
                        handleFormSubmit = {this.handleFormSubmit}/>
                    <Draggable>
                        <div><PottedPlants
                            name="pottedplant"
                        /></div>
                    </Draggable>
                    <a href="/outdoorplants">
                        <Door />
                    </a>
                    <JokeContainer />
                    <Window />
                    
                </div>
            </main>
        )
    }
}

export default IndoorPage;