import React from "react";

export const DeadPlantInfo = props => (
    <div>
        {/* <!-- Dropdown Structure --> */}
        <ul id="tombstoneDropdown" className='dropdown-content'>
            <li>Plant Name: {props.plantName}  </li>
            <li> Indoor/outdoor: {props.type} </li>
            <li className="divider" tabindex="-1"></li>
            <li><i className="material-icons">nature</i>Plant Status: {props.status}</li>
            {!props.needsWater ? (
                <li><i className="material-icons">wb_sunny</i>No sun's gonna get to me anymore...
             </li>)
                : (
                    <li>Are you going to plant some flowers for me?<a className="waves-effect waves-light btn-small">Plant Flowers</a>
                    </li>
                )}
        </ul> 
    </div>
    )