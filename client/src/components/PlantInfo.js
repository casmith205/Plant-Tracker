import React from "react";

import "./Dropdown.css";

export const PlantInfo = props => (
    <div>

        {/* <!-- Dropdown Structure --> */}
        <ul id={"plantDropdown" + props.plantId}
            className='dropdown-content' >
           
            <li> <b>Plant:</b> {props.plantName} </li>
            <li> <b>Indoor/Outdoor:</b> {props.type} </li>
            {/* <li className="divider" tabIndex="-1"></li> */}
            <li><i className="material-icons">nature</i> <b>Plant Status:</b> {props.status}</li>
            {!props.needsWater ? (
                <li>
                    <i className="material-icons">wb_sunny</i> <b>Water Status:</b> I am full of hydration!
             </li>)
                : (
                    <li> I'm parched feed me </li>
                )}
            <li>
                <a onClick={() => props.waterPlant(props.plantId)}
                    className="btn-small">WATER ME</a>
            </li>
            <li>
                <span onClick={() => props.killPlant(props.plantId + "/dead")}
                    className="waves-effect waves-light btn-small grey darken-3"> I DIED :( </span>
            </li>
        </ul>
    </div>



)
