import React from "react";
import "../Dropdown.css";

export const DeadPlantInfo = props => (
    <div>
        {/* <!-- Dropdown Structure --> */}
        <ul id={"tombstoneDropdown" + props.plantId} 
        className='dropdown-content'
        >
            <li><b>Plant Name:</b> {props.plantName}  </li>
            <li><i className="material-icons">nature</i>Sadly, I am  {props.status}</li>
            {/* maybe a if statment displaying a different message if plant was 
            outdoor or indorr using props.type */}
            <li><b> I lived from</b> {props.bday} <b>to</b> {props.dday}</li>
        </ul> 
    </div>
    )