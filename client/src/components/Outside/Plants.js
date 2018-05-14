import React, { Component } from "react";
import { PlantInfo } from "../../components"
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import { PottedPlants } from "../Inside";


export const Plants = props => (
    <Draggable>

        <div>
            {/* <!-- Dropdown Trigger --> */}
            <a className='dropdown-button btn' data-activates="plantDropdown">Outside Plant</a>
            <PlantInfo
                plantName="the coolest flower"
                type="indoor"
                status="alive"
                needsWater="true" />
        </div>
    </Draggable>

)

// class OutsidePlants extends Component {
//     render() {
//         return (
//             <Draggable>
//             <div>
//             <a className='dropdown-button btn' data-activates="plantDropdown">Potted Plant</a>
//                     <PlantInfo 
//                     plantName= "the coolest flower"
//                     type = "indoor"
//                     status = "alive"
//                     needsWater = "true" /> 
//                 </div>
//             </Draggable>
//         )
//     }
// }

export default PottedPlants