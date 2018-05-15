import React, { Component } from "react";
import { addPlant, AddPlantIcon } from "../../components";
import { JokeContainer, PottedPlants, Door, Window } from "../../components/Inside";
import OutdoorPage from "../OutdoorPage/OutdoorPage";
import styles from './IndoorPage.css';
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import API from "../../utils/API";

class IndoorPage extends Component {
    // handleGoOutside() {
    //     return <OutdoorPage />
    // }
    state = {
        search: {
            plant: "",
            type: "indoor"
        },
        results: [],
        // error: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("handle submit funtion")
        API.savePlant(this.state.search)
            .then(res => {
                // if (res.data.status === "error") {
                //   throw new Error(res.data.message);
                // }
                console.log(res)
                this.setState({ results: res.data });
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