import React from "react";
import PlantInfo from "../PlantInfo"

const PottedPlants = props => (

    <div>
        {/* <!-- Dropdown Trigger --> */}
        <a class='dropdown-trigger btn' href='#' data-target="plantDropdown">Plant</a>
        <PlantInfo />
    </div>

)

export default PottedPlants;