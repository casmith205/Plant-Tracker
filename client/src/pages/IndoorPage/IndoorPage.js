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
            <div>
                <div className="sharethis-inline-share-buttons"></div>
                <Window 
                onClick={this.handleGoOutside}
                />
                <Draggable>
                    <div><PottedPlants 
                    name="pottedplant"
                    /></div>
                </Draggable>
                <Door />
                <JokeContainer />
            </div>
        )
    }
}

export default IndoorPage;