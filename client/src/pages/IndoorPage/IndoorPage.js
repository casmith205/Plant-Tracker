import React, { Component } from "react";
import { JokeContainer, PottedPlants, Door, Window, Weather  } from "../../components/Inside";
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
            <main>
                <div id="indoorPage" className="content">
                    {/* <Weather /> */}
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
                    <Window />
                </div>
            </main>
        )
    }
}

export default IndoorPage;