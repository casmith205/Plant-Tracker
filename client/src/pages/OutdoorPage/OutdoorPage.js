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
            <div id="outdoorPage" clasNames="content">
                <div className="row">
                    <a href="/indoorplants">
                        <House />
                    </a>
                    <OutsidePlants />
                    <Draggable>
                        <div>
                            <AddPlantIcon
                                name="addplant"
                            /></div>
                    </Draggable>
                    <Plants />
                </div>
            </div>
        )
    }
}

export default OutdoorPage;