import React, { Component } from "react";
import { DeadPlantInfo, Tombstone } from "../../components/Graveyard/";
import API from "../../utils/API";
import styles from './GraveyardPage.css';
import Draggable, { DraggableCore } from 'react-draggable'; //draggable

class GraveyardPage extends Component {

    render() {
        return (
            <div id="graveyardpage">
                <h1>Welcome to the spooooooooky graveyard</h1>
                <Draggable>
                <Tombstone />
                </Draggable>
            </div>

            //     {/* //call gravestone on click
            //     //call hover modal on hover */}
        )
    }
}

export default GraveyardPage;