import React from "react";



export const PlantInfo = props => (
    <div>

        {/* <!-- Dropdown Structure --> */}
        <ul id={"plantDropdown" + props.plantId}
            className='dropdown-content' >
            <li>
                <span onClick={() => props.killPlant(props.plantId + "/dead")}
                    className="waves-effect waves-light btn-small grey darken-3"> DEAD</span>
            </li>
            <li>Plant Name: {props.plantName}  </li>
            <li> Indoor/outdoor: {props.type} </li>
            {/* <li className="divider" tabIndex="-1"></li> */}
            <li><i className="material-icons">nature</i>Plant Status: {props.status}</li>
            {!props.needsWater ? (
                <li>
                    <i className="material-icons">wb_sunny</i>Water Status: I am full of hydration!
             </li>)
                : (
                    <li>I'm parched feed me </li>
                )}
            <li>
                <a onClick={() => props.waterPlant(props.plantId)}
                    className="btn-small">WATER ME</a>
            </li>
        </ul>
    </div>



)
