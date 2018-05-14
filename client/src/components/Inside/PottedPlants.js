import React, { Component } from "react";
import { PlantInfo } from "../../components"
import Draggable, { DraggableCore } from 'react-draggable'; //draggable



class PottedPlants extends Component {
    render() {
        return (
            <Draggable>

                <div>
                    {/* <!-- Dropdown Trigger --> */}
                    <img className ="dropdown-button" data-activates="plantDropdown" 
                    src ={require("../../images/indoorflower.png")} alt ="potted plant" />
                    <PlantInfo 
                    plantName= "the coolest flower"
                    type = "indoor"
                    status = "alive"
                    needsWater = "true" />
                </div>
            </Draggable>

        )
    }
}

export default PottedPlants;