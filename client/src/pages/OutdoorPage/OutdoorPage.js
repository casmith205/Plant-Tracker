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
            <div id="outdoorPage" className="content">\                
                <Plants />
            {/* <div className="row"> */}
                    <div>
                        <AddPlantIcon
                            name="addplant"
                        /></div>

            {/* </div> */}
            <div className="row">
            <div className="col l2">
            </div>
                <div className="col l2">
                <a href="/indoorplants"><House
                /></a>
                </div>
                </div>
               
            </div>    
        )
    }
}

export default OutdoorPage;