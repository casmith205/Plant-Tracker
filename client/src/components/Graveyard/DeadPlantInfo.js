import React from "react";

export const DeadPlantInfo = props => (
    <div>
        {/* <!-- Dropdown Structure --> */}
        <ul id={"tombstoneDropdown" + props.plantId} 
        className='dropdown-content'
        >
            <li>Plant Name: {props.plantName}  </li>
            {/* <li className="divider" tabindex="-1"></li> */}
            <li><i className="material-icons">nature</i>Sadly, I am  {props.status}</li>
            {/* maybe a if statment displaying a different message if plant was 
            outdoor or indorr using props.type */}
            <li> I lived from {props.bday} to {props.dday}</li>
        </ul> 
    </div>
    )