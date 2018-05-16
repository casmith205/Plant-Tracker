import React, { Component } from "react";
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import { DeadPlantInfo } from "../../components/Graveyard";

export const Tombstone = props => (
    <Draggable>
        <div>

            <img className="dropdown-trigger"
                id="tombstone"
                data-target="plantDropdown"
                src={require("../../images/tombstone.png")}
                alt="outside plant"
            />

            <DeadPlantInfo
                plantName="I'm a tombstone, not the pizza kind"
                type="graveyard"
                status="dead"
            />

        </div>
    </Draggable>
)