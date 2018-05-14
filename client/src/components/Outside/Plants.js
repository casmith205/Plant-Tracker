import React, { Component } from "react";
import { PlantInfo } from "../../components"
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import { PottedPlants } from "../Inside";


export const Plants = props => (
    <Draggable>

        <div>
            {/* <!-- Dropdown Trigger --> */}
            {/* <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a> */}

            {/* <img className="dropdown-button" data-activates="plantDropdown"  */}
            <img className = "dropdown-trigger" href='#' data-target="plantDropdown"
            src="../../images/outsideplant.png" alt="outside plant" />
            <PlantInfo
                plantName="the coolest flower"
                type="outdoor"
                status="alive"
                needsWater="false" />
        </div>
    </Draggable>

)



export default PottedPlants