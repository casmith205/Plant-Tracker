import React from "react";
import { PlantInfo } from "../../components"

export const Plants = props => (
    <div>
        <h4> This is the plants.js file. The word plants doesn't look real anymore </h4>
        {/* <!-- Dropdown Trigger --> */}
        <a className='dropdown-trigger btn' href='#' data-target="plantDropdown">Plant</a>
        <PlantInfo />
    </div>

)