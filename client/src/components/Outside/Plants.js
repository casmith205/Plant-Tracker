import React, { Component } from "react";
import { PlantInfo } from "../../components"
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import { PottedPlants } from "../Inside";


export const Plants = props => (
    <Draggable>

        <div>
            {/* <!-- Dropdown Trigger --> */}
            <img className="dropdown-button" data-activates="plantDropdown" src="../../images/outsideplant.png" alt="outside plant" />
            <PlantInfo
                plantName="the coolest flower"
                type="outdoor"
                status="alive"
                needsWater="false" />
        </div>
    </Draggable>

)



export default PottedPlants