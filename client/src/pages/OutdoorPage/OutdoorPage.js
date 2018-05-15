import { addPlant, AddPlantIcon } from "../../components";
import React, { Component } from "react";
import API from "../../utils/API";
import styles from './OutdoorPage.css';
import { House, Plants, OutsidePlants } from '../../components/Outside';
import IndoorPage from "../IndoorPage/IndoorPage";
import Draggable, { DraggableCore } from 'react-draggable'; //draggable

class OutdoorPage extends Component {
    // handleGoInside() {
    //     return <IndoorPage />
    // }

    render() {
        return (
            <div id="outdoorPage" className="content">

            <div className="row">
            <OutsidePlants />
               
            </div>
            <div className="row">
            <div className="col 14">
            <Draggable>
                    <div>
                        <AddPlantIcon
                            name="addplant"
                        /></div>
                </Draggable>
                <Plants />
                </div>
            <div id="house"className="col l2">
                <img src={require("../../images/house.png")} usemap="#image-map"/>
            <map name="image-map">
            <area target="_self" alt="" title="" href="/indoorplants" coords="165,221,485,560" shape="rect"/>
                    </map>
            </div>
            </div>
            </div>  
        )
    }
}

export default OutdoorPage;