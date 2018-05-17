import React from "react";
import { PlantInfo } from "../../components"
// import Draggable, { DraggableCore } from 'react-draggable'; //draggable



const PottedPlants = props =>(
        // return (
            // <Draggable>

                <div>
                    {/* <!-- Dropdown Trigger --> */}
                    <img className = "dropdown-trigger" href='#' data-target={"plantDropdown" + props.plantId}
                    src ={require("../../images/indoorflower.png")} alt ="potted plant" />
                    <PlantInfo 
                    key = {props.plantId}
                    plantId = {props.plantId}
                    plantName= {props.plantName}
                    type = {props.type}
                    status = {props.status}
                    needsWater = {props.needsWater}
                    />
                </div>
            // </Draggable>

        // )

    )


export default PottedPlants;