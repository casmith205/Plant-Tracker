import React from "react";



export const PlantInfo = props => (
    <div>
        {/* <!-- Dropdown Trigger --> */}
        <a className='dropdown-trigger btn' href='#' data-target="plantDropdown">Plant</a>

        {/* TEST W/O USING PROPS */}
        <ul id="plantDropdown" className='dropdown-content'>
            <li>Plant Name: flowerrrrr</li>
            <li> Indoor/outdoor:  </li>
            <li className="divider" tabindex="-1"></li>
            <li><i className="material-icons">nature</i>Plant Status: totally alive</li>
            <li><i className="material-icons">wb_sunny</i>Water Status: I am full of hydration!
            <a className="waves-effect waves-light btn-small"></a>
            </li>

            <li>I'm parched feed me<a className="waves-effect waves-light btn-small">WATER ME</a>
            </li>
        </ul>
        <p>Plant Info component</p>
        {/* <!-- Dropdown Structure --> */}
        {/* <ul id='dropdown1' className='dropdown-content'>
            <li>Plant Name: {props.plantName}  </li>
            <li> Indoor/outdoor: {props.type} </li>
            <li className="divider" tabindex="-1"></li>
            <li><i className="material-icons">nature</i>Plant Status: {props.status}</li>
            {!props.needsWater ? (
                <li><i className="material-icons">wb_sunny</i>Water Status: I am full of hydration!
             </li>)
                : (
                    <li>I'm parched feed me<a className="waves-effect waves-light btn-small">WATER ME</a>
                    </li>
                )}
        </ul> */}
    </div>

    )