import React, { Component } from "react";
import NavBar from "../components/NavBar";
import API from "../../utils/API";
import Footer from "../components/footer";
import styles from '/OutdoorPage.css';
import { House, OutsidePlants } from '../components/Outside/';
import Draggable, { DraggableCore } from 'react-draggable'; //draggable

class OutdoorPage extends Component {

    renderAddPlant() {
        return (
            <Draggable>
                <div
                    className="outdoorPlant"
                    role="img"
                    aria-label="outdoorPlant"
                    src="../components/plants.png"
                >I can now be moved around!</div>
            </Draggable>
        )
    }

    render() {
        return (
            <div>
                <NavBar />
                <House />
                <AddPlantIcon
                    name="addplant"
                    onClick={this.renderAddPlant}
                />
                <Footer />
            </div>
        )
    }

}

export default OutdoorPage;