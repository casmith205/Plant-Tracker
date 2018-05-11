import NavBar from "../../components/NavBar"
import Plants from "../../components/Outside/Plants"
import AddPlant from "../../components/AddPlant"
import AddPlantIcon from "../../components/AddPlantIcon"
import React, { Component } from "react";
import API from "../../utils/API";
import Footer from "../../components/Footer";
// import styles from '/OutdoorPage.css';
import House from '../../components/Outside/House';
// import Draggable, { DraggableCore } from 'react-draggable'; //draggable

class OutdoorPage extends Component {

    render() {
        return (
            <div id="outdoorPage">
                <NavBar />
                <House
                />
                <AddPlantIcon
                    name="hello Matthew you lovely person. --matthew"
                />
                <Footer />
            </div>
        )
    }
}

export default OutdoorPage;