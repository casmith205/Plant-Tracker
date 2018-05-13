import React from "react";
import { PlantInfo } from "../../components"

export const Plants = props => (
    // <h4> plants </h4>
    <div>
        {/* <!-- Dropdown Trigger --> */}
        <a class='dropdown-trigger btn' href='#' data-target="plantDropdown">Plant</a>
        <PlantInfo />
    </div>

)