import Plants from "../../components/Outside/Plants";
import AddPlant from "../../components/addPlant";
import AddPlantIcon from "../../components/AddPlantIcon";
import React, { Component } from "react";
import API from "../../utils/API";
// import styles from '/OutdoorPage.css';
import House from '../../components/Outside/House';
import IndoorPage from "../IndoorPage/IndoorPage";
// import Draggable, { DraggableCore } from 'react-draggable'; //draggable

class OutdoorPage extends Component {
    handleGoInside() {
        return <IndoorPage />
    }

    render() {
        return (
            <div id="outdoorPage">
                <House
                    onClick={this.handleGoInside}
                />
                <Draggable>
                    <div>
                        <AddPlantIcon
                            name="addplant"
                        /></div>
                </Draggable>
            </div>
        )
    }
}

export default OutdoorPage;