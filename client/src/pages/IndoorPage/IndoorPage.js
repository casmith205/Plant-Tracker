import React, { Component } from "react";
import { JokeContainer, PottedPlants, Door  } from "../../components/Inside";
import OutdoorPage from "../OutdoorPage/OutdoorPage"
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
                <Draggable>
                    <div><PottedPlants 
                    name="pottedplant"
                    /></div>
                </Draggable>
                <Door 
                onClick={this.handleGoOutside}
                />
                <JokeContainer />
                {/* <Window /> Don't know why but it does not like the Window component*/}
            </div>
        )
    }
}

export default IndoorPage;