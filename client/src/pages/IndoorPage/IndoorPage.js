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
                    {/* {this.renderWeather(data)} */}
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
                    </div>
                </div>
                <div id="door">
                <img src={require("../../images/door.png")} usemap="#image-map2" />

                <map name="image-map2">
                    <area target="_self" alt="" title="" href="/outdoorplants" coords="6,8,196,423" shape="rect" />
                </map>
                </div>
            </main>
        )
    }
}

export default IndoorPage;