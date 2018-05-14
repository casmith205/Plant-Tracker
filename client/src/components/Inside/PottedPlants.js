import React, { Component } from "react";
import { PlantInfo } from "../../components"
import Draggable, { DraggableCore } from 'react-draggable'; //draggable



class PottedPlants extends Component {
    render() {
        return (
            <Draggable>

                <div>
                    {/* <!-- Dropdown Trigger --> */}

                    {/* <a class="btn dropdown-button" href="#" data-activates="plantDropdown">Plant
         <i class="mdi-navigation-arrow-drop-down right"></i></a> */}
                    <a className='dropdown-button btn' data-activates="plantDropdown">Potted Plant</a>
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