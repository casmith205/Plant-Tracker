import React, { Component } from "react";
import Draggable, { DraggableCore } from 'react-draggable'; //draggable


const AddPlant = props => (

        <Draggable>
            <div
                className="outdoorPlant"
                role="img"
                aria-label="outdoorPlant"
                src="../images/outsideplant.png"
            ></div>
        </Draggable>
    
)

export default AddPlant;