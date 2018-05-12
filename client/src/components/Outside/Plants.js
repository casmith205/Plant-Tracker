import React from "react";
import PlantInfo from "../PlantInfo"

const Plants = props => (
    // <h4> plants </h4>
    <div>
    {/* <!-- Dropdown Trigger --> */}
    <a class='dropdown-trigger btn' href='#' data-target="plantDropdown">Plant</a>
    <PlantInfo />
    </div>

)

export default Plants;