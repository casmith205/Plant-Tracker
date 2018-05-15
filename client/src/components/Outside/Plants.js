import React, { Component } from "react";
import { PlantInfo } from "../../components"
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import { PottedPlants } from "../Inside";


export const Plants = props => (
    <Draggable>

        <div>
            
            <img className = "dropdown-trigger" href='#' data-target="plantDropdown"
            src={require("../../images/outsideplant.png")} alt="outside plant" />

            <PlantInfo
                plantName="the coolest flower"
                type="outdoor"
                status="alive"
                needsWater="false" />
        </div>
    </Draggable>

);