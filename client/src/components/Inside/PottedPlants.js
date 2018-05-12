import React, {Component} from "react";
import PlantInfo from "../PlantInfo"


class PottedPlants extends Component {
    render() {
        return (

    <div>
        {/* <!-- Dropdown Trigger --> */}
        <a class='dropdown-trigger btn' href='#' data-target="plantDropdown">Plant</a>
        <PlantInfo />
    </div>
        )}
}


export default PottedPlants;