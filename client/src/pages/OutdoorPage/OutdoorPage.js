import React, { Component } from "react";
import NavBar from "../components/NavBar";
import API from "../../utils/API";
import styles from '/OutdoorPage.css';
import { House, OutsidePlants } from '../components/Outside/';
import Draggable, {DraggableCore} from 'react-draggable'; //draggable

class OutdoorPage extends Component {


  
    render() {
        return (
            <div>
                <NavBar />
                <House />
                <AddPlantIcon 
                name="addplant"
                onClick={this.handleAddPlant}
                />
                // Share buttons
                <div className="sharethis-inline-share-buttons"></div>

            </div>
        )
    }

}

export default OutdoorPage;