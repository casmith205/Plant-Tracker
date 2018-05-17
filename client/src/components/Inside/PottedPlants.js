import React from "react";
import { PlantInfo } from "../../components"
// import Draggable, { DraggableCore } from 'react-draggable'; //draggable



const PottedPlants = props => (
    // return (
    // <Draggable>

    // <div>
    //     {/* <!-- Dropdown Trigger --> */}
    //     <img className = "dropdown-trigger" href='#' data-target={"plantDropdown" + props.plantId}
    //     src ={require("../../images/indoorflower.png")} alt ="potted plant" />
    //     <PlantInfo 
    //     key = {props.plantId}
    //     plantId = {props.plantId}
    //     plantName= {props.plantName}
    //     type = {props.type}
    //     status = {props.status}
    //     needsWater = {props.needsWater}
    //     killPlant = {props.killplant}
    //     waterPlant = {props.waterPlant}
    //     />
    // </div>

    <div>
        {/* <!-- Dropdown Trigger --> */}
        <img className="dropdown-trigger" href='#' data-target="plantDropdown" 
            src={require("../../images/indoorflower.png")} alt="potted plant" />
        <PlantInfo
            // plantId={props.plantId}
            plantName="flowerrrrrr"
            type="indoor"
            status="alive"
            needsWater="true"
            // killPlant={props.killplant}
            // waterPlant={props.waterPlant}
        />
    </div>
    // </Draggable>

    // )

)


export default PottedPlants;