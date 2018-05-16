import React from "react";
import { PlantInfo } from "../../components"
import Draggable, { DraggableCore } from 'react-draggable'; //draggable


export const Plants = props => (
    // <Draggable>

        <div>
            
            <img className = "dropdown-trigger" href='#' data-target="plantDropdown"
            src={require("../../images/outsideplant.png")} alt="outside plant" />

            <PlantInfo
                plantId= {props.id}
                plantName="the coolest flower"
                type="outdoor"
                status="alive"
                needsWater="false" />
        </div>
    /* </Draggable> */

);