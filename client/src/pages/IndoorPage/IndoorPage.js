import React, { Component } from "react";

import { JokeContainer, PottedPlants, Window } from "../../components/Inside";

import OutdoorPage from "../OutdoorPage/OutdoorPage";
import styles from './IndoorPage.css';
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import API from "../../utils/API";

class IndoorPage extends Component {
    // handleGoOutside() {
    //     return <OutdoorPage />
    // }

    render() {
        return (
            <main>
                <div id="indoorPage" className="content">
                    {/* <Weather /> */}
                    <div className="outsideweather"></div>
                    <div className="row">
                    <div className="col lg4">
                    <Draggable>
                        <div><PottedPlants
                            name="pottedplant"
                        /></div>
                    </Draggable>
                    
                    <JokeContainer />
                    <Window />
                    </div>
                    <div className="col lg4">
                    </div>
                <div className="col lg4">
                <img id="door" src={require("../../images/door.png")} usemap="#image-map2" />

                <map name="image-map2">
                    <area target="_self" alt="" title="" href="/outdoorplants" coords="6,8,196,423" shape="rect" />
                </map>
                </div>
                </div>
                </div>
            </main>
        )
    }
}

export default IndoorPage;