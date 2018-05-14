import React, {Component} from "react";
import { PlantInfo } from "../../components"


class PottedPlants extends Component {
    render() {
        return (

    <div>
        {/* <!-- Dropdown Trigger --> */}
        <a className='dropdown-trigger btn' href='#' data-target="plantDropdown">Potted Plant</a>
        <PlantInfo />
    </div>
        )}
}

export default PottedPlants;