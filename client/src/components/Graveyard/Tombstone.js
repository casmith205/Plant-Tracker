import React from "react";
import Draggable from 'react-draggable'; //draggable
import { DeadPlantInfo } from "../../components/Graveyard";

export const Tombstone = props => (
    <Draggable>
        <div>

            <img className="dropdown-trigger"
                // id="tombstone"
                href="#"
                data-target={"tombstoneDropdown"+ props.plantId}
                src={require("../../images/tombstone.png")}
                alt="tombstone"
            />

            <DeadPlantInfo
                key = {props.plantId}
                plantId = {props.plantId}
                plantName={props.plantName}
                type={props.type}
                status={props.status}
                bday = {props.born}
                dday= {props.died}

            />

        </div>
    </Draggable>
)