import React, { Component } from "react";
import { JokeContainer, PottedPlants, Door, Window } from "../../components/Inside/";
import OutdoorPage from "../OutdoorPage/OutdoorPage"
import API from "../../utils/API";

class IndoorPage extends Component {
    handleGoOutside() {
        return <OutdoorPage />
    }

    render() {
        return (
            <div id="indoorPage">
                <Window 
                
                />
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
            </div>
        )
    }
}

export default IndoorPage;