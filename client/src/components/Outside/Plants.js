import React from "react";
import { PlantInfo } from "../../components"
import Draggable, { DraggableCore } from 'react-draggable'; //draggable

export const Plants = props => (
    <Draggable>
    <div>
        
            <img 
            className = "dropdown-trigger" href='#' 
            data-target={"plantDropdown" + props.plantId}
            src={require("../../images/outsidepottedplant2.png")}  alt="outside plant" 
            />

            <PlantInfo
                key = {props.plantId}
                plantId = {props.plantId}
                plantName= {props.plantName}
                type = {props.type}
                status = {props.status}
                needsWater = {props.needsWater}
                killPlant = {props.killplant}
                waterPlant = {props.waterPlant}
                {...props}
                 />
           
    </div>
    </Draggable>

);

