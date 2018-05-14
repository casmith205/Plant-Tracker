import React, { Component } from "react";
import { JokeContainer, PottedPlants, Door, Window  } from "../../components/Inside";
import OutdoorPage from "../OutdoorPage/OutdoorPage";
import styles from './IndoorPage.css';
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import API from "../../utils/API";

class IndoorPage extends Component {
    handleGoOutside() {
        return <OutdoorPage />
    }

    render() {
        return (
            <div id="indoorPage">
                {/* {this.renderWeather(data)} */}
                <div className="outsideweather"></div>
                {/* <Draggable> */}
                    <PottedPlants 
                    name="pottedplant"
                    />
                {/* </Draggable> */}
                <Door 
                onClick={this.handleGoOutside}
                />
                <JokeContainer />
                <Window />
            </div>
        )
    }
}

export default IndoorPage;